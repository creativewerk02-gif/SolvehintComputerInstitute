import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Clock3, Laptop, Play, Sparkles, Users } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { courses, reasons } from "@/lib/content";
import { schoolMedia } from "@/lib/media";
import { getPublishedCatalog } from "@/server/catalog";

export default async function HomePage() {
  const catalog = await getPublishedCatalog();
  const featuredCourses = catalog.databaseAvailable
    ? catalog.categories.flatMap((category) => category.courses.filter((course) => course.featured)).slice(0, 3).map((course, index) => ({ title: course.title, category: course.category.name, duration: course.duration, format: `${course.mode} · ${course.level}`, tone: ["orange", "charcoal", "cream"][index % 3], icon: "</>" }))
    : courses;

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero section-pad">
          <div className="shell hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="eyebrow-dot" /> Practical skills. Real momentum.</p>
              <h1>Learn skills that move <em>you forward.</em></h1>
              <p className="hero-lede">A modern computer institute for curious people who want to do meaningful work, earn with confidence, and keep growing.</p>
              <div className="hero-actions"><Link className="button" href="/courses">Explore courses <ArrowUpRight size={17} /></Link><Link className="text-link" href="/about">Why SolveHint <span aria-hidden="true">→</span></Link></div>
              <div className="hero-proof"><div className="avatar-stack"><span>AO</span><span>KN</span><span>MT</span></div><p><strong>1,200+ learners</strong><br />already building what&apos;s next</p></div>
            </div>
            <div className="hero-art reveal reveal-delay">
              <div className="art-note"><Sparkles size={16} /> Learn in your own rhythm</div>
              <div className="art-panel hero-slideshow">
                {schoolMedia.heroSlides.map((image, index) => (
                  <Image
                    key={image}
                    src={image}
                    alt={`Students learning in a modern technology classroom ${index + 1}`}
                    width={640}
                    height={520}
                    priority={index === 0}
                    className="hero-slide-image"
                  />
                ))}
                <div className="code-window"><span className="window-dots">● ● ●</span><span className="code-line line-orange">const <b>future</b> =</span><span className="code-line">  learn(<b>&quot;by doing&quot;</b>);</span><span className="code-line line-muted">{"// your next chapter starts here"}</span></div>
                <div className="art-orbit orbit-one" />
                <div className="art-orbit orbit-two" />
                <div className="art-card"><span className="art-card-icon"><Laptop size={20} /></span><small>LIVE SESSION</small><strong>Build something<br />you&apos;re proud of.</strong><span className="art-card-arrow">↗</span></div>
              </div>
              <div className="art-caption"><span>01 / 06</span><span>Skills for the real world</span><span className="caption-line" /></div>
            </div>
          </div>
        </section>

        <section className="intro section-pad section-light">
          <div className="shell narrow centered reveal"><p className="eyebrow">Welcome to SolveHint</p><h2>Less theory. More <em>doing.</em></h2><p>Technology changes quickly. Your learning experience should feel human. We combine expert-led classes, useful projects, and a community that keeps you moving.</p></div>
          <div className="shell stat-strip"><div><strong>12</strong><span>hands-on programmes</span></div><div><strong>96%</strong><span>learner satisfaction</span></div><div><strong>24/7</strong><span>learning resources</span></div><div><strong>01</strong><span>clear next step</span></div></div>
        </section>

        <section className="section-pad courses-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Find your starting point</p><h2>Courses with a point of view.</h2></div><Link className="text-link" href="/courses">View all courses <span aria-hidden="true">→</span></Link></div><div className="course-grid">{featuredCourses.map((course, index) => <article className={`course-card ${course.tone}`} key={course.title}><div className="course-visual"><span className="course-icon">{course.icon}</span><span className="course-index">0{index + 1}</span><div className="course-shape" /></div><div className="course-body"><p>{course.category}</p><h3>{course.title}</h3><div className="course-meta"><span><Clock3 size={15} /> {course.duration}</span><span><Users size={15} /> {course.format}</span></div><Link className="circle-link" href={`/courses/${course.title.toLowerCase().replaceAll(" ", "-")}`} aria-label={`View ${course.title} course`}><ArrowUpRight size={18} /></Link></div></article>)}</div></div></section>

        <section className="section-pad reasons-section"><div className="shell reasons-grid"><div className="reasons-heading"><p className="eyebrow">The SolveHint difference</p><h2>A learning experience built around <em>you.</em></h2><p>We are here to make technology feel less intimidating, more useful, and a lot more like yours.</p><Link className="button button-dark" href="/about">Meet SolveHint <ArrowUpRight size={17} /></Link></div><div className="reason-list">{reasons.map((reason) => <article className="reason" key={reason.number}><span>{reason.number}</span><div><h3>{reason.title}</h3><p>{reason.text}</p></div><Check size={19} /></article>)}</div></div></section>

        <section className="live-section section-pad"><div className="shell live-grid"><div className="live-image"><div className="live-overlay"><span className="live-badge"><span /> Live now</span><p>From first idea<br /><strong>to first launch.</strong></p><Link href="/virtual-class" aria-label="Explore virtual classes"><Play size={18} fill="currentColor" /></Link></div></div><div className="live-copy"><p className="eyebrow">Learning, wherever you are</p><h2>Good classes don&apos;t need four walls.</h2><p>Join a live, welcoming classroom from wherever you are. Ask questions in real time, collaborate on projects, and leave every session with something new.</p><ul><li><Check size={16} /> Small, focused cohorts</li><li><Check size={16} /> Expert instructors</li><li><Check size={16} /> Flexible evening schedules</li></ul><Link className="text-link" href="/virtual-class">See how virtual class works <span aria-hidden="true">→</span></Link></div></div></section>

        <section className="quote-section section-pad section-light"><div className="shell quote-grid"><div><p className="eyebrow">A note from our learners</p><div className="quote-mark">“</div></div><blockquote>“The lessons were practical, engaging, and immediately useful. I built confidence in my skills and started applying them in real work almost immediately.”<cite><strong>Student success story</strong><span>From our digital skills programmes</span></cite></blockquote></div></section>

        <section className="cta-section section-pad"><div className="shell cta-inner"><p className="eyebrow">Your next chapter is practical</p><h2>Start where you are.<br /><em>Build from there.</em></h2><Link className="button button-light" href="/register">Register to learn <ArrowUpRight size={18} /></Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
