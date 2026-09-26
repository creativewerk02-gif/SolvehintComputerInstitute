import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Globe2, GraduationCap, ShieldCheck, Users } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolMedia } from "@/lib/media";

const values = [
  { heading: "Practical learning", text: "We teach real-world digital and technical skills that students can apply immediately in school, work, and business." },
  { heading: "Supportive teaching", text: "Our instructors guide students step by step, making technology less intimidating and more useful." },
  { heading: "Career focus", text: "Students learn digital, creative, and professional skills that connect to jobs, freelancing, and entrepreneurship." },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">About the school</p>
            <h1>We help students build digital confidence and practical opportunity.</h1>
            <p>At SolveHint Computer Institute, we believe ICT is not just a subject to pass — it is a life skill, a career pathway, and a gateway to modern opportunity. We create a friendly place where learners of all backgrounds can understand technology, build confidence, and grow into capable, informed digital citizens.</p>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell">
            <div className="media-slideshow about-slideshow" aria-label="About the school slideshow">
              {schoolMedia.aboutSlides.map((image, index) => (
                <Image key={image} src={image} alt={`School learning environment ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 100vw" className="media-slide-image" />
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell intro-grid">
            <div>
              <p className="eyebrow">Who we are</p>
              <h2>A modern ICT school for students, professionals, and future-ready learners.</h2>
            </div>
            <div>
              <p>We are a digital learning school rooted in practical education. From ICT basics and data analysis to UI/UX design, web development, and video editing, we help people learn through guided classes, live online sessions, workshops, and hands-on projects.</p>
              <p>Our goal is simple: make technology easier to understand, easier to use, and more valuable in real life.</p>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="shell stat-strip">
            <div><strong>15+</strong><span>specialised courses</span></div>
            <div><strong>1:1</strong><span>student support</span></div>
            <div><strong>Live</strong><span>online classes</span></div>
            <div><strong>Free</strong><span>seminars + insight</span></div>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Why learners choose us</p>
                <h2>Built for growth.</h2>
              </div>
            </div>
            <div className="feature-grid">
              <article className="feature-card">
                <GraduationCap size={24} />
                <h3>Skills-first teaching</h3>
                <p>Students learn by doing, not just by memorising.</p>
              </article>
              <article className="feature-card">
                <Users size={24} />
                <h3>Friendly learning environment</h3>
                <p>We create an inclusive environment where people feel comfortable asking questions.</p>
              </article>
              <article className="feature-card">
                <Globe2 size={24} />
                <h3>Flexible digital access</h3>
                <p>Students can attend online classes and learn from anywhere while staying connected to their course.</p>
              </article>
              <article className="feature-card">
                <ShieldCheck size={24} />
                <h3>Career-minded guidance</h3>
                <p>Our programmes connect learning to opportunities, confidence, and practical outcomes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="shell mission-box">
            <div>
              <p className="eyebrow">Our promise</p>
              <h2>We turn uncertainty into ability.</h2>
            </div>
            <div>
              <p>Whether a learner is starting from scratch, upgrading their qualifications, or taking a new step in digital work, we provide a structured path to confidence. We support progress through engaging teaching, clear schedules, and a student-first environment.</p>
              <Link className="button" href="/register">Join a course <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell values-grid">
            {values.map((value) => (
              <article className="value-card" key={value.heading}>
                <Check size={18} />
                <h3>{value.heading}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
