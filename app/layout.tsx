import React from "react"
import Navigation from "../components/navbar/navibar"
import { Metadata } from "next";

export const metadata :Metadata = {
  title: {
    template: "%s | Next.NPE",
    default: "Loading...",
  },
  description: 'Next.js Learning Project With NomadCoder',
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
