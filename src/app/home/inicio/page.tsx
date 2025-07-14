import { bebas } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function InicioPage() {
  return (
    <section className={`grid grid-cols-1 sm:grid-cols-2 gap-2 items-center px-6 sm:px-16 py-16 bg-black text-white ${bebas.className}`}>

      {/* TEXTO */}
      <div className="space-y-6">
        <p className="text-amber-400 text-2xl sm:text-3xl tracking-wide uppercase tracking-in-expand">
          Entrenamiento personalizado – Online
        </p>

        <h2 className="text-5xl sm:text-7xl leading-tight text-white tracking-in-expand">
          Tu cambio físico <br /> empieza hoy
        </h2>

        <p className="text-2xl text-gray-300 max-w-md ">
          Más de 10 años de experiencia entrenando. Te ayudo a alcanzar tus objetivos con un plan real, sin humo.
        </p>

        <Link
          href="https://wa.me/543513336631?text=Hola%20Cristian!%20Quiero%20empezar%20a%20entrenar%20con%20vos."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 rounded-md bg-amber-500 py-3 px-8 text-2xl font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:ring-2 focus:ring-amber-600 focus:outline-none hover:cursor-pointer"
        >
          Empezá ahora
        </Link>


        {/* CHECKLIST */}
        <div className="space-y-2 pt-4">
          {[
            "Rutinas personalizadas según tu nivel y objetivo",
            "Seguimiento constante por WhatsApp",
            "Entrenamiento online",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-xl">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGEN */}
      <div className="flex justify-center">
        <Image
          src="/criss.jpg"
          alt="Cristian Moreno - Entrenador"
          width={500}
          height={500}
          className="rounded-xl object-cover max-w-full h-auto shadow-lg shadow-amber-500/10 fade-in "
        />
      </div>
    </section>
  )
}
