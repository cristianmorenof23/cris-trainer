import { bebas } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {
  ClipboardDocumentCheckIcon,
  BoltIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  VideoCameraIcon,
  NoSymbolIcon,
  FireIcon,
  ShieldCheckIcon,
  AdjustmentsVerticalIcon,
  HeartIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/solid";

const PLANES = [
  {
    titulo: 'Hipertrofia Muscular',
    imagen: '/hipertrofia.jpg',
    beneficios: [
      { icon: ClipboardDocumentCheckIcon, text: 'Plan personalizado para ganar masa muscular' },
      { icon: BoltIcon, text: 'Progresiones para aumentar fuerza y volumen' },
      { icon: ChatBubbleBottomCenterTextIcon, text: 'Seguimiento semanal por WhatsApp' },
      { icon: ClockIcon, text: 'Entrenamientos adaptados a tu disponibilidad' },
      { icon: VideoCameraIcon, text: 'Corrección de técnica por video' },
      { icon: NoSymbolIcon, text: 'Resultados visibles sin vender humo' },
    ],
    mensaje: 'Hola Cristian, quiero más info sobre el entrenamiento de hipertrofia',
  },
  {
    titulo: 'Fuerza Pura',
    imagen: '/fuerza.jpg',
    beneficios: [
      { icon: ArrowTrendingUpIcon, text: 'Entrenamientos enfocados en fuerza máxima' },
      { icon: ShieldCheckIcon, text: 'Técnica y control postural en movimientos compuestos' },
      { icon: ClockIcon, text: 'Progresión en básicos: sentadilla, peso muerto y press banca' },
      { icon: ChatBubbleBottomCenterTextIcon, text: 'Revisión constante y ajuste del plan' },
    ],
    mensaje: 'Hola Cristian, me interesa el plan de fuerza pura',
  },
  {
    titulo: 'Definición y Quema de Grasa',
    imagen: '/definicion.jpg',
    beneficios: [
      { icon: FireIcon, text: 'Entrenamientos metabólicos y funcionales' },
      { icon: ChatBubbleBottomCenterTextIcon, text: 'Asesoría para mejorar la alimentación' },
      { icon: AdjustmentsVerticalIcon, text: 'Plan ajustado a tus tiempos y objetivos' },
      { icon: BoltIcon, text: 'Alta intensidad para quemar calorías' },
    ],
    mensaje: 'Hola Cristian, quiero arrancar con un plan para quemar grasa',
  },
  {
    titulo: 'Funcional y Movilidad',
    imagen: '/agilidad.jpg',
    beneficios: [
      { icon: SparklesIcon, text: 'Sentite fuerte, ágil y sin dolores' },
      { icon: ClockIcon, text: 'Entrenamientos cortos y efectivos' },
      { icon: HeartIcon, text: 'Mejorá tu movilidad y salud general' },
      { icon: VideoCameraIcon, text: 'Corrección de técnica con video-feedback' },
    ],
    mensaje: 'Hola Cristian, quiero entrenar funcional y mejorar mi movilidad',
  },
];

export default function ServicioSection() {
  return (
    <div className="relative min-h-screen flex flex-col items-center px-4 py-16 gap-20">
      <div className="absolute inset-0 bg-[url('/background-gym.jpg')] bg-cover bg-center opacity-10 z-0" />

      <div className="relative z-10 text-center text-white max-w-xl">
        <h2 className={`${bebas.className} text-amber-400 text-6xl font-bold mb-4 tracking-in-expand`}>
          Planes de Entrenamiento
        </h2>
        <p className={`${bebas.className} text-2xl text-gray-300`}>
          Elegí el enfoque que mejor se adapte a tus objetivos.
        </p>
      </div>

      <div className="relative z-10 grid gap-12 grid-cols-1 md:grid-cols-2">
        {PLANES.map(({ titulo, imagen, beneficios, mensaje }, idx) => (
          <div key={idx} className="neon-border p-[3px] rounded-xl h-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col h-full">
              <Image
                className="w-full h-48 object-cover"
                src={imagen}
                alt={titulo}
                width={400}
                height={400}
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-black">{titulo}</h3>
                <ul className={`${bebas.className} text-xl space-y-3 mb-6 flex-grow`}>
                  {beneficios.map(({ icon: Icon, text }, i) => (
                    <li key={i} className="flex items-start gap-3 text-black">
                      <Icon className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`https://wa.me/3513336631?text=${encodeURIComponent(mensaje)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bebas.className} mt-auto block w-full text-center rounded-lg bg-amber-400 py-3 px-4 text-2xl font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:ring-2 focus:ring-amber-600 focus:outline-none hover:cursor-pointer hover:bg-amber-600`}
                >
                  Empezar ahora
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
