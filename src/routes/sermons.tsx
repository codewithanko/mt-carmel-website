import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PlayCircle, User, BookOpen } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sermons } from "@/data/content";

export const Route = createFileRoute("/sermons")({
  component: Sermons,
});

function Sermons() {
  const [series, setSeries] = useState("all");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const allSeries = useMemo(() => Array.from(new Set(sermons.map((s) => s.series))), []);
  const filtered = series === "all" ? sermons : sermons.filter((s) => s.series === series);

  return (
    <div>
      {/* Custom Professional Header for Sermons */}
      <header className="relative overflow-hidden border-b border-border bg-cream dark:bg-background">
        {/* Decorative gradient backdrop - shifted to RIGHT side for variety */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 75% at 88% 15%, color-mix(in oklch, var(--color-primary) 26%, transparent) 0%, transparent 60%), radial-gradient(50% 65% at 12% 10%, color-mix(in oklch, var(--color-gold) 32%, transparent) 0%, transparent 65%), radial-gradient(70% 80% at 50% 110%, color-mix(in oklch, var(--color-espresso) 14%, transparent) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        />
        
        <div className="container-page relative py-20 sm:py-28">
          <Reveal className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Hear From God's Word
            </div>
            
            <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl">
              Sermons & Messages
            </h1>
            
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              "Faith comes from hearing, and hearing through the word of Christ." At Mt Carmel 
              Campus, we believe the preached Word of God is alive, active, and transformative. 
              Our sermons are rooted in Scripture, centered on Jesus Christ, and designed to equip 
              you for every good work. Whether you are seeking encouragement in a difficult season, 
              guidance for life's decisions, or deeper understanding of biblical truth, our messages 
              are here to nourish your spirit and strengthen your walk with God. Listen to recent 
              teachings, revisit powerful messages, and allow the Holy Spirit to speak to your heart 
              through the timeless truth of God's Word.
            </p>
            
            {/* Scripture Block */}
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                "For the word of God is alive and active. Sharper than any double-edged sword, it 
                penetrates even to dividing soul and spirit, joints and marrow; it judges the 
                thoughts and attitudes of the heart."
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">— Hebrews 4:12</p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Sermons Grid Section */}
      <section className="section">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm font-semibold text-muted-foreground">
              {filtered.length} message{filtered.length === 1 ? "" : "s"}
            </p>
            <Select value={series} onValueChange={setSeries}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Filter by series" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All series</SelectItem>
                {allSeries.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((sermon, i) => {
              const open = openSlug === sermon.slug;
              return (
                <Reveal
                  key={sermon.slug}
                  id={sermon.slug}
                  delay={(i % 3) * 60}
                  className="scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <button
                    type="button"
                    onClick={() => setOpenSlug(open ? null : sermon.slug)}
                    aria-expanded={open}
                    className="group relative block aspect-video w-full overflow-hidden text-left"
                  >
                    {sermon.youtubeId ? (
                      <img
                        src={`https://i.ytimg.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground">
                        <PlayCircle className="h-12 w-12" aria-hidden="true" />
                      </div>
                    )}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center bg-espresso/10 transition-colors group-hover:bg-espresso/25"
                    >
                      <PlayCircle className="h-12 w-12 text-white drop-shadow-lg" />
                    </span>
                  </button>
                  <div className="p-6">
                    <p className="eyebrow">{sermon.series}</p>
                    <h3 className="mt-2 text-lg font-semibold">{sermon.title}</h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <User className="h-4 w-4 shrink-0" aria-hidden="true" />
                      {sermon.speaker} · {sermon.date}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {sermon.excerpt}
                    </p>

                    {open ? (
                      <div className="mt-5 space-y-4 border-t border-border pt-5">
                        {sermon.youtubeId ? (
                          <YouTubeEmbed videoId={sermon.youtubeId} title={sermon.title} />
                        ) : (
                          <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-primary/30 bg-accent/60 text-sm font-medium text-muted-foreground">
                            Video coming soon
                          </div>
                        )}
                        <p className="text-sm font-semibold text-primary">{sermon.scripture}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {sermon.notes}
                        </p>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setOpenSlug(sermon.slug)}
                        className="mt-4 text-sm font-semibold text-primary hover:underline"
                      >
                        Watch & read notes
                      </button>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}