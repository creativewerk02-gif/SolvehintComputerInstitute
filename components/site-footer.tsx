import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark">S</span>
            <span><strong>SolveHint</strong><small>Computer Institute</small></span>
          </Link>
          <p>Practical training for people ready to build useful skills and a future they are proud of.</p>
          <span className="footer-location">Lagos, Nigeria · Online worldwide</span>
        </div>
        <div><h2>Explore</h2><Link href="/courses">Courses</Link><Link href="/virtual-class">Virtual class</Link><Link href="/about">About us</Link><Link href="/testimonials">Testimonials</Link></div>
        <div><h2>Student space</h2><Link href="/login">Student login</Link><Link href="/student">My dashboard</Link><Link href="/lms">Learning platform</Link><Link href="/register">Start learning</Link></div>
        <div><h2>Let&apos;s talk</h2><a href="mailto:hello@solvehint.edu.ng">hello@solvehint.edu.ng</a><a href="tel:+2348000000000">+234 800 000 0000</a><span>Mon–Fri, 9:00–17:00 WAT</span></div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 SolveHint Computer Institute</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div>
    </footer>
  );
}
