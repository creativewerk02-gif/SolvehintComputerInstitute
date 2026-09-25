import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, BookOpen, Check, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublishedCourse } from "@/server/catalog";

export const dynamic = "force-dynamic";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getPublishedCourse(slug);

  if (!course) return <><SiteHeader /><main><section className="section-pad"><div className="shell empty-page"><p className="eyebrow">Course unavailable</p><h1>This course is not published yet.</h1><p>It may still be in preparation. Explore the catalogue to find another starting point.</p><Link className="button" href="/courses">Back to courses <ArrowUpRight size={17} /></Link></div></section></main><SiteFooter /></>;

  return <><SiteHeader /><main><section className="course-detail-hero section-pad"><div className="shell course-detail-grid"><div><Link className="back-link" href="/courses"><ArrowLeft size={16} /> All courses</Link><p className="eyebrow">{course.category.name}</p><h1>{course.title}</h1><p className="course-detail-lede">{course.description}</p><div className="hero-actions"><Link className="button" href={`/register?course=${course.slug}`}>Register for this course <ArrowUpRight size={17} /></Link><span className="course-detail-note">Demo course record</span></div></div><div className="detail-visual"><Image src={course.imageUrl} alt={`${course.category.name}: ${course.title}`} fill sizes="(max-width: 900px) 100vw, 40vw" /><span>Learn by doing</span></div></div></section><section className="section-pad"><div className="shell detail-content-grid"><div><p className="eyebrow">What you&apos;ll learn</p><h2>A practical path<br /><em>forward.</em></h2><p className="detail-copy">This course is structured around clear lessons, guided practice, and useful outcomes. The final curriculum will be maintained by SolveHint administrators through the learning platform.</p><ul className="detail-list"><li><Check size={17} /> Instructor-led learning</li><li><Check size={17} /> Practical projects</li><li><Check size={17} /> Progress you can track</li></ul></div><div className="syllabus"><div className="course-meta"><span><Clock3 size={16} /> {course.duration}</span><span><BookOpen size={16} /> {course.level.toLowerCase()} · {course.mode.toLowerCase()}</span></div><h3>Course modules</h3>{course.modules.length === 0 ? <p className="muted">Modules will appear here once the course is published by an administrator.</p> : course.modules.map((module) => <div className="syllabus-row" key={module.id}><strong>{module.title}</strong><span>{module.lessons.length} lessons</span></div>)}</div></div></section></main><SiteFooter /></>;
}
