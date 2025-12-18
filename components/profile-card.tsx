type ProfileCardProps = {
  name: string
  role: string
}

export default function ProfileCard({ name, role }: ProfileCardProps) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  )
}
