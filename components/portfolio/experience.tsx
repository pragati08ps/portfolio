import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { internships } from "@/lib/resume-data"

export function Experience() {
  return (
    <div className="grid gap-4">
      {internships.map((exp) => (
        <Card key={`${exp.role}-${exp.company}`} className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">
              {exp.role} • {exp.company}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="text-muted-foreground mb-2">{exp.period}</p>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
