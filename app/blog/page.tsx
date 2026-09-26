import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Megaphone } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const seminarPosts = [
  { month: "January 2026", date: "Saturday, 3 January", topic: "Starting in Tech Without Confusion", description: "A practical seminar on how beginners can begin a tech journey, choose the right path, and build momentum from day one." },
  { month: "February 2026", date: "Saturday, 7 February", topic: "Digital Skills for Nigerian Students", description: "A free seminar helping students understand how to use ICT tools, build confidence, and create opportunities through digital skills." },
  { month: "March 2026", date: "Saturday, 7 March", topic: "From Learning to Earning Online", description: "A seminar on how to use digital skills to create opportunities, freelance, and grow a meaningful online income." },
  { month: "April 2026", date: "Saturday, 4 April", topic: "Choosing the Right ICT Career Path", description: "A helpful guide to choosing between design, data, web development, and other career paths in digital education." },
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">School blog & updates</p>
            <h1>Free seminars, learning updates, and student opportunities.</h1>
            <p>Every first and second Saturday of the month, we host a free seminar for the school community and the public. These sessions are designed to help learners, parents, and professionals understand ICT, digital growth, and the next steps in education.</p>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell">
            <div className="seminar-banner">
              <div>
                <p className="eyebrow">Monthly seminar schedule</p>
                <h2>Free seminars every first and second Saturday.</h2>
              </div>
              <div className="seminar-pill">
                <Megaphone size={18} />
                <span>Free for everyone</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="shell post-grid">
            {seminarPosts.map((post) => (
              <article className="post-card" key={post.month}>
                <div className="post-meta">
                  <span><CalendarDays size={15} /> {post.date}</span>
                  <span><Clock3 size={15} /> Free seminar</span>
                </div>
                <h3>{post.topic}</h3>
                <p>{post.description}</p>
                <div className="post-footer">
                  <strong>{post.month}</strong>
                  <Link href="/register">Register interest <ArrowUpRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
