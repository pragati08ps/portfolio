"use client"

import {
  profile,
  education,
  internships,
  projects,
  skills,
  certifications,
  achievements,
  coCurricular,
  extraCurricular,
} from "@/lib/resume-data"
import { Button } from "@/components/ui/button"

export default function ResumePage() {
  return (
    <main className="font-sans">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-6 flex items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/pragati-sangari.jpg"
              alt="Profile photo"
              className="h-16 w-16 rounded-md object-cover ring-1 ring-border"
            />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{profile.name}</h1>
              <p className="text-muted-foreground">{profile.title}</p>
              <p className="text-muted-foreground">
                {profile.location} • {profile.phone} • {profile.email}
              </p>
            </div>
          </div>
          <PrintButton />
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 md:px-6 py-6 space-y-8">
        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">About</h2>
          <p className="text-sm md:text-base text-muted-foreground">{profile.about}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Education</h2>
          <ul className="space-y-2">
            {education.map((e) => (
              <li key={e.degree} className="flex items-start justify-between gap-4 border-b border-border pb-2">
                <div>
                  <p className="font-medium">{e.degree}</p>
                  <p className="text-muted-foreground">{e.school}</p>
                </div>
                <p className="text-sm text-muted-foreground">{e.period}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Internship Experience</h2>
          <ul className="space-y-4">
            {internships.map((job) => (
              <li key={job.role} className="border border-border rounded-md p-4 bg-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{job.role}</p>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{job.period}</p>
                </div>
                <ul className="list-disc pl-5 mt-2 text-sm text-muted-foreground space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Projects</h2>
          <ul className="space-y-2">
            {projects.map((p) => (
              <li key={p.name} className="border border-border rounded-md p-4 bg-card">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.map((s) => (
              <li key={s.category} className="border border-border rounded-md p-3 bg-card">
                <p className="font-medium">{s.category}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.items.join(", ")}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Courses & Certifications</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Achievements</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Co‑Curricular Activities</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {coCurricular.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-primary mb-2">Extra‑Curricular Activities</h2>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            {extraCurricular.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}

function PrintButton() {
  return (
    <Button type="button" variant="secondary" onClick={() => typeof window !== "undefined" && window.print()}>
      Print / Save PDF
    </Button>
  )
}
