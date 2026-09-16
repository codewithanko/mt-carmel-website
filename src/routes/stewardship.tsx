import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { stewardshipPillars } from "@/data/content";

export const Route = createFileRoute("/stewardship")({
  component: Stewardship,
});

function Stewardship() {
  return (
    <div>
      <PageHeader
        eyebrow="Become A Steward Today"
        title="Stewardship"
        intro="Everything we hold belongs to God. Stewardship is simply how we hold it — with open hands and a grateful heart."
      />

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl">Managers, Not Owners</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Stewardship begins with a settled conviction: the earth is the Lord's, and everything
              in it. We are managers, not owners — entrusted with time, talent, treasure, testimony
              and the earth itself, to use for His purposes.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              That conviction reaches further than money. It touches how we spend our hours, how we
              use our skills, and how we treat what we have been given.
            </p>
            <Link
              to="/giving"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Give Online
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Accordion type="single" collapsible defaultValue={stewardshipPillars[0]!.title}>
              {stewardshipPillars.map((pillar) => (
                <AccordionItem key={pillar.title} value={pillar.title}>
                  <AccordionTrigger className="text-lg font-semibold">
                    {pillar.title}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {pillar.body}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
