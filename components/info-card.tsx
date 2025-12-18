type InfoCardProps = {
  title: string
  description: string
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
