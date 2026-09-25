# SolveHint architecture

## Product shape

SolveHint is a public education website plus a role-aware learning platform. Public marketing routes are server-rendered for SEO. Student, instructor, and administrator routes share the same design system but use protected server layouts and server-side authorization.

## Proposed stack

- Next.js App Router, React, TypeScript strict mode
- CSS design tokens with Tailwind-compatible naming; component styles remain close to the component that owns them
- Prisma with PostgreSQL
- Zod for request and environment validation
- Auth.js-compatible HTTP-only session abstraction with Argon2id password hashing
- Vitest and React Testing Library for units/components; Playwright for critical browser workflows
- Provider interfaces for email, storage, meetings, and notifications

## Module boundaries

```text
app/                 routes, layouts, metadata, route handlers
components/          shared presentational UI and marketing sections
features/             course, student, class, LMS, admin feature modules
lib/                  tokens, validation, dates, permissions, utilities
server/               repositories, services, jobs, auth, integrations
prisma/               schema and seed data
tests/                unit, integration, and Playwright tests
docs/                 decisions, operations, and workflow documentation
```

Business rules live in `server/services`, not page components. Repositories own Prisma access. Route handlers and server actions validate input, check the current session, call a service, and return a consistent result shape.

## Core domain model

Users have one role and optional student/instructor profiles. Courses contain modules, lessons, materials, quizzes, and assignments. Students join courses through enrollments and individual live sessions through class registrations. Attendance, progress, certificates, notifications, and audit logs reference those records with explicit foreign keys and indexes.

All stored instants are UTC. A profile or institution timezone is stored separately and passed to a date formatting service at the display boundary.

## Background jobs

The job layer exposes idempotent handlers for class status transitions, reminder creation/delivery, class completion, progress updates, and next-class discovery. A local runner can invoke the same handlers from a cron command; production can connect them to a queue or managed scheduler. A unique key composed from class registration, reminder type, and class start prevents duplicate reminders.

## Security and authorization

Sessions use secure, HTTP-only cookies. Server-side permission checks guard every protected route and mutation. Meeting URLs are returned only after verifying an active enrollment or class registration. Password reset requests always return the same public response. Zod validation, rate limits, secure headers, upload constraints, and audit logging are applied at the service boundary.

## Delivery phases

1. Foundation and public design system.
2. Public courses, virtual class, about, testimonials, contact, and LMS landing routes.
3. Authentication, student profile, and dashboard.
4. LMS content/progress and class access/attendance.
5. Notifications, scheduled jobs, admin, and instructor portals.
6. Security, accessibility, performance, test coverage, deployment, and operations.

## First implementation slice

The initial milestone builds the public shell and homepage from `app/layout.tsx`, `app/page.tsx`, shared header/footer components, and centralized CSS tokens. It intentionally uses typed content arrays so later database-backed data can replace them without redesigning the page components.