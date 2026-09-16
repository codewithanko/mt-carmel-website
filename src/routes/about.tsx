import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { beliefs, leaders } from "@/data/content";

export const Route = createFileRoute("/about")({
  component: About,
});

// Map images to leaders based on their role
const leaderImages: Record<string, string> = {
  "Campus Pastor": "/images/main pastor.jpeg",
  "Associate Pastor": "/images/kabaya.jpeg",
  "Worship & Media Director": "/images/preacher 2.jpeg",
  "Youth Pastor": "/images/preacher 3.jpeg",
  "Children's Ministry Lead": "/images/preacher 4.jpeg",
  "Administrator": "/images/preacher 5.jpeg",
};

function About() {
  return (
    <div>
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
            <p className="eyebrow">About Us</p>
            <h1 className="mt-3 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Our Story, Our Family
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              What began as a small gathering of believers praying in a living room has, by God's 
              grace, blossomed into a thriving family of hundreds at Mt Carmel Campus. 
            </p>
          </Reveal>
        </div>
      </header>

      <section id="story" className="section scroll-mt-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/church community.jpeg"
              alt="Our history — early gatherings at Mt Carmel"
              className="h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              style={{ aspectRatio: "4 / 3" }}
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Our History" title="Our Story" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              The Mt Carmel Campus began as a small gathering of believers meeting to pray for
              Kabowa and the surrounding community. What started as a home cell grew, through
              faithful teaching and worship, into a full congregation now rooted at Najja High
              School, Kabowa.Over the 
              years, we have witnessed miraculous healings, seen marriages restored from the brink 
              of collapse, watched addictions broken through the power of prayer, and celebrated 
              countless lives transformed by the gospel. Strangers who once walked through our doors 
              seeking hope have become beloved family members, serving alongside us in ministry. 
              From our humble beginnings to becoming a beacon of faith in Kabowa and beyond, our 
              journey has been marked by God's faithfulness, answered prayers, and a community 
              united by one unshakable foundation: Jesus Christ. This is more than our story — it 
              is a testimony of what God can do when ordinary people surrender to His extraordinary 
              purpose.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              As part of the wider {site.network}, we carry a mission that reaches more than 70
              countries — but our calling here is local: to be a house of prayer, healing and
              discipleship for every family within reach of this campus.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="vision" className="section scroll-mt-24 bg-secondary/40">
        <div className="container-page grid gap-8 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <p className="eyebrow">Vision</p>
              <h3 className="mt-3 text-2xl">Loving & Reaching Kabowa</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To be a house of worship where every person in Kabowa encounters the love of Christ
                and is equipped to walk out a godly, purposeful life.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-border bg-card p-8">
              <p className="eyebrow">Mission</p>
              <h3 className="mt-3 text-2xl">Building Strong Families</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To preach the gospel without compromise, disciple believers in the whole counsel of
                God's Word, and serve our neighbours with practical, consistent love.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="leadership" className="section scroll-mt-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Meet The Team"
              title="Our Leadership"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader, i) => {
              const imageUrl = leaderImages[leader.title] || "/images/brother hood.jpg";
              return (
                <Reveal
                  key={leader.name + leader.title}
                  delay={i * 60}
                  className="lift rounded-2xl border border-border bg-card p-6 text-center"
                >
                  <img
                    src={imageUrl}
                    alt={leader.name}
                    className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
                  />
                  <h3 className="mt-5 text-lg font-semibold">{leader.name}</h3>
                  <p className="text-sm font-semibold text-primary">{leader.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{leader.bio}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="beliefs" className="section scroll-mt-24 bg-secondary/40">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Statement Of Faith"
              title="What We Believe"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {beliefs.map((belief, i) => (
              <Reveal
                key={belief.title}
                delay={i * 50}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-primary">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{belief.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}