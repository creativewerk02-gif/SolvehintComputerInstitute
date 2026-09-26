import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell auth-shell">
            <div className="auth-card">
              <p className="eyebrow">Register for a course</p>
              <h1>Start your next learning step.</h1>
              <form className="auth-form">
                <label>
                  <span>Full name</span>
                  <input type="text" defaultValue="Ada Okafor" />
                </label>
                <label>
                  <span>Qualification</span>
                  <input type="text" defaultValue="SSCE / WAEC" />
                </label>
                <label>
                  <span>Preferred course</span>
                  <select defaultValue="UI/UX Design">
                    <option>UI/UX Design</option>
                    <option>Data Analysis</option>
                    <option>ICT Basics</option>
                    <option>Video Editing</option>
                  </select>
                </label>
                <label>
                  <span>Available class schedule</span>
                  <select defaultValue="Tuesday, 10:00 AM">
                    <option>Tuesday, 10:00 AM</option>
                    <option>Thursday, 1:00 PM</option>
                    <option>Saturday, 9:30 AM</option>
                  </select>
                </label>
                <div className="auth-actions">
                  <Link className="button" href="/student">Register now <ArrowUpRight size={16} /></Link>
                  <Link className="text-link" href="/login">Already have an account <span aria-hidden="true">→</span></Link>
                </div>
              </form>
            </div>
            <div className="auth-side">
              <div className="auth-badge">
                <span>Course registration</span>
              </div>
              <h2>Study, learn, and attend live online classes with a fixed schedule.</h2>
              <p>Students pick the time slot that suits them, then join a structured online class that runs for a minimum of 2 hours 30 minutes.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
