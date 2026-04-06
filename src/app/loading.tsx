import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 min-h-[50vh] flex flex-col gap-8">
      <Skeleton className="h-[200px] w-full rounded-xl bg-muted/20" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Skeleton className="h-[300px] w-full rounded-xl bg-muted/20" />
        <Skeleton className="h-[300px] w-full rounded-xl bg-muted/20" />
        <Skeleton className="h-[300px] w-full rounded-xl bg-muted/20" />
      </div>
    </div>
  )
}
