import Link from "next/link"
import fs from "fs"
import path from "path"
import Image from "next/image"
import { getProductsByCategory } from "../../lib/data"
import Reveal from "../../lib/components/Reveal"

export default function CollectionsIndexPage() {
  const collectionsFile = path.join(process.cwd(), "data", "collections.json")
  const collections: string[] = fs.existsSync(collectionsFile)
    ? JSON.parse(fs.readFileSync(collectionsFile, "utf-8"))
    : []

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-up">
        <p className="text-brand-orange tracking-[0.3em] text-xs uppercase mb-4">Browse</p>
        <h1 className="font-heading text-5xl md:text-6xl text-brand-text mb-4">All Collections</h1>
        <div className="w-16 h-[2px] bg-brand-peach mx-auto mb-6" />
        <p className="text-brand-olive max-w-2xl mx-auto">
          Explore our categories to find exactly what you&apos;re looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col, i) => {
          const title = col.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
          const products = getProductsByCategory(col)
          const img = col === "cards" ? "/cards.webp" : products[0]?.images[0] || "/placeholder.jpg"
          const count = products.length

          return (
            <Reveal key={col} delay={i * 120}>
              <Link href={`/collections/${col}`} className="group block">
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-peach/20 shadow-md group-hover:shadow-2xl transition-shadow duration-500">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-text/70 via-brand-text/20 to-transparent group-hover:from-brand-text/80 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center px-4">
                    <h2 className="font-heading text-3xl md:text-4xl text-white drop-shadow-md mb-1 group-hover:-translate-y-1 transition-transform duration-500">
                      {title}
                    </h2>
                    <p className="text-white/85 text-sm tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {count} item{count === 1 ? "" : "s"} →
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
