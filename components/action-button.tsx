type ActionButtonProps = {
  label: string;
  color?: "pink" | "red" | "blue";
};

export default function ActionButton({
  label,
  color = "blue",
}: ActionButtonProps) {
  const colors = {
    pink: "bg-pink-500 hover:bg-pink-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
  };

  return (
    <button
      type="submit"
      className={`
        ${colors[color]}
        text-white
        px-4 py-2
        rounded
        font-medium
        transition
      `}
    >
      {label}
    </button>
  );
}
