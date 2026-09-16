import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/data/content";

export const Route = createFileRoute("/events")({
  component: Events,
});

function EventCard({ event, index }: { event: (typeof events)[number]; index: number }) {
  return (
    <Reveal
      id={event.slug}
      delay={(index % 3) * 60}
      className="lift scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-card"
    >
      <img
        src={
          event.category === "Youth"
            ? "/images/women-hugging.jpg"
            : event.category === "Worship"
              ? "/images/praise 2.jpeg"
              : event.category === "Sacrament" || event.category === "Prayer"
                ? "/images/prayer session 9.jpeg"
                : event.category === "Community"
                  ? "/images/praise 7.jpeg"
                      : event.category === "Celebration"
                        ? "/images/sunday lunch gathering.jpeg"
                        : "/images/prayer session 8.jpeg"
        }
        alt={event.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <p className="eyebrow">{event.category}</p>
        <h3 className="mt-2 text-xl font-semibold">{event.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
          {event.displayDate} · {event.time}
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          {event.location}
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">{event.description}</p>
      </div>
    </Reveal>
  );
}

function Events() {
  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <div>
      {/* Custom Professional Header with Gradients and Scripture */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background py-20 sm:py-28">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
        
        <div className="container-page relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <Users className="h-4 w-4" aria-hidden="true" />
              Gather & Grow
            </div>
            
            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Church Events
            </h1>
            
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From powerful worship nights to hands-on community outreach, our gatherings are 
              designed to help you connect deeply with God and grow alongside your church family. 
              Every event is a divine opportunity to experience His presence, serve with purpose, 
              and build lasting friendships rooted in faith.
            </p>
            
            {/* Scripture Block */}
            <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border/50 bg-card/60 p-6 shadow-sm backdrop-blur-sm">
              <p className="text-lg font-medium italic leading-relaxed text-foreground">
                “And let us consider how we may spur one another on toward love and good deeds, 
                not giving up meeting together, as some are in the habit of doing, but encouraging 
                one another.”
              </p>
              <p className="mt-3 text-sm font-semibold text-primary">— Hebrews 10:24–25</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Events Tabs Section */}
      <section className="section">
        <div className="container-page">
          <Tabs defaultValue="upcoming">
            <TabsList className="mx-auto mb-10">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {upcoming.map((event, i) => (
                  <EventCard key={event.slug} event={event} index={i} />
                ))}
              </div>
              {upcoming.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  <p className="text-lg">No upcoming events at the moment. Check back soon!</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {past.map((event, i) => (
                  <EventCard key={event.slug} event={event} index={i} />
                ))}
              </div>
              {past.length === 0 && (
                <div className="py-20 text-center text-muted-foreground">
                  <p className="text-lg">No past events recorded yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}