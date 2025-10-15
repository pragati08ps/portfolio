import { Hero } from "@/components/portfolio/hero"
import { Section } from "@/components/portfolio/section"
import { Education } from "@/components/portfolio/education"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Certifications } from "@/components/portfolio/certifications"
import { Achievements } from "@/components/portfolio/achievements"
import { Activities } from "@/components/portfolio/activities"
import { Contact } from "@/components/portfolio/contact"
import { profile } from "@/lib/resume-data"

export default function Page() {
  return (
    <main className="font-sans">
      <Hero />

      <Section id="about" title="About Me">
        <p className="text-sm md:text-base text-muted-foreground">{profile.about}</p>
      </Section>

      <Section id="education" title="Education">
        <Education />
      </Section>

      <Section id="experience" title="Internship Experience">
        <Experience />
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="certifications" title="Courses and Certifications">
        <Certifications />
      </Section>

      <Section id="achievements" title="Achievements">
        <Achievements />
      </Section>

      <Section id="activities" title="Activities">
        <Activities />
      </Section>

      <Section id="contact" title="Contact">
        <Contact />
      </Section>

      <footer className="py-10">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}
