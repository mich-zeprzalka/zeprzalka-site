// src/components/blog/YouTubeEmbed.tsx

interface YouTubeEmbedProps {
  id: string
  title?: string
}

export function YouTubeEmbed({ id, title = "YouTube video" }: YouTubeEmbedProps) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border shadow-md">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
          loading="lazy"
        />
      </div>
      {title && (
        <p className="px-4 py-2 text-sm text-muted-foreground">
          {title}
        </p>
      )}
    </div>
  )
}
