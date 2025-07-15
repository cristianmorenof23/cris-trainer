"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid"; // lo usamos como ícono "genérico" para Instagram

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "/home/inicio" },
    { label: "Planes", href: "/home/servicios" },
    { label: "Contacto", href: "/home/contacto" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="bg-black relative z-50 shadow-[0_7px_12px_-6px_rgba(253,224,71,0.5)]">
        <div className="flex justify-between items-center px-6 py-5 sm:py-6">
          {/* Logo */}
          <div className="flex items-center gap-6 ">
            <Link href="/home/inicio">
              <Image
                src="/logo.jpg"
                alt='Imagen logo tipo'
                width={100}
                height={100}
              />
            </Link>

            <Link
              href="/home/inicio"
              className={`font-extralight text-white text-4xl`}
            >Cristian Moreno</Link>
          </div>

          {/* Menu toggle button (visible solo en sm y menos) */}
          <button
            className="sm:hidden flex items-center gap-2 text-amber-400 focus:outline-none hover:cursor-pointer hover:scale-110 transition-all"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {/* Icono hamburguesa / close */}
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>
            )}
            {/* Texto al lado del icono */}
            <span className="font-semibold text-lg select-none">Menu</span>
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

      <footer className="bg-black text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Cristian Moreno. Todos los derechos reservados.
          </p>

          <div className="flex space-x-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/3513336631"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition flex items-center gap-2"
            >
              <ChatBubbleBottomCenterIcon className="h-5 w-5 text-amber-400" />
              WhatsApp
            </a>

            {/* Instagram (usamos un ícono genérico) */}
            <a
              href="https://www.instagram.com/cristianmorenof23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition flex items-center gap-2"
            >
              <GlobeAltIcon className="h-5 w-5 text-amber-400" />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
