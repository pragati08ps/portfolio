import { certifications } from "@/lib/resume-data"

export function Certifications() {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
      {certifications.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  )
}
