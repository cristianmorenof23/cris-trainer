// app/layout.tsx o app/rootlayout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts"// 👈 importa la fuente (o también bebas si querés usarla acá)
import { Analytics } from "@vercel/analytics/next"



export const metadata: Metadata = {
  title: "Cristian Moreno - Trainer",
  description: "Inicia ahora y empeza el cambio que siempre buscaste",
  icons: {
    icon: "/mancuerna.svg", // o .ico si usás imagen clásica
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
