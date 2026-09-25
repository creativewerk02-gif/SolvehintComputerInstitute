import Link from "next/link";
import { ArrowUpRight, BookOpen, CheckCircle2, LockKeyhole } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata = { title: "LMS | SolveHint Computer Institute", description: "The SolveHint learning platform for courses, lessons, and progress." };

export default function LmsPage() {
  return <><SiteHeader /><main><section className="page-hero section-pad"><div className="shell page-hero-inner"><p className="eyebrow">Your learning space</p><h1>Keep learning.<br /><em>Keep moving.</em></h1><p>The SolveHint LMS brings your courses, lessons, materials, quizzes, and progress into one focused student space.</p><div className="hero-actions"><Link className="button" href="/login">Access student portal <ArrowUpRight size={17} /></Link><Link className="text-link" href="/register">Create an account <span aria-hidden="true">→</span></Link></div></div></section><section className="section-pad section-light"><div className="shell lms-feature-grid"><div><p className="eyebrow">Designed for progress</p><h2>Everything you need to make learning <em>stick.</em></h2></div><div className="lms-feature-list"><div><BookOpen size={20} /><strong>Structured courses</strong><p>Move from modules to lessons with a clear path.</p></div><div><CheckCircle2 size={20} /><strong>Visible progress</strong><p>Know what you have completed and what comes next.</p></div><div><LockKeyhole size={20} /><strong>Private student space</strong><p>Your enrolled content stays connected to your account.</p></div></div></div></section></main><SiteFooter /></>;
}
