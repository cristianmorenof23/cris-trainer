"use client"

import Link from "next/link";
import React, { useState } from "react";



export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/home/inicio" },
    { label: "Servicios", href: "/home/servicios" },
    { label: "Contacto", href: "/home/contacto" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="bg-black relative z-50 shadow-[0_7px_12px_-6px_rgba(253,224,71,0.5)]">
        <div className="flex justify-between items-center px-6 py-5 sm:py-6">
          {/* Logo */}
          <Link href="/home/inicio">
            <h1 className="text-2xl font-bold cursor-pointer">Cristian Moreno</h1>
          </Link>

          {/* Menu toggle button (visible solo en sm y menos) */}
          <button
            className="sm:hidden text-amber-400 focus:outline-none hover:cursor-pointer hover:scale-125 transition-all "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {/* Icono hamburguesa / close */}
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>

          {/* Navegación (oculta en móvil si no está abierto) */}
          <nav
            className={`sm:flex sm:items-center sm:gap-8 absolute sm:static top-full left-0 w-full sm:w-auto bg-black sm:bg-transparent transition-transform duration-300 ease-in-out ${menuOpen ? "translate-y-0" : "-translate-y-[200%]"
              } sm:translate-y-0`}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="block px-6 py-4 sm:px-0 text-white hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] transition duration-200"
                onClick={() => setMenuOpen(false)} // cierra el menú al click en móvil
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>
    </div>
  );
}
