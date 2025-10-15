import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { education } from "@/lib/resume-data"

export function Education() {
  return (
    <div className="grid gap-4">
      {education.map((ed) => (
        <Card key={ed.degree} className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-base md:text-lg">{ed.degree}</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span>{ed.school}</span>
              <span>{ed.period}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
