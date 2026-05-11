import "./globals.css"
import { Poppins, Ovo } from "next/font/google"
import Navbar from "../lib/components/navbar"
import Footer from "../lib/components/footer"
import { CartProvider } from "../lib/cart-context"
import CartDrawer from "../lib/components/CartDrawer"

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
        <CartProvider>
          <div className="promo-shimmer text-white text-center py-2 text-sm px-4 tracking-wide">
            🌸 Make Mom feel extra special with premium flowers 💐 Use <span className="font-semibold">MOM26</span> for $10 OFF
          </div>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}
