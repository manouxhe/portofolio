type CvItemProps = {
  content: string
}

export default function CvItem({ content }: CvItemProps) {
  return (
    <div className="bg-white p-3 rounded shadow mb-2">
      {content}
    </div>
  )
}
