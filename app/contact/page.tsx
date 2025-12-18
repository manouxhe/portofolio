import InfoCard from '@/components/info-card'
import Section from '@/components/section'

export default function Contact() {
  return (
    <main className="p-8 bg-pink-50 min-h-screen ">

      <Section title="Contact us" >
        <InfoCard
          title="Manar Restaurant 5 stars"
          description="mail : manarrestaurant@gmail.com"
        />
      </Section>



    </main>
  )
}
