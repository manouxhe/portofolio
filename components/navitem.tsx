// components/NavItem.tsx
"use client";
import Link from "next/link";

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="
        text-gray-700
        font-medium
        transition
        duration-300
        ease-out
        hover:text-[oklch(81%_0.117_11.638)]
        hover:scale-105
      "
    >
      {label}
    </Link>
  );
}
