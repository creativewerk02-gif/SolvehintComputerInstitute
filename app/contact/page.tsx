import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const mapEmbed = "https://maps.google.com/maps?q=250%20Prestige%20Plaza%20Iju%20Ishaga%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell auth-shell">
            <div className="auth-card">
              <p className="eyebrow">Contact us</p>
              <h1>Talk to the school team.</h1>
              <form className="auth-form">
                <label><span>Name</span><input type="text" placeholder="Your full name" /></label>
                <label><span>Email</span><input type="email" placeholder="you@example.com" /></label>
                <label><span>Message</span><textarea placeholder="Tell us which programme you are interested in." /></label>
                <div className="auth-actions"><button type="button" className="button">Send message <ArrowUpRight size={16} /></button></div>
              </form>
            </div>
            <div className="auth-side">
              <div className="auth-badge"><span>Reach us</span></div>
              <div className="info-row"><Mail size={16} /><a href="mailto:solvehintcomputerinstitute@gmail.com">solvehintcomputerinstitute@gmail.com</a></div>
              <div className="info-row"><Phone size={16} /><a href="tel:+2348060452393">+234 806 045 2393</a></div>
              <div className="info-row"><MapPin size={16} /><span>250, Prestige Plaza, Iju Ishaga, Lagos</span></div>
              <div className="info-row"><span>Facebook:</span><a href="https://www.facebook.com/SolvehintICTInstitute/" target="_blank" rel="noreferrer">Solvehint ICT Institute</a></div>
              <div className="info-row"><span>TikTok:</span><a href="https://www.tiktok.com/@solvehintictinstitute" target="_blank" rel="noreferrer">@solvehintictinstitute</a></div>
              <div className="info-row"><span>YouTube:</span><a href="https://www.youtube.com/@solvehintcomputerinstitute" target="_blank" rel="noreferrer">@solvehintcomputerinstitute</a></div>
            </div>
          </div>
          <div className="shell map-shell">
            <div className="map-card">
              <div className="map-header">
                <p className="eyebrow">Visit the campus</p>
                <h2>Find SolveHint in Lagos.</h2>
              </div>
              <iframe
                title="SolveHint location"
                src={mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-embed"
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
