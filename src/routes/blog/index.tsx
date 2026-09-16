import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/content";

export const Route = createFileRoute("/blog/")({
  component: Blog,
});

// Map blog categories to specific images
const blogImages: Record<string, string> = {
  Prayer: "/images/prayer session 5.jpeg",
  Teaching: "/images/preacher 2.jpeg",
  Community: "/images/sunday lunch gathering.jpeg",
  Stewardship: "/images/prayernfasting poster.jpeg",
};

function Blog() {
  return (
    <div>
      <PageHeader
        eyebrow="Church Blog"
        title="Blog"
        intro="Teaching, encouragement and stories from the life of the Mt Carmel Campus."
      />

      <section className="section">
        <div className="container-page grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 60}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="lift block h-full overflow-hidden rounded-2xl border border-border bg-card"
              >
                <img
                  src={blogImages[post.category] || "/images/church community.jpeg"}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <p className="eyebrow">{post.category}</p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {post.author} · {post.date}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}