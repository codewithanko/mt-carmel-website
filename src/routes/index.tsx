import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, HeartHandshake, PlayCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { announcements, serviceTimes, site } from "@/data/site";
import { events, ministries } from "@/data/content";

export const Route = createFileRoute("/")({
  component: Index,
});

// Rotating Hero Phrases
const heroPhrases = [
  "We Are One Family",
  "A Place of Purpose",
  "Rooted in the Word",
  "Growing in Grace",
  "Faith in Action",
];

// Daily Prayers Array
const dailyPrayers = [
  {
    title: "Prayer for Peace",
    text: "Lord, grant me the serenity to accept the things I cannot change, the courage to change the things I can, and the wisdom to know the difference. Fill my heart with Your perfect peace today.",
    scripture: "Philippians 4:7",
  },
  {
    title: "Prayer for Strength",
    text: "Heavenly Father, when I feel weak, be my strength. When I feel overwhelmed, be my refuge. Help me to lean on You and trust in Your unfailing love and power.",
    scripture: "Isaiah 40:31",
  },
  {
    title: "Prayer for Guidance",
    text: "Lord, light my path and make my steps firm. Give me wisdom in my decisions and clarity in my thoughts, that I may walk in Your will and bring glory to Your name.",
    scripture: "Psalm 119:105",
  },
  {
    title: "Prayer for Gratitude",
    text: "Thank You, Lord, for the gift of today, for Your endless mercies, and for the blessings I often take for granted. Open my eyes to see Your goodness in every moment.",
    scripture: "1 Thessalonians 5:18",
  },
  {
    title: "Prayer for Family",
    text: "God, I lift up my family to You. Protect them, guide them, and bind us together in love. Let our home be a reflection of Your grace and a sanctuary of peace.",
    scripture: "Joshua 24:15",
  },
];

function Index() {
  const [amenClicked, setAmenClicked] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Rotate hero phrase every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate which prayer to show based on the current date (changes every 3 days)
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const prayerIndex = Math.floor(dayOfYear / 3) % dailyPrayers.length;
  const currentPrayer = dailyPrayers[prayerIndex];

  const handleAmenClick = () => {
    setAmenClicked(true);
    setTimeout(() => setAmenClicked(false), 2000); // Reset animation after 2 seconds
  };

  const upcomingEvents = events.filter((e) => !e.past).slice(0, 6);
  const highlightMinistries = ministries.slice(0, 3);

  return (
    <div>
      {/* Hero with Professional Gradient Backdrop */}
      <section className="relative overflow-hidden border-b border-border bg-cream dark:bg-background">
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

        <div className="container-page relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2 lg:py-32">
          <Reveal>
            <p className="eyebrow text-center lg:text-left">{site.network}</p>
            
            {/* Animated Hero Title - Responsive and prevents cutoff */}
            <h1 className="mt-4 text-balance text-5xl sm:text-6xl lg:text-7xl text-center lg:text-left">
              More Than A Church,{" "}
              <span className="relative inline-block text-primary align-bottom">
                {/* Invisible placeholder reserves space, matching the responsive text sizes */}
                <span className="invisible text-5xl sm:text-6xl lg:text-7xl">We Are One Family</span>
                
                {/* Animated phrases layered on top, allowed to wrap on mobile */}
                {heroPhrases.map((phrase, i) => (
                  <span
                    key={phrase}
                    className={`absolute left-0 top-0 w-full text-center lg:text-left transition-all duration-700 ease-in-out ${
                      i === phraseIndex
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {phrase}
                  </span>
                ))}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-center lg:text-left mx-auto lg:mx-0">
              Welcome to {site.fullName} — a house of worship, teaching and community set in the
              heart of {site.address}. Come as you are and find your family.
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                to="/giving"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
              >
                <HandHeart className="h-4 w-4" aria-hidden="true" />
                Give
              </Link>
              <Link
                to="/sermons"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5 hover:bg-accent"
              >
                <PlayCircle className="h-4 w-4" aria-hidden="true" />
                Watch Sermons
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src="/images/church community.jpeg"
              alt="Congregation in worship at Mt Carmel Campus"
              className="lift h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              style={{ aspectRatio: "4 / 3" }}
            />
          </Reveal>
        </div>
      </section>

      {/* Announcements strip */}
      <section
        aria-label="Announcements"
        className="border-y border-border bg-primary text-primary-foreground"
      >
        <div className="container-page flex flex-wrap items-center gap-x-3 gap-y-1 py-3 text-sm">
          <span className="font-bold uppercase tracking-wide">Announcements</span>
          <span aria-hidden="true">·</span>
          <p className="min-w-0 flex-1 truncate">{announcements[0]}</p>
          <Link to="/events" className="shrink-0 font-semibold underline underline-offset-4">
            See all
          </Link>
        </div>
      </section>

      {/* Upcoming events carousel */}
      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="What's On" title="Upcoming Events" />
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              View all events <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <Carousel opts={{ align: "start" }}>
              <CarouselContent>
                {upcomingEvents.map((event) => (
                  <CarouselItem key={event.slug} className="sm:basis-1/2 lg:basis-1/3">
                    <Link
                      to="/events"
                      hash={event.slug}
                      className="lift block h-full overflow-hidden rounded-xl border border-border bg-card"
                    >
                      <img
                        src={
                          event.category === "Youth"
                            ? "/images/youth gathering.jpg"
                            : event.category === "Worship"
                              ? "/images/praise 2.jpeg"
                              : event.category === "Prayer" || event.category === "Sacrament"
                                ? "/images/prayer session.jpeg"
                                : "/images/church community.jpeg"
                        }
                        alt={event.title}
                        className="h-48 w-full object-cover"
                      />
                      <div className="p-5">
                        <p className="eyebrow">{event.category}</p>
                        <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {event.displayDate} · {event.time}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {event.excerpt}
                        </p>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex justify-end gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </Reveal>
        </div>
      </section>

      {/* Mission intro */}
      <section className="section bg-secondary/40">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="/images/service 1.jpeg"
              alt="The Mt Carmel Campus building and grounds"
              className="h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
              style={{ aspectRatio: "4 / 3" }}
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Who We Are" title="Loving & Reaching Kabowa" />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Founded on the gospel of Jesus Christ, {site.name} exists to build strong, successful
              and godly individuals, families and communities. As part of the {site.network}, the Mt
              Carmel Campus carries that same mission to every household in Kabowa and beyond —
              through worship, sound teaching and practical care for our neighbours.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              Learn more about us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Highlighted ministries, alternating */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Get Involved"
              title="Find Your Place To Serve"
              align="center"
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-14 space-y-16">
            {highlightMinistries.map((ministry, i) => (
              <Reveal
                key={ministry.slug}
                delay={i * 80}
                className={
                  "grid items-center gap-10 lg:grid-cols-2 " +
                  (i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : "")
                }
              >
                <img
                  src={
                    ministry.name.includes("Men")
                      ? "/images/brother hood.jpg"
                      : ministry.name.includes("Women")
                        ? "/images/women-ministry.jpg"
                        : ministry.name.includes("Youth")
                          ? "/images/youth gathering.jpg"
                          : "/images/church community.jpeg"
                  }
                  alt={ministry.name}
                  className="h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
                  style={{ aspectRatio: "4 / 3" }}
                />
                <div>
                  <p className="eyebrow">Ministry</p>
                  <h3 className="mt-2 text-2xl sm:text-3xl">{ministry.name}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {ministry.leader} · {ministry.meets}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{ministry.summary}</p>
                  <Link
                    to="/ministries"
                    hash={ministry.slug}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Learn more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stewardship callout */}
      <section className="section bg-secondary/40">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">Become A Steward Today</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Stewardship</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Everything we hold belongs to God. Discover what it means to steward your time, talent
              and treasure well as part of this family.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <Link
              to="/stewardship"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Giving callout — high contrast (Fixed for Dark Mode) */}
      <section className="section bg-espresso text-cream dark:bg-card dark:text-card-foreground">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow text-gold dark:text-primary">Give</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Online Giving</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-cream/75 dark:text-muted-foreground">
              Invest in the harvest and take part in the great commission — tithe, offering,
              thanksgiving, seed or special giving, all from wherever you are.
            </p>
          </Reveal>
          <Reveal delay={100} className="lg:justify-self-end">
            <Link
              to="/giving"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-espresso transition-transform hover:-translate-y-0.5 dark:bg-primary dark:text-primary-foreground"
            >
              Give Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Daily Prayer Devotion */}
      <section className="section bg-secondary/40 dark:bg-secondary/10">
        <style>{`
          @keyframes floatUp {
            0% { transform: translateY(0) scale(1); opacity: 1; }
            100% { transform: translateY(-80px) scale(1.2); opacity: 0; }
          }
        `}</style>
        
        <div className="container-page">
          <Reveal>
            <SectionHeading 
              eyebrow="Daily Devotion" 
              title="A Moment of Prayer" 
              align="center" 
              className="mx-auto" 
            />
          </Reveal>
          
          <Reveal delay={100} className="mt-10 mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10 text-center shadow-[var(--shadow-soft)]">
              <div className="absolute top-4 left-6 text-6xl text-primary/10 font-serif leading-none">
                "
              </div>
              
              <p className="eyebrow mb-4">{currentPrayer.title}</p>
              <p className="text-lg sm:text-xl leading-relaxed text-foreground/90 italic">
                "{currentPrayer.text}"
              </p>
              <p className="mt-4 text-sm font-semibold text-primary">— {currentPrayer.scripture}</p>
              
              <div className="mt-8 relative inline-block">
                <button
                  onClick={handleAmenClick}
                  className="relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90 active:scale-95"
                >
                  <HeartHandshake className="h-4 w-4" aria-hidden="true" />
                  Amen
                </button>
                
                {/* Balloon Pop Animation */}
                {amenClicked && (
                  <div className="absolute inset-0 pointer-events-none flex justify-center items-end">
                    {[...Array(6)].map((_, i) => (
                      <span
                        key={i}
                        className="absolute bottom-0"
                        style={{
                          left: `${10 + i * 16}%`,
                          width: '16px',
                          height: '20px',
                          borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                          backgroundColor: ['#f87171', '#60a5fa', '#fbbf24', '#34d399', '#a78bfa', '#f472b6'][i],
                          animation: `floatUp 1.5s ease-out forwards`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          {/* Maintained Links to Sermons and Blog */}
          <Reveal delay={200} className="mt-12 flex flex-wrap justify-center gap-6 text-center">
            <Link
              to="/sermons"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <PlayCircle className="h-4 w-4 text-primary transition-transform group-hover:scale-110" aria-hidden="true" />
              Watch Latest Sermons
            </Link>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              Read Church Blog
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section">
        <div className="container-page">
          <Reveal className="grid items-center gap-10 overflow-hidden rounded-3xl bg-primary px-8 py-14 text-primary-foreground sm:px-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl sm:text-4xl">Make A Difference</h2>
              <p className="mt-4 max-w-lg leading-relaxed text-primary-foreground/85">
                Join a ministry, attend a program or simply come as you are this Sunday. You will
                change lives, and yours will be changed too.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Our Programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/50 px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 hover:bg-primary-foreground/10"
              >
                Plan A Visit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service times */}
      <section className="border-t border-border bg-cream dark:bg-background">
        <div className="container-page py-10">
          <Reveal className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-center">
            {serviceTimes.map((s) => (
              <div key={s.day + s.name}>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">{s.day}</p>
                <p className="text-sm text-muted-foreground">
                  {s.name} · {s.time}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}