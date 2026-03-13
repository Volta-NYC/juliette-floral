import "./globals.css"
import { Poppins, Ovo } from "next/font/google"
import Navbar from "../lib/components/navbar"
import Footer from "../lib/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
})

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ovo",
})

export const metadata = {
  title: "Juliette Floral Design",
  description: "Capturing Magic Through Flowers",
  openGraph: {
    title: "Juliette Floral Design",
    description: "Capturing Magic Through Flowers",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${ovo.variable}`}>
      <body className="min-h-screen flex flex-col font-body text-brand-text">
        <div className="bg-brand-olive text-white text-center py-2 text-sm px-4">
          Thank you so much for all the support 💕🌹 Only pick ups for Valentine&apos;s Day
        </div>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
