"use client";

import Image from "next/image";
import Link from "next/link";
import { ImagePlus, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

type AdminCourse = { id: string; title: string; slug: string; shortDescription: string; imageUrl: string; category: { name: string; slug: string } };
type Status = { kind: "loading" | "success" | "error"; message: string };

export function AdminCourseImages() {
  const [courses, setCourses] = useState<AdminCourse[]>([]);
  const [loadState, setLoadState] = useState<Status>({ kind: "loading", message: "Loading courses..." });
  const [statuses, setStatuses] = useState<Record<string, Status>>({});

  useEffect(() => {
    fetch("/api/courses")
      .then(async (response) => {
        const payload = await response.json();
        if (!response.ok) throw new Error(payload.message ?? (payload.code === "DATABASE_UNAVAILABLE" ? "Unable to access the course database." : "Unable to load courses."));
        return payload;
      })
      .then((payload) => { setCourses(payload.data.flatMap((category: { courses: AdminCourse[] }) => category.courses)); setLoadState({ kind: "success", message: "Courses loaded." }); })
      .catch((error: Error) => setLoadState({ kind: "error", message: error.message }));
  }, []);

  async function generateImage(course: AdminCourse) {
    setStatuses((current) => ({ ...current, [course.id]: { kind: "loading", message: "Generating your course image..." } }));
    try {
      const response = await fetch(`/api/courses/${course.slug}`, { method: "POST" });
      const payload = await response.json();
      if (!response.ok) {
        const messages: Record<string, string> = { DATABASE_UNAVAILABLE: "Unable to access the course database.", IMAGE_PROVIDER_NOT_CONFIGURED: "AI image generation is not configured.", IMAGE_GENERATION_FAILED: "The image could not be generated. Try again.", IMAGE_STORAGE_FAILED: "The generated image could not be stored. Try again.", AUTH_NOT_CONFIGURED: "Administrator authorization is not configured.", UNAUTHORIZED: "Administrator authorization failed." };
        throw new Error(messages[payload.code] ?? payload.message ?? "The image could not be generated. Try again.");
      }
      setCourses((current) => current.map((item) => item.id === course.id ? { ...item, imageUrl: payload.data.imageUrl } : item));
      setStatuses((current) => ({ ...current, [course.id]: { kind: "success", message: "Course image generated successfully." } }));
    } catch (error) {
      setStatuses((current) => ({ ...current, [course.id]: { kind: "error", message: error instanceof Error ? error.message : "The image could not be generated. Try again." } }));
    }
  }

  if (loadState.kind === "loading") return <div className="admin-state">{loadState.message}</div>;
  if (loadState.kind === "error") return <div className="admin-state admin-state-error"><strong>{loadState.message}</strong><button className="catalog-retry" type="button" onClick={() => window.location.reload()}>Retry</button></div>;
  if (courses.length === 0) return <div className="admin-state"><strong>No published courses available.</strong><p>Publish a course in the database before generating an image.</p></div>;

  return <div className="admin-course-list">{courses.map((course) => { const status = statuses[course.id]; return <article className="admin-course-row" key={course.id}><div className="admin-course-image"><Image src={course.imageUrl} alt={`${course.category.name}: ${course.title}`} fill sizes="180px" /></div><div className="admin-course-copy"><p className="eyebrow">{course.category.name}</p><h2>{course.title}</h2><p>{course.shortDescription}</p>{status && <p className={`admin-status ${status.kind}`}>{status.message}</p>}</div><div className="admin-course-actions"><button className="button button-small" type="button" onClick={() => generateImage(course)} disabled={status?.kind === "loading"}>{status?.kind === "loading" ? "Generating..." : course.imageUrl.includes("/images/fallbacks/") ? <><ImagePlus size={15} /> Generate AI Image</> : <><RefreshCw size={15} /> Regenerate AI Image</>}</button><Link className="text-link" href={`/courses/${course.slug}`}>View course <span aria-hidden="true">→</span></Link></div></article>; })}</div>;
}
