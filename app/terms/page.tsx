import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">Terms</p>
            <h1>Participation in our learning programmes requires commitment.</h1>
            <p>Students agree to participate in their enrolled courses, attend scheduled online classes, and complete the required learning activity for their programme. The school may update schedules, course structure, or delivery format as needed.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
