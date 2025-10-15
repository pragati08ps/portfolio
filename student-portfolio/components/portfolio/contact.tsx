import Link from "next/link"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/resume-data"

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <div className="flex-1">
        <p className="text-sm text-muted-foreground">
          I’m happy to connect about internships, projects, and roles related to web development, data, and ML.
        </p>
      </div>
      <div className="flex gap-3">
        <Button asChild>
          <a href={`mailto:${profile.email}`} aria-label="Email Pragati">
            Email
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href={`tel:${profile.phone}`} aria-label="Call Pragati">
            Call
          </a>
        </Button>
        <Button asChild variant="ghost">
          <Link href={profile.linkedin} aria-label="LinkedIn profile">
            LinkedIn
          </Link>
        </Button>
      </div>
    </div>
  )
}
