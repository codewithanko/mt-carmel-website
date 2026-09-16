import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { serviceTimes, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In a real app, you would send this data to a backend or email service here
    setSubmitted(true);
  }

  return (
    <div>
      {/* Custom Professional Header for Contact */}
      <header className="relative overflow-hidden border-b border-border bg-cream dark:bg-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 75% at 12% 15%, color-mix(in oklch, var(--color-primary) 26%, transparent) 0%, transparent 60%), radial-gradient(50% 65% at 88% 10%, color-mix(in oklch, var(--color-gold) 32%, transparent) 0%, transparent 65%), radial-gradient(70% 80% at 50% 110%, color-mix(in oklch, var(--color-espresso) 14%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        />

        <div className="container-page relative py-20 sm:py-28">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <Mail className="h-4 w-4" aria-hidden="true" />
              We'd Love To Hear From You
            </div>
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Questions, prayer requests, first-time visits, or partnership — reach out and 
              someone from our pastoral team will respond. We are here to serve you and walk 
              alongside you in faith.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-8">
            {/* Contact Info Card */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">Get In Touch</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {site.fullName}
                    <br />
                    <span className="text-muted-foreground">{site.address}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary transition-colors">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Service Times Card */}
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                Service Times
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {serviceTimes.map((s) => (
                  <li key={s.day + s.name} className="flex justify-between gap-4 border-b border-border/50 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground text-right">
                      {s.day} <br /> {s.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Google Map */}
            <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
              <iframe
                src="https://maps.google.com/maps?q=Najja%20High%20School,%20Kabowa,%20Kampala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mt Carmel Campus Location Map"
                className="w-full min-h-[300px]"
              />
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={100}>
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="flex h-full flex-col items-center justify-center rounded-2xl border border-primary/30 bg-accent/60 p-10 text-center"
              >
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Send className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-semibold text-primary">Message Sent!</h2>
                <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                  Thank you for reaching out. Our pastoral team has received your message and 
                  will get back to you shortly. God bless you!
                </p>
                <Button 
                  variant="outline" 
                  className="mt-6 rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="c-name">Full name</Label>
                    <Input id="c-name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-email">Email</Label>
                    <Input
                      id="c-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-subject">Subject</Label>
                  <Input id="c-subject" name="subject" required placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea
                    id="c-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write your message or prayer request here..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full rounded-full sm:w-auto">
                  <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}