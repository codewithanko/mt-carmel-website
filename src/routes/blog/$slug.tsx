import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { blogPosts } from "@/data/content";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
});

// Same mapping as the listing page
const blogImages: Record<string, string> = {
  Prayer: "/images/prayer session 5.jpeg",
  Teaching: "/images/preacher 2.jpeg",
  Community: "/images/sunday lunch gathering.jpeg",
  Stewardship: "/images/preacher 3.jpeg",
};

function BlogPost() {
  const post = Route.useLoaderData();
  const imageUrl = blogImages[post.category] || "/images/church community.jpeg";

  return (
    <article className="section">
      <div className="container-page max-w-3xl">
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Blog
          </Link>
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-3 text-balance text-4xl sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            {post.author} · {post.date}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <img
            src={imageUrl}
            alt={post.title}
            className="h-auto w-full rounded-2xl object-cover shadow-[var(--shadow-soft)]"
            style={{ aspectRatio: "16 / 9" }}
          />
        </Reveal>

        <Reveal
          delay={150}
          className="prose-content mt-10 space-y-5 text-base leading-relaxed text-foreground/90"
        >
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </article>
  );
}