import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">Privacy</p>
            <h1>Student information is treated with care.</h1>
            <p>We use student information to support registration, lesson access, communication, and course administration. We keep personal data secure and only use it for the purposes described in the school&apos;s learning flow and communication process.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
