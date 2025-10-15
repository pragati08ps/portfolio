import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/resume-data"

export function Projects() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <Card key={p.name} className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">{p.name}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <p>{p.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
