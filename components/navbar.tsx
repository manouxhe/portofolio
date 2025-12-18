"use client";
import NavItem from "@/components/navitem";

export default function Navbar() {
  return (
    <nav className="flex  justify-center gap-20 bg-white p-4 text-sm font-medium">
      <NavItem href="/" label="Home" />
      <NavItem href="/about" label="About" />
      <NavItem href="/projects" label="Projects" />
      <NavItem href="/contact" label="Contact" />
      <NavItem href="/chat" label="Chat" />
      <NavItem href="/cv" label="CV" />
      <NavItem href="/wikipedia" label="Wikipedia" />
    </nav>
  );
}

