import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CourseCatalog } from "@/components/course-catalog";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getPublishedCatalog } from "@/server/catalog";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Courses | SolveHint Computer Institute",
  description: "Explore practical computer courses from SolveHint Computer Institute.",
};

export default async function CoursesPage() {
  const catalog = await getPublishedCatalog();

  return <><SiteHeader /><main><section className="page-hero section-pad"><div className="shell page-hero-inner"><p className="eyebrow">Build useful skills</p><h1>Courses with a <em>clear next step.</em></h1><p>Choose a starting point, learn through practice, and build confidence you can take into the real world.</p></div></section><section className="section-pad courses-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">The SolveHint catalogue</p><h2>Find your starting point.</h2></div><Link className="text-link" href="/register">Ready to begin? <span aria-hidden="true">→</span></Link></div><CourseCatalog categories={catalog.categories} databaseAvailable={catalog.databaseAvailable} /></div></section><section className="cta-section section-pad"><div className="shell cta-inner"><p className="eyebrow">Not sure where to start?</p><h2>Tell us what you want<br /><em>to learn next.</em></h2><Link className="button button-light" href="/contact">Talk to SolveHint <ArrowUpRight size={18} /></Link></div></section></main><SiteFooter /></>;
}
