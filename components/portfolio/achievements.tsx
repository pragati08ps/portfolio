import { achievements } from "@/lib/resume-data"

export function Achievements() {
  return (
    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
      {achievements.map((a) => (
        <li key={a}>{a}</li>
      ))}
    </ul>
  )
}
