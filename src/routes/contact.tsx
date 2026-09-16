import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
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
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="We'd Love To Hear From You"
        title="Contact Us"
        intro="Questions, prayer, first-time visits or partnership — reach out and someone from our team will respond."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-8">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-lg font-semibold">Get In Touch</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {site.fullName}
                    <br />
                    {site.address}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="hover:text-primary">
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="flex items-center gap-2 text-lg font-semibold">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                Service Times
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {serviceTimes.map((s) => (
                  <li key={s.day + s.name} className="flex justify-between gap-4">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground">
                      {s.day} · {s.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              role="img"
              aria-label={`Map placeholder — ${site.mapQuery}`}
              className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-accent/60 text-center text-sm font-medium text-muted-foreground"
            >
              Map embed goes here
              <br />({site.mapQuery})
            </div>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-primary/30 bg-accent/60 p-8 text-center"
              >
                <h2 className="text-xl font-semibold text-primary">Message sent</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Thank you for reaching out — our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8"
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
                    placeholder="Write your message"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full">
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
