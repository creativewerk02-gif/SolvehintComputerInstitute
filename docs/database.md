# Database setup

SolveHint uses PostgreSQL through Prisma. The schema is in `prisma/schema.prisma`, and the first generated migration is in `prisma/migrations/0001_initial/migration.sql`.

## Local setup

1. Copy `.env.example` to `.env` and set `DATABASE_URL` to a local PostgreSQL database.
2. Run `npm run db:generate`.
3. Run `npm run db:migrate -- --name initial` when a PostgreSQL server is available.
4. Run `npm run db:seed` to create development categories, clearly marked demo courses, and empty contact settings.

The seed is development-only. The course names and descriptions in it are not confirmed SolveHint offerings and must be replaced before production use.

## Data boundaries

Public course pages read published categories and courses through `server/catalog.ts`. They do not use frontend course arrays as their production source of truth. If the database is unavailable, the catalog renders a setup state rather than failing as a 404.

All timestamps are stored in UTC. Class records also store an explicit IANA timezone for display and reminder logic. Active enrollments are unique per student/course, and class registrations are unique per student/class.

## Current verification

- `npx prisma validate` passes with a development `DATABASE_URL` environment variable.
- `npx prisma generate` passes.
- The initial migration SQL is generated but has not been applied because no PostgreSQL server is configured in this workspace.
