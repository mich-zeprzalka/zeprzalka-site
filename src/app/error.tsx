"use client"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Coś poszło nie tak!</h2>
      <p className="text-muted-foreground mb-8">
        Wystąpił nieoczekiwany błąd. Spróbuj ponownie lub odśwież stronę.
      </p>
      <Button onClick={reset} variant="default">Spróbuj ponownie</Button>
    </div>
  )
}
