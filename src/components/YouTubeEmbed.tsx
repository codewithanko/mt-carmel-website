import { useState } from "react";
import { PlayCircle } from "lucide-react";

type Props = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, title, className }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`aspect-video w-full overflow-hidden rounded-lg bg-black ${className ?? ""}`}>
        <iframe
          className="h-full w-full"
          // Changed to standard youtube.com and removed autoplay=1 for mobile compatibility
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-black ${className ?? ""}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/10">
        <PlayCircle
          className="h-16 w-16 text-white drop-shadow-lg transition-transform group-hover:scale-110"
          aria-hidden="true"
        />
      </span>
    </button>
  );
}