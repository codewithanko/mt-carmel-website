import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeartHandshake } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/prayer-requests")({
  component: PrayerRequests,
});

function PrayerRequests() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="We Will Pray With You"
        title="Prayer Requests"
        intro="Life is overwhelming at times and we all need prayer. Whatever you're facing, our prayer team takes every request seriously."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-2xl border border-border bg-card p-8">
            <HeartHandshake className="h-8 w-8 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold">You are not alone</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Every request submitted here is read and prayed over by our pastoral prayer team. Mark
              your request confidential if you'd prefer it stays between you and the team.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              If you are in an emergency or crisis, please contact local emergency services or come
              directly to the campus — this form is not monitored in real time.
            </p>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-primary/30 bg-accent/60 p-8 text-center"
              >
                <h2 className="text-xl font-semibold text-primary">Thank you</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Your prayer request has been received. Our team will be praying with you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="pr-name">Full name</Label>
                    <Input id="pr-name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pr-contact">Email or phone (optional)</Label>
                    <Input id="pr-contact" name="contact" placeholder="How we can reach you" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pr-request">Your prayer request</Label>
                  <Textarea
                    id="pr-request"
                    name="request"
                    required
                    rows={6}
                    placeholder="Share as much or as little as you'd like"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="pr-confidential" name="confidential" className="mt-1" />
                  <Label htmlFor="pr-confidential" className="font-normal text-muted-foreground">
                    Please keep this request confidential
                  </Label>
                </div>
                <Button type="submit" size="lg" className="rounded-full">
                  Submit Request
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
