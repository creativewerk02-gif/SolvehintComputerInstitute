import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { schoolMedia } from "@/lib/media";

const testimonials = [
  { name: "Aisha O.", text: "The classes were clear, supportive, and practical. I gained confidence fast and built something I could actually use." },
  { name: "Tunde A.", text: "The live online sessions were structured and the teachers were patient. It helped me move from confusion to action." },
  { name: "Mariam K.", text: "I learned how to use digital tools as a student and found a clearer path for my future career." },
];

export default function TestimonialsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">Learner stories</p>
            <h1>Students grow with confidence and clarity.</h1>
          </div>
        </section>
        <section className="section-pad section-light">
          <div className="shell">
            <div className="media-slideshow testimonial-slideshow" aria-label="Student testimonial slideshow">
              {schoolMedia.testimonialSlides.map((image, index) => (
                <Image key={image} src={image} alt={`School and learner activity ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 100vw" className="media-slide-image" />
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad section-light">
          <div className="shell">
            <div className="post-grid">
              {testimonials.map((item) => (
                <article className="post-card" key={item.name}>
                  <div className="quote-mark">“</div>
                  <p>{item.text}</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
