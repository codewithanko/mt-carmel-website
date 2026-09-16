import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = { eyebrow?: string; title: string; intro?: ReactNode };

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header className="border-b border-border bg-cream">
      <div className="container-page py-16 sm:py-20">
        <Reveal className="max-w-3xl">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="mt-3 text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {intro ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </header>
  );
}
