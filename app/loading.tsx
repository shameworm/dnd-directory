export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="h-7 w-32 bg-muted animate-pulse rounded" />
          <div className="h-9 w-48 bg-muted animate-pulse rounded hidden md:block" />
        </div>
      </div>
      <main className="container mx-auto px-4 py-8">
        {/* Hero skeleton */}
        <div className="text-center mb-10">
          <div className="size-16 bg-muted animate-pulse rounded-full mx-auto mb-4" />
          <div className="h-10 w-64 bg-muted animate-pulse rounded mx-auto mb-2" />
          <div className="h-5 w-96 max-w-full bg-muted animate-pulse rounded mx-auto" />
        </div>
        {/* Search skeleton */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="h-10 bg-muted animate-pulse rounded-md" />
        </div>
        {/* Grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-muted animate-pulse rounded-lg"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
