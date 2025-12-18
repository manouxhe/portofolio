type SectionProps = {
  title: string
  children: React.ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-10 ">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  )
}
