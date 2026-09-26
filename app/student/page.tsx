import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StudentPortal } from "@/components/student-portal";

export const metadata = { title: "Student portal | SolveHint Computer Institute" };

export default function StudentPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad student-page">
          <div className="shell">
            <StudentPortal />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
