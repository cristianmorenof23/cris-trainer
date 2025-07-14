'use client';
import { bebas } from '@/app/fonts';
import { useState } from 'react';
import React from 'react';

export default function ContactoPage() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const generarLinkWhatsapp = () => {
    const texto = `Hola Cristian! Soy ${nombre} (${email}) y quería consultarte lo siguiente: ${mensaje}`;
    return `https://wa.me/3513336631?text=${encodeURIComponent(texto)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nombre.trim() || !email.trim() || !mensaje.trim()) {
      setError('Por favor completá todos los campos antes de enviar.');
      return;
    }

    setError('');
    window.open(generarLinkWhatsapp(), '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-[url('/background-gym.jpg')] bg-cover bg-center opacity-10 z-0" />

      <div className="relative z-10 max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className={`${bebas.className} text-4xl text-amber-500  tracking-in-expand font-bold text-center mb-6`}>
          Contacto
        </h2>

        <p className="text-center text-gray-700 mb-8">
          ¿Tenés dudas o querés empezar tu entrenamiento? Enviame un mensaje y te respondo lo antes posible.
        </p>

        {error && (
          <p className="text-red-600 font-medium mb-4 text-center">{error}</p>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre" className="block text-black mb-1 font-semibold">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              className="w-full px-4 py-2 border rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-black mb-1 font-semibold">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-black mb-1 font-semibold">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              className="w-full px-4 py-2 border rounded-md h-28 text-black resize-none focus:outline-none focus:ring-2 focus:ring-amber-500"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Contame qué objetivo tenés o qué necesitás..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="block w-full text-center hover:cursor-pointer bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition"
          >
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
