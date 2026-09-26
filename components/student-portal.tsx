"use client";

import Link from "next/link";
import { BellRing, BookOpen, CalendarDays, Clock3, GraduationCap, LogOut, MonitorPlay, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const classDurationMinutes = 150;

const scheduleSlots = [
  { id: "uiux-tue", day: "Tuesday", date: "2026-09-29", time: "10:00", course: "UI/UX Design", mode: "Live online" },
  { id: "data-thu", day: "Thursday", date: "2026-10-01", time: "13:00", course: "Data Analysis", mode: "Live online" },
  { id: "ict-sat", day: "Saturday", date: "2026-10-03", time: "09:30", course: "ICT Basics", mode: "Live online" },
  { id: "video-mon", day: "Monday", date: "2026-10-05", time: "15:30", course: "Video Editing", mode: "Live online" },
] as const;

export function StudentPortal() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [qualification, setQualification] = useState("SSCE / WAEC");
  const [selectedCourse, setSelectedCourse] = useState("UI/UX Design");
  const [selectedSlotId, setSelectedSlotId] = useState("uiux-tue");
  const [now, setNow] = useState(Date.now());

  const selectedSlot = useMemo(
    () => scheduleSlots.find((slot) => slot.id === selectedSlotId) ?? scheduleSlots[0],
    [selectedSlotId],
  );

  const scheduledStart = useMemo(() => {
    const date = new Date(`${selectedSlot.date}T${selectedSlot.time}:00`);
    const localDate = new Date(date);
    return localDate;
  }, [selectedSlot]);

  const sessionEndsAt = useMemo(
    () => new Date(scheduledStart.getTime() + classDurationMinutes * 60 * 1000),
    [scheduledStart],
  );

  const timeLeft = Math.max(0, sessionEndsAt.getTime() - now);
  const hasStarted = now >= scheduledStart.getTime();
  const isSessionLive = hasStarted && now < sessionEndsAt.getTime();
  const isSessionEnded = now >= sessionEndsAt.getTime();

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isSessionEnded) {
      setLoggedIn(false);
    }
  }, [isSessionEnded]);

  const countdown = useMemo(() => {
    const totalSeconds = Math.floor(timeLeft / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    if (isSessionEnded) {
      return "00:00:00";
    }

    return [hours, minutes, seconds].map((value) => String(value).padStart(2, "0")).join(":");
  }, [isSessionEnded, timeLeft]);

  const statusText = isSessionEnded
    ? "Session complete — you were automatically logged out."
    : isSessionLive
      ? "Class is live now. You are in session."
      : hasStarted
        ? "The class has ended for this scheduled block."
        : "Your next online class is scheduled and ready.";

  const notificationText = isSessionLive
    ? `Reminder: ${selectedSlot.course} started at ${selectedSlot.time} and will stay open for 2 hours 30 minutes.`
    : `Reminder: ${selectedSlot.course} is scheduled for ${selectedSlot.day} at ${selectedSlot.time}.`;

  if (!loggedIn) {
    return (
      <section className="portal-shell">
        <div className="portal-card portal-card-alert">
          <LogOut size={34} />
          <div>
            <p className="eyebrow">Session ended</p>
            <h2>You have been logged out automatically.</h2>
            <p>Your online class lasted 2 hours 30 minutes, which is the required session length for this course.</p>
            <Link className="button" href="/login">Sign back in</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="portal-shell">
      <div className="portal-header">
        <div>
          <p className="eyebrow">Student portal</p>
          <h1>Welcome back, Ada.</h1>
        </div>
        <button type="button" className="button button-dark" onClick={() => setLoggedIn(false)}>
          Logout now
        </button>
      </div>

      <div className="portal-grid">
        <article className="portal-card stat-card">
          <div className="portal-icon"><GraduationCap size={20} /></div>
          <div>
            <p>Qualification</p>
            <select value={qualification} onChange={(event) => setQualification(event.target.value)}>
              <option>SSCE / WAEC</option>
              <option>OND</option>
              <option>HND</option>
              <option>Bachelor&apos;s Degree</option>
            </select>
          </div>
        </article>

        <article className="portal-card stat-card">
          <div className="portal-icon"><BookOpen size={20} /></div>
          <div>
            <p>Course registration</p>
            <select value={selectedCourse} onChange={(event) => setSelectedCourse(event.target.value)}>
              <option>UI/UX Design</option>
              <option>Data Analysis</option>
              <option>ICT Basics</option>
              <option>Video Editing</option>
            </select>
          </div>
        </article>

        <article className="portal-card timer-card">
          <p className="eyebrow">Online class timer</p>
          <div className="timer-display">{countdown}</div>
          <div className="timer-meta">
            <span><Clock3 size={15} /> 2h 30m required online class</span>
            <span><MonitorPlay size={15} /> {selectedSlot.course}</span>
          </div>
          <strong>{statusText}</strong>
        </article>
      </div>

      <div className="portal-grid secondary-grid">
        <article className="portal-card">
          <div className="section-title-wrap">
            <h3>Scheduled online class</h3>
            <span className="status-pill">{isSessionLive ? "Live" : "Scheduled"}</span>
          </div>

          <div className="schedule-list">
            {scheduleSlots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                className={selectedSlotId === slot.id ? "schedule-item active" : "schedule-item"}
                onClick={() => setSelectedSlotId(slot.id)}
              >
                <div>
                  <strong>{slot.day}</strong>
                  <span>{slot.date}</span>
                </div>
                <div>
                  <strong>{slot.time}</strong>
                  <span>{slot.course}</span>
                </div>
              </button>
            ))}
          </div>
        </article>

        <article className="portal-card notification-card">
          <div className="section-title-wrap">
            <h3>Notifications</h3>
            <BellRing size={18} />
          </div>
          <div className="notification-box">
            <Sparkles size={18} />
            <p>{notificationText}</p>
          </div>
          <div className="info-row">
            <CalendarDays size={15} />
            <span>{selectedSlot.day}, {selectedSlot.date} at {selectedSlot.time}</span>
          </div>
          <div className="info-row">
            <Clock3 size={15} />
            <span>Auto logout after session ends: {classDurationMinutes / 60} hours</span>
          </div>
        </article>
      </div>
    </section>
  );
}
