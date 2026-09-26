import { CalendarCheck2, Clock3, MonitorPlay } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const schedule = [
  { day: "Tuesday", time: "10:00 AM", course: "UI/UX Design" },
  { day: "Thursday", time: "1:00 PM", course: "Data Analysis" },
  { day: "Saturday", time: "9:30 AM", course: "ICT Basics" },
];

export default function VirtualClassPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero section-pad">
          <div className="shell page-hero-inner">
            <p className="eyebrow">Online learning</p>
            <h1>Structured virtual classes with a clear schedule.</h1>
            <p>Every online class is fixed in advance, and each course runs for a minimum of 2 hours 30 minutes so students can settle in, learn, and complete meaningful practical work without rushing.</p>
          </div>
        </section>

        <section className="section-pad section-light">
          <div className="shell virtual-grid">
            <article className="portal-card">
              <div className="section-title-wrap">
                <h3>Class format</h3>
                <MonitorPlay size={18} />
              </div>
              <ul className="bullet-list">
                <li><Clock3 size={16} /> Minimum class duration: 2 hours 30 minutes</li>
                <li><CalendarCheck2 size={16} /> Fixed schedule set before registration</li>
                <li><MonitorPlay size={16} /> Live online session with instructor guidance</li>
              </ul>
            </article>

            <article className="portal-card">
              <div className="section-title-wrap">
                <h3>Upcoming schedule</h3>
                <CalendarCheck2 size={18} />
              </div>
              <div className="schedule-list compact-schedule">
                {schedule.map((slot) => (
                  <div className="schedule-item" key={slot.day}>
                    <div>
                      <strong>{slot.day}</strong>
                      <span>{slot.time}</span>
                    </div>
                    <div>
                      <strong>{slot.course}</strong>
                      <span>Live online</span>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
