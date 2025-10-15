import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

/**
 * Decorative AI-inspired background using semantic tokens.
 * Uses subtle radial gradients; no network requests; zero JS on client.
 */
export function AiBackground({ className }: Props) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", "opacity-50 md:opacity-60 mix-blend-normal", className)}
      style={{
        backgroundImage:
          "radial-gradient(60% 45% at 15% 0%, hsl(var(--primary)/0.10), transparent 70%), radial-gradient(50% 40% at 100% 100%, hsl(var(--accent)/0.08), transparent 70%)",
      }}
    />
  )
}
