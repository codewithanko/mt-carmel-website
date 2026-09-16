import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarClock, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { programs } from "@/data/content";

export const Route = createFileRoute("/programs")({
  component: Programs,
});

function Programs() {
  return (
    <div>
      {/* Custom Professional Header with Gradient Backdrop */}
      <header className="relative overflow-hidden border-b border-border bg-cream dark:bg-background">
        {/* Decorative gradient backdrop */}
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
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Grow in Faith & Community
            </div>
            
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Our Programs
            </h1>
            
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Regular gatherings and seasonal programs that help you grow, connect and serve 
              throughout the year. From weekly Bible studies to special events, there's always 
              something happening to deepen your faith and strengthen your relationships within 
              our church family.
            </p>
          </Reveal>
        </div>
      </header>

      {/* Programs Grid Section */}
      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {programs.map((program, i) => (
            <Reveal
              key={program.slug}
              delay={(i % 2) * 80}
              className="lift flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <CalendarClock className="h-4 w-4" aria-hidden="true" />
                {program.schedule}
              </div>
              <h2 className="mt-3 text-xl font-semibold">{program.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                {program.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal
          delay={200}
          className="container-page mt-14 rounded-3xl bg-secondary/50 p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Reach out and our team will help you find the right program or ministry for where you
            are right now.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Contact Us
          </Link>
        </Reveal>
      </section>
    </div>
  );
}