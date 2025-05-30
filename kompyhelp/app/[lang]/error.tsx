// app/[lang]/error.tsx
'use client'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container mx-auto p-4">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <details>
        <summary>Error details</summary>
        <pre>{error.message}</pre>
      </details>
    </div>
  )
}