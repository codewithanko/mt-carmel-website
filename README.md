# Jesus Nation Site

Build a full, multi-page, production-quality website for a church called
"Jesus Nation — Mt Carmel Campus, Kabowa" (a local campus of the Enlightened
Christian Gathering / The Jesus Nation Church network), located in Kabowa,
Kampala, Uganda.

GOAL
This must look and feel like a premium, professionally-built church website —
the kind a web agency would charge real money for. It will later be sold to
the church as a finished product, so polish, consistency, and completeness
matter more than speed.

TECH & CODE QUALITY RULES (IMPORTANT)

- Build with a clean, standard React + Vite + TypeScript + Tailwind CSS
  structure. Use shadcn/ui components where they genuinely help, but keep
  the component tree simple and readable.
- Do NOT wire up Lovable-specific backend, auth, analytics, or AI-chat
  add-ons. No vendor lock-in features — this codebase needs to be lifted
  out and hosted independently afterward, so keep it as a normal,
  portable React app with no proprietary integrations baked in.
- Avoid unnecessary third-party npm packages. Prefer building things
  (sliders, accordions, tabs, dropdown menus) with plain React/Tailwind
  or shadcn primitives instead of pulling in extra libraries where
  avoidable.
- Organize files logically: /components, /pages, /sections, /data
  (for placeholder content like events/sermons/blog posts as arrays so
  it's easy to edit or later hook up to a CMS).
- Fully responsive: mobile, tablet, desktop. Mobile nav should collapse
  into a clean hamburger/drawer menu.
- Semantic HTML, proper heading hierarchy, alt text on every image
  placeholder, visible focus states, and sufficient color contrast —
  this site should be usable by people with visual impairments and
  navigable by keyboard and screen reader.

DESIGN DIRECTION
Reference site for layout, structure, section order, transitions, and
interaction patterns: https://www.ecgchurch.org/
Replicate its overall arrangement and motion language:

- Sticky top navigation with dropdown/mega-menus under "About",
  "Ministries", and "Programs"
- Full-width hero section with a bold statement headline, a short
  sub-line, and two prominent CTA buttons (e.g. "Give" and "Watch
  Sermons")
- A thin "Announcements" strip beneath the hero
- An "Upcoming Events" horizontal carousel/slider
- A mission/intro section with a short paragraph and a "Learn More" link
- A highlighted program section (large image + text block, alternating
  left/right on scroll)
- A Stewardship callout section
- An Online Giving callout section (visually distinct, high-contrast)
- A "Need Prayer?" callout section
- A "Latest Messages" grid pulling from Sermons/Blog (card layout with
  image, category tag, title, short excerpt)
- A closing "Make a Difference" / get-involved banner
- A rich footer: service times, contact details, address, social icons,
  newsletter signup, and a multi-column site map of links
  Use smooth scroll-reveal animations on section entry, subtle hover
  lift/scale transitions on cards and buttons, and a smooth slide/fade
  transition on the events carousel — matching the general feel of the
  reference site, not copying its exact code.

THEME

- Primary palette: warm brown (e.g. a rich coffee/chocolate brown as the
  primary accent) and white/cream as the base, with a soft off-white or
  cream background rather than stark white.
- Include a light/dark mode toggle in the header. Dark mode should use
  deep warm charcoal/espresso tones (not pure black) with the same brown
  accent, keeping contrast high enough to stay accessible.
- Typography: a confident serif or display font for headings (something
  that feels warm and established, not corporate-cold), paired with a
  clean sans-serif for body text.

IMAGES
Do not source or generate real photos. Leave clearly marked, nicely
styled placeholder image blocks (labeled placeholders, correct aspect
ratios, consistent styling) everywhere a photo would go — hero
background, ministry cards, event cards, sermon thumbnails, blog post
images, leadership headshots, about section — so real photos can be
dropped in afterward without touching layout code.

PAGES & SECTIONS TO BUILD

1. Home
   - All sections described above under "Design Direction"

2. About
   - Our Story / History
   - Vision & Mission statement
   - Our Leadership (grid of leader cards: photo placeholder, name,
     title, short bio)
   - Beliefs / What We Believe (statement of faith list)

3. Ministries
   - Overview grid of ministries (e.g. Men's Ministry, Women's Ministry,
     Youth Ministry, Children's Ministry, Choir/Media Ministry — use
     sensible placeholder names Kelly can rename) each with an icon or
     image, short description, and a "Learn More" link/anchor
   - Each ministry can expand or link to a simple detail section with
     leader, meeting time, and description

4. Programs
   - List of recurring church programs/initiatives with schedule/day,
     description, and image placeholder

5. Events
   - Upcoming events grid/list with date, time, location, description,
     and an image placeholder
   - Filter or tab between "Upcoming" and "Past" events
   - Individual event detail layout (can be a reusable template/page)

6. Sermons
   - Grid of sermon cards: video thumbnail placeholder, title, speaker,
     date, series tag
   - Each card links to a sermon detail view with an embedded video
     player placeholder (structure it so a YouTube/Vimeo embed or
     uploaded video file can be dropped in later), scripture reference,
     and short notes/description
   - Filter by series or speaker

7. Blog
   - Grid of blog post cards: image placeholder, category tag, title,
     excerpt, author, date
   - Individual blog post template page with a clean long-form reading
     layout

8. Stewardship
   - Explanation of stewardship as a concept/teaching
   - Sections or accordion for different aspects (time, talent,
     treasure, etc.)

9. Prayer Requests
   - A clean, warm-toned prayer request form: name, email/phone
     (optional), prayer request text area, a checkbox for "keep this
     confidential", submit button
   - A short reassuring intro paragraph above the form

10. Giving
    - Clear explanation of giving categories: Tithe, Offering,
      Thanksgiving, Seed, and a general "Other/Special Giving" option
    - A giving form/flow with a category selector (dropdown or tabs for
      Tithe / Offering / Thanksgiving / Seed / Other), amount field, and
      a placeholder payment method section (structure only — no live
      payment integration needed yet, just clearly marked placeholder
      buttons for Mobile Money, Card, Bank Transfer)
    - Short scripture-based encouragement section about giving

11. Contact Us
    - Contact form (name, email, subject, message)
    - Church address, phone, email, service times displayed clearly
    - Embedded map placeholder (structure for a Google Maps embed later)
    - Social media links

FOOTER (site-wide)

- Service times
- Address and contact details
- Quick links (About, Ministries, Programs, Events, Sermons, Blog,
  Giving, Prayer Requests, Contact)
- Newsletter signup input
- Social media icons
- Copyright line

Build this as a cohesive, fully-linked multi-page site with working
navigation between all pages, consistent header/footer across every
page, and consistent spacing/typography system throughout. Prioritize
a polished, professional, "ready to hand to a client" finish over
extra features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cc2c36fa-6628-48cd-9298-a64228004b4a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
