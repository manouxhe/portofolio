"use client";
import NavItem from "@/components/navitem";

export default function Navbar() {
  return (
    <nav className="flex  justify-center gap-20 bg-white p-4 text-sm font-medium">
      <NavItem href="/" label="Reservation" />
      <NavItem href="/bookings" label="Edit Bookings" />
      <NavItem href="/bookings" label="All Bookings" />
      <NavItem href="/contact" label="Contact us" />
    </nav>
  );
}

