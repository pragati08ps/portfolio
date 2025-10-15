import { coCurricular, extraCurricular } from "@/lib/resume-data"

export function Activities() {
  return (
    <div className="grid gap-6">
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Co-curricular</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {coCurricular.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Extra-curricular</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          {extraCurricular.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
