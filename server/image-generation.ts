import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

export type CourseImageInput = { slug?: string; title: string; category: string; description?: string; level?: string; subject?: string; audience?: string };
type ProviderImage = { bytes?: Uint8Array; remoteUrl?: string; mimeType: string };
export type CourseImageResult = { imageUrl: string; prompt: string; provider: string };

export class CourseImageError extends Error {
  constructor(public readonly code: "IMAGE_PROVIDER_NOT_CONFIGURED" | "IMAGE_GENERATION_FAILED" | "IMAGE_STORAGE_FAILED", message: string) { super(message); this.name = "CourseImageError"; }
}

interface CourseImageProvider { readonly name: string; generate(prompt: string): Promise<ProviderImage>; }

const categoryFallbacks: Record<string, string> = {
  "web development": "/images/fallbacks/web-development.svg", "frontend development": "/images/fallbacks/web-development.svg", "backend development": "/images/fallbacks/web-development.svg", "full-stack development": "/images/fallbacks/web-development.svg", python: "/images/fallbacks/web-development.svg", javascript: "/images/fallbacks/web-development.svg", "artificial intelligence": "/images/fallbacks/artificial-intelligence.svg", "machine learning": "/images/fallbacks/artificial-intelligence.svg", "data science": "/images/fallbacks/artificial-intelligence.svg", cybersecurity: "/images/fallbacks/cybersecurity.svg", "ui/ux design": "/images/fallbacks/ui-ux-design.svg", "mobile app development": "/images/fallbacks/web-development.svg", "cloud computing": "/images/fallbacks/technology-classroom.svg", networking: "/images/fallbacks/technology-classroom.svg", "database management": "/images/fallbacks/technology-classroom.svg", "computer fundamentals": "/images/fallbacks/computer-fundamentals.svg", ict: "/images/fallbacks/computer-fundamentals.svg", "digital marketing": "/images/fallbacks/ui-ux-design.svg",
};

export function buildCourseImagePrompt(course: CourseImageInput) {
  const subject = course.subject ?? course.title;
  const level = course.level ?? "beginner to advanced";
  const audience = course.audience ?? "young adult learners";
  return [`Professional photorealistic commercial photograph of young Nigerian Black African technology students learning ${subject}`, `in a modern Nigerian technology classroom, ${course.category} learning environment, ${audience}, laptops and collaborative practical work`, `authentic African educational environment, natural lighting, premium technology academy photography, realistic people and skin tones, high detail`, `course level ${level}, course context: ${course.description ?? "practical technology education"}`, "Avoid white-dominated classrooms, stereotypes, excessive futuristic settings, distorted faces, deformed hands, extra fingers, and readable fake text on screens."].join(". ");
}

export function getCourseImageFallback(category: string) { return categoryFallbacks[category.toLowerCase()] ?? "/images/fallbacks/technology-classroom.svg"; }

class OpenAIImageProvider implements CourseImageProvider {
  readonly name = "openai";
  async generate(prompt: string): Promise<ProviderImage> {
    const response = await fetch(`${process.env.AI_IMAGE_BASE_URL ?? "https://api.openai.com/v1"}/images/generations`, { method: "POST", headers: { authorization: `Bearer ${process.env.AI_API_KEY}`, "content-type": "application/json" }, body: JSON.stringify({ model: process.env.AI_IMAGE_MODEL ?? "gpt-image-1", prompt, size: "1536x1024", quality: "high", n: 1 }) });
    if (!response.ok) throw new CourseImageError("IMAGE_GENERATION_FAILED", `Image provider returned HTTP ${response.status}.`);
    const payload = await response.json() as { data?: Array<{ b64_json?: string; url?: string }> };
    const generated = payload.data?.[0];
    if (!generated?.b64_json && !generated?.url) throw new CourseImageError("IMAGE_GENERATION_FAILED", "Image provider returned no image data.");
    if (generated.b64_json) return { bytes: Buffer.from(generated.b64_json, "base64"), mimeType: "image/png" };
    return { remoteUrl: generated.url, mimeType: "image/png" };
  }
}

function getProvider(): CourseImageProvider {
  const provider = process.env.AI_IMAGE_PROVIDER?.toLowerCase();
  if (!provider || !process.env.AI_API_KEY) throw new CourseImageError("IMAGE_PROVIDER_NOT_CONFIGURED", "Configure AI_IMAGE_PROVIDER and AI_API_KEY on the server.");
  if (provider === "openai") return new OpenAIImageProvider();
  throw new CourseImageError("IMAGE_PROVIDER_NOT_CONFIGURED", `Unsupported image provider: ${provider}.`);
}

async function persistImage(course: CourseImageInput, image: ProviderImage) {
  try {
    const bytes = image.bytes ?? new Uint8Array(await (await fetch(image.remoteUrl!)).arrayBuffer());
    const digest = createHash("sha256").update(bytes).digest("hex").slice(0, 12);
    const extension = image.mimeType === "image/jpeg" ? "jpg" : "png";
    const directory = path.join(process.cwd(), "public", "generated", "courses");
    await mkdir(directory, { recursive: true });
    const filename = `${course.slug ?? "course"}-${digest}.${extension}`;
    await writeFile(path.join(directory, filename), bytes);
    return `/generated/courses/${filename}`;
  } catch { throw new CourseImageError("IMAGE_STORAGE_FAILED", "The generated image could not be stored."); }
}

export async function generateCourseImage(course: CourseImageInput): Promise<CourseImageResult> {
  const prompt = buildCourseImagePrompt(course);
  const provider = getProvider();
  const image = await provider.generate(prompt);
  return { imageUrl: await persistImage(course, image), prompt, provider: provider.name };
}
