import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ministries } from "@/data/content";

export const Route = createFileRoute("/ministries")({
  component: Ministries,
});

// Map each ministry to its specific image
const ministryImages: Record<string, string> = {
  "mens-ministry": "/images/brother hood.jpg",
  "womens-ministry": "/images/women-dancing.jpg",
  "youth-ministry": "/images/prayer session 2.jpeg",
  "childrens-ministry": "/images/children 4.jpg",
  "choir-media-ministry": "/images/live footage.jpeg",
  "outreach-ministry": "/images/overnight setup.jpeg",
};

function Ministries() {
  return (
    <div>
      {/* Custom Professional Header for Ministries */}
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
          <div className="text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                Serve & Grow Together
              </div>
              
              <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl">
                Our Ministries
              </h1>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                The church is not a building; it is a living body of believers, each with unique 
                gifts and a divine purpose. Whether you are called to lead, serve, welcome, or pray, 
                there is a place for you here. Discover where your passion meets our mission, and 
                step into a community where you can grow in faith and make a lasting impact.
              </p>
              
              {/* Scripture Block */}
              <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
                <p className="text-lg font-medium italic leading-relaxed text-foreground">
                  "Each of you should use whatever gift you have received to serve others, as faithful 
                  stewards of God's grace in its various forms."
                </p>
                <p className="mt-3 text-sm font-semibold text-primary">— 1 Peter 4:10</p>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* Ministries List Section */}
      <section className="section">
        <div className="container-page space-y-16">
          {ministries.map((ministry, i) => {
            const imageUrl = ministryImages[ministry.slug] || "/images/church community.jpeg";
            
            return (
              <Reveal
                key={ministry.slug}
                id={ministry.slug}
                as="div"
                delay={(i % 3) * 60}
                className={
                  "scroll-mt-24 grid items-center gap-10 lg:grid-cols-2 " +
                  (i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : "")
                }
              >
                <img
                  src={imageUrl}
                  alt={ministry.name}
                  className="h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <div>
                  <p className="eyebrow">Ministry</p>
                  <h2 className="mt-2 text-2xl sm:text-3xl">{ministry.name}</h2>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {ministry.leader} · {ministry.meets}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {ministry.description}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Get connected <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}