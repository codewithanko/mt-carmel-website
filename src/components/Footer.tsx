import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { footerLinks } from "@/data/navigation";
import { serviceTimes, site, socials } from "@/data/site";

const socialIcons: Record<string, typeof Facebook> = {
  Facebook,
  YouTube: Youtube,
  Instagram,
  X: Twitter,
};

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="mt-24 bg-espresso text-cream dark:bg-card dark:text-card-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-cream/70 dark:text-muted-foreground">{site.campus}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/75 dark:text-muted-foreground">
            A local campus of the {site.network}. A house of prayer, teaching and community in the
            heart of Kabowa.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.label] ?? Mail;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 transition-colors hover:bg-cream hover:text-espresso dark:border-border dark:hover:bg-primary dark:hover:text-primary-foreground"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg">Service Times</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceTimes.map((s) => (
              <li key={s.day + s.name}>
                <span className="block font-semibold">{s.name}</span>
                <span className="text-cream/70 dark:text-muted-foreground">
                  {s.day} · {s.time}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg">Quick Links</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/80 transition-colors hover:text-cream dark:text-foreground/80 dark:hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg">Stay Connected</h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-cream/80 dark:text-foreground/80">
            <p className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {site.address}
            </p>
            <p className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-cream dark:hover:text-foreground">
                {site.phone}
              </a>
            </p>
            <p className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-cream dark:hover:text-foreground">
                {site.email}
              </a>
            </p>
          </address>

          <form
            className="mt-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <label htmlFor="newsletter" className="block text-sm font-medium">
              Newsletter
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full min-w-0 rounded-full border border-cream/25 bg-transparent px-4 py-2.5 text-sm text-cream placeholder:text-cream/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream dark:border-border dark:text-foreground dark:placeholder:text-muted-foreground dark:focus-visible:outline-primary"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-cream px-4 py-2.5 text-sm font-semibold text-espresso transition-transform hover:-translate-y-0.5 dark:bg-primary dark:text-primary-foreground"
              >
                Join
              </button>
            </div>
            <p aria-live="polite" className="mt-2 min-h-5 text-xs text-cream/70 dark:text-muted-foreground">
              {subscribed ? "Thank you — you're on the list." : ""}
            </p>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/15 dark:border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-cream/65 dark:text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>A campus of the {site.network}.</p>
        </div>
      </div>
    </footer>
  );
}