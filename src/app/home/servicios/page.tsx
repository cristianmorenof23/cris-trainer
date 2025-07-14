import { bebas } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicioSection() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 mt-8">
      {/* Fondo decorativo (opcional) */}
      <div className="absolute inset-0 bg-[url('/background-gym.jpg')] bg-cover bg-center opacity-10 z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-xl text-center text-white mb-12">
        <h2 className={` ${bebas.className} text-amber-400 text-6xl font-bold mb-2`}>Servicios como Entrenador</h2>
        <p className={` ${bebas.className}  text-2xl text-gray-300`}>
          Potenciá tu cuerpo con un plan de entrenamiento adaptado a tus objetivos físicos.
        </p>
      </div>

      {/* Card */}
      <div className="relative z-10 mb-4">
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            className="w-full h-48 object-cover"
            src="/gym.jpg"
            alt="Musculación"
            width={400}
            height={400}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Entrenamiento de Musculación</h3>

            <ul className={`${bebas.className} text-2xl space-y-3 mb-6 `}>
              {[
                "Programa personalizado para ganar masa muscular",
                "Mejora de fuerza y resistencia",
                "Seguimiento continuo",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="https://wa.me/3513336631?text=Hola%20Cristian,%20quiero%20más%20info%20sobre%20el%20entrenamiento%20de%20musculación"
              target="_blank"
              rel="noopener noreferrer"
              className={`  mt-8 block w-full text-center rounded-lg  bg-amber-400 py-3 px-4 text-3xl font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:ring-2 focus:ring-amber-600 focus:outline-none hover:cursor-pointer  ${bebas.className} `}
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
