import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Banknote, CreditCard, Landmark, Smartphone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { givingCategories } from "@/data/content";

export const Route = createFileRoute("/giving")({
  component: Giving,
});

const paymentMethods = [
  { id: "mobile-money", label: "Mobile Money", icon: Smartphone },
  { id: "card", label: "Card Payment", icon: CreditCard },
  { id: "bank-transfer", label: "Bank Transfer", icon: Landmark },
  { id: "cash", label: "Give In Person", icon: Banknote },
];

function Giving() {
  const [category, setCategory] = useState(givingCategories[0]!.value);
  const [method, setMethod] = useState(paymentMethods[0]!.id);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHeader
        eyebrow="Invest In The Harvest"
        title="Online Giving"
        intro="Take part in the great commission — give your tithe, offering, thanksgiving, seed or special gift from wherever you are."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {givingCategories.map((c) => (
              <div key={c.value} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-semibold text-primary">{c.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.blurb}</p>
              </div>
            ))}
            <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
              "Bring the whole tithe into the storehouse... and see if I will not throw open the
              floodgates of heaven." — Malachi 3:10
            </p>
          </Reveal>

          <Reveal delay={100}>
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl border border-primary/30 bg-accent/60 p-8 text-center"
              >
                <h2 className="text-xl font-semibold text-primary">Thank you for your gift</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  This is a placeholder confirmation — a live payment processor will be connected
                  before the site goes public.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl border border-border bg-card p-8"
              >
                <div className="space-y-2">
                  <Label htmlFor="give-category">Giving category</Label>
                  <select
                    id="give-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    {givingCategories.map((c) => (
                      <option key={c.value} value={c.value}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="give-name">Full name</Label>
                    <Input id="give-name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="give-amount">Amount (UGX)</Label>
                    <Input
                      id="give-amount"
                      name="amount"
                      type="number"
                      min={0}
                      required
                      placeholder="50,000"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>Payment method</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map((m) => {
                      const Icon = m.icon;
                      const active = method === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMethod(m.id)}
                          aria-pressed={active}
                          className={cn(
                            "flex items-center gap-2.5 rounded-xl border p-3.5 text-left text-sm font-medium transition-colors",
                            active
                              ? "border-primary bg-accent text-accent-foreground"
                              : "border-border hover:bg-accent/60",
                          )}
                        >
                          <Icon className="h-4.5 w-4.5 shrink-0 text-primary" aria-hidden="true" />
                          {m.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Payment processing is not yet connected — this is a placeholder flow.
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full rounded-full">
                  Give {givingCategories.find((c) => c.value === category)?.label}
                </Button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
