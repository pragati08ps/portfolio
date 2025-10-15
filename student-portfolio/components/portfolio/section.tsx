import type React from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-10 md:py-14", className)}>
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-primary text-balance mb-4">{title}</h2>
        <div className="rounded-lg bg-card text-card-foreground border border-border p-4 md:p-6">{children}</div>
      </div>
    </section>
  )
}
