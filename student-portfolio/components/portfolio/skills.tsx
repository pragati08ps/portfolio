import { Badge } from "@/components/ui/badge"
import { skills } from "@/lib/resume-data"

export function Skills() {
  return (
    <div className="grid gap-6">
      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{group.category}</h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-2 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
