import Link from "next/link";
import { ArrowUpRight, LockKeyhole, UserRound } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell auth-shell">
            <div className="auth-card">
              <p className="eyebrow">Student login</p>
              <h1>Access your student portal.</h1>
              <form className="auth-form">
                <label>
                  <span>Email address</span>
                  <input type="email" defaultValue="student@solvehint.edu.ng" />
                </label>
                <label>
                  <span>Password</span>
                  <input type="password" defaultValue="password123" />
                </label>
                <div className="auth-actions">
                  <Link className="button" href="/student">Login</Link>
                  <Link className="text-link" href="/register">Create account <ArrowUpRight size={16} /></Link>
                </div>
              </form>
            </div>
            <div className="auth-side">
              <div className="auth-badge">
                <UserRound size={18} />
                <span>Student access</span>
              </div>
              <div className="auth-lock">
                <LockKeyhole size={28} />
              </div>
              <p>After login, students can view qualification details, register for a course, choose their class schedule, and follow their live online class countdown.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
