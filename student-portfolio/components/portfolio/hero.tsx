import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/lib/resume-data"
import { AiBackground } from "./ai-background"

export function Hero() {
  return (
    <header className="bg-background relative overflow-hidden">
      <AiBackground className="absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 md:px-6 pt-10 md:pt-14">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="px-2 py-1">
                Open to Opportunities
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{profile.name}</h1>
            <p className="text-muted-foreground mt-2">{profile.title}</p>
            <p className="text-muted-foreground mt-1">{profile.location}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button asChild>
                <a href={`mailto:${profile.email}`} aria-label="Email Pragati">
                  Email me
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`tel:${profile.phone}`} aria-label="Call Pragati">
                  Call: {profile.phone}
                </a>
              </Button>
              <Button asChild variant="ghost">
                <Link href={profile.github} aria-label="GitHub profile">
                  GitHub
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href={profile.linkedin} aria-label="LinkedIn profile">
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/resume" aria-label="View full resume">
                  View Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-28 h-28 rounded-full overflow-hidden border border-border bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/pragati-sangari.jpg" alt="Profile photo" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Anchor Nav */}
        <nav className="mt-6 border-t border-border pt-4">
          <ul className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            {[
              ["about", "About"],
              ["education", "Education"],
              ["experience", "Experience"],
              ["projects", "Projects"],
              ["skills", "Skills"],
              ["certifications", "Certifications"],
              ["achievements", "Achievements"],
              ["activities", "Activities"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-foreground underline-offset-4 hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
