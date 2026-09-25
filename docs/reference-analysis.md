# Reference analysis

## Source and scope

The supplied reference is a downloaded WordPress page at `tsacademyonline.com/index.html`. It is rendered by BeTheme, Elementor, Elementor Pro, The Plus Addons, Header Footer Elementor, and several supporting plugins. The rebuild should preserve the useful interaction patterns while replacing the markup, content, brand, and implementation.

## Typography

- The page loads a local custom family named `starbilgrotesk` in regular, medium, light, and bold weights and applies it broadly to headings, body copy, controls, and navigation.
- The generated stylesheet also loads DM Sans, Inter, Roboto, Roboto Slab, and Red Hat Display, but the page-level override makes `starbilgrotesk` the visual authority.
- SolveHint uses a close, reliable substitute: DM Sans for both display and UI text. It keeps the rounded, friendly geometry without depending on the reference site's proprietary font files.

## Hierarchy and layout

- A centered desktop header uses a logo column, a white rounded navigation surface, and a contrasting CTA. Mobile collapses to a logo plus a menu toggle.
- The hero is a generous two-column composition: concise headline and supporting copy on the left, large editorial imagery on the right, followed by two CTAs.
- Sections use a centered eyebrow/heading/subheading pattern and large vertical whitespace.
- Content is organized into repeated card grids: reasons to choose the academy, courses, partner proof, testimonials, and learning outcomes.
- The course cards use image, title, short description, and a low-friction “Learn More” action.
- Testimonials are presented as a horizontally navigable social-proof area with previous/next controls.
- The footer is a dark, multi-column content area with brand, course links, contact details, and legal/navigation links.

## Visual language

- Rounded cards and buttons, subtle shadows, large radii, and high-contrast section transitions create a friendly education product feel.
- The page mixes white surfaces with pale gray/blue sections and saturated accent colors. SolveHint consolidates this into orange, charcoal, white, and light gray so the brand remains coherent.
- The reference uses images heavily: hero artwork, course thumbnails, partner imagery, video thumbnail, and social avatars. The rebuild keeps visual media in the same roles using original SolveHint-oriented placeholders.

## Responsive behavior

- Desktop navigation and CTA are hidden below the tablet breakpoint in favor of a mobile navigation block.
- Desktop cards use multi-column grids; mobile layouts stack cards, preserve comfortable tap targets, and reduce heading scale.
- Header logo sizing and section padding are explicitly reduced on mobile rather than simply shrinking the desktop layout.

## Motion and interaction

- Lazy-loaded images fade into view.
- The reference includes a testimonial slider and mobile menu toggles. SolveHint keeps those interactions but uses restrained reveal and hover transitions to avoid visual noise.
- The rebuilt navigation is keyboard accessible and exposes state through `aria-expanded`.

## External dependencies observed

The original depends on WordPress core, jQuery, Elementor, Elementor Pro, BeTheme, The Plus Addons, Contact Form 7, Fluent Forms, Font Awesome, Google Fonts, Smush, WhatsApp chat, and Google Tag Manager. None are required for the clean rebuild. SolveHint starts with Next.js, React, TypeScript, Lucide icons, Prisma, Zod, and an email-provider abstraction.

## Reusable patterns for SolveHint

1. Sticky, compact header with a clear enrollment CTA.
2. Split hero with one primary action and one secondary action.
3. Centered section intro followed by responsive cards.
4. Course cards that surface outcome, format, duration, and action.
5. Testimonial carousel with accessible controls.
6. Dark multi-column footer with contact and portal routes.