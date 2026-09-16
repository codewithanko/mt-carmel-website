import { cn } from "@/lib/utils";

type Props = {
  label: string;
  /** CSS aspect ratio, e.g. "16 / 9" */
  ratio?: string;
  className?: string;
  rounded?: boolean;
};

/**
 * Marked placeholder for a real photograph.
 * Swap the inner markup for an <img> when real photos are supplied —
 * the surrounding layout does not need to change.
 */
export function ImagePlaceholder({ label, ratio = "16 / 9", className, rounded = true }: Props) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden border border-dashed border-primary/30 bg-accent/60",
        rounded && "rounded-xl",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent,transparent_14px,color-mix(in_oklab,var(--primary)_9%,transparent)_14px,color-mix(in_oklab,var(--primary)_9%,transparent)_28px)]"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-4 text-center">
        <span className="rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">
          Photo
        </span>
        <span className="max-w-[24ch] text-sm font-medium text-muted-foreground">{label}</span>
      </div>
    </div>
  );
}
