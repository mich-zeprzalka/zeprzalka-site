import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-primary">404</h2>
      <h3 className="text-2xl md:text-3xl font-medium mb-6">Strona nie znaleziona</h3>
      <p className="text-muted-foreground max-w-md mb-8">
        Wygląda na to, że strona, której szukasz zadziałała tylko w wyobraźni. Przejdźmy na stabilny grunt.
      </p>
      <Button asChild>
        <Link href="/">Wróć na stronę główną</Link>
      </Button>
    </div>
  )
}
