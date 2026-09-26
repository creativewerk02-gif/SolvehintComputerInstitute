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
          <span className="footer-location">250, Prestige Plaza, Iju Ishaga, Lagos</span>
        </div>
        <div><h2>Explore</h2><Link href="/courses">Courses</Link><Link href="/virtual-class">Virtual class</Link><Link href="/about">About us</Link><Link href="/blog">Blog</Link></div>
        <div><h2>Student space</h2><Link href="/login">Student login</Link><Link href="/student">My dashboard</Link><Link href="/lms">Learning platform</Link><Link href="/register">Start learning</Link></div>
        <div>
          <h2>Let&apos;s talk</h2>
          <a href="mailto:solvehintcomputerinstitute@gmail.com">solvehintcomputerinstitute@gmail.com</a>
          <a href="tel:+2348060452393">+234 806 045 2393</a>
          <a href="https://wa.me/2348060452393" target="_blank" rel="noreferrer">WhatsApp / Call</a>
          <a href="https://www.facebook.com/SolvehintICTInstitute/" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://www.tiktok.com/@solvehintictinstitute" target="_blank" rel="noreferrer">TikTok</a>
          <a href="https://www.youtube.com/@solvehintcomputerinstitute" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 SolveHint Computer Institute</span><span><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></span></div>
    </footer>
  );
}
