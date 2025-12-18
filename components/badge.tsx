type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block bg-white text-black-600 px-3 py-1 rounded-full text-sm m-2">
      {label}
    </span>
  );
}
