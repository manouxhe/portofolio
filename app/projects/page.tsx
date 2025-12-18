import InfoCard from '@/components/info-card'
import Section from '@/components/section'
import Badge from '@/components/badge'

export default function HomePage() {
  return (
    <main className="p-8 bg-pink-50 min-h-screen">

      <Section title="About me">
        <InfoCard
          title="Manar El Kadi"
          description="Electronic & Computer Engineering student"
        />
      </Section>

      <Section title="Skills">
        <div className="flex gap-3 flex-wrap">
          <Badge label="React" />
          <Badge label="Next.js" />
          <Badge label="TypeScript" />
        </div>
      </Section>

    </main>
  )
}
