export default function CategoryLoading() {
  return (
    <div className="min-h-screen">
      {/* Header skeleton */}
      <div className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="h-7 w-32 bg-muted animate-pulse rounded" />
          <div className="h-9 w-48 bg-muted animate-pulse rounded hidden md:block" />
        </div>
      </div>
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 w-12 bg-muted animate-pulse rounded" />
          <div className="h-4 w-4 bg-muted animate-pulse rounded" />
          <div className="h-4 w-24 bg-muted animate-pulse rounded" />
        </div>
        {/* Title skeleton */}
        <div className="mb-8">
          <div className="w-12 h-1 bg-muted animate-pulse rounded-full mb-4" />
          <div className="h-9 w-64 bg-muted animate-pulse rounded mb-2" />
          <div className="h-5 w-48 bg-muted animate-pulse rounded" />
        </div>
        {/* Rules skeleton */}
        <div className="space-y-3 max-w-3xl">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-14 bg-muted animate-pulse rounded-md"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
