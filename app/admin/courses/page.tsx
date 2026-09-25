import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AdminCourseImages } from "@/components/admin-course-images";

export const dynamic = "force-dynamic";

export const metadata = { title: "Course image management | SolveHint", description: "Development course image management for SolveHint administrators." };

export default function AdminCoursesPage() {
  return <><SiteHeader /><main><section className="page-hero section-pad"><div className="shell page-hero-inner"><p className="eyebrow">Development admin workspace</p><h1>Course image <em>management.</em></h1><p>Generate or regenerate stored course imagery using the configured server-side provider. This screen is an interim image-management surface until full admin authentication is implemented.</p></div></section><section className="section-pad"><div className="shell"><AdminCourseImages /></div></section></main><SiteFooter /></>;
}
