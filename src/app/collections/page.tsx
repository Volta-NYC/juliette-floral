import Link from "next/link"
import fs from "fs"
import path from "path"
import Image from "next/image"
import { getProductsByCategory } from "../../lib/data"

export default function CollectionsIndexPage() {
  const collectionsFile = path.join(process.cwd(), "data", "collections.json")
  const collections = fs.existsSync(collectionsFile) ? JSON.parse(fs.readFileSync(collectionsFile, "utf-8")) : []

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl text-brand-text mb-4">All Collections</h1>
        <p className="text-brand-olive max-w-2xl mx-auto">
          Explore our categories to find exactly what you&apos;re looking for.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((col: string) => {
          const title = col.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          const products = getProductsByCategory(col)
          const img = products[0]?.images[0] || "/placeholder.jpg"

          return (
            <Link key={col} href={`/collections/${col}`} className="group block">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-peach/20 mb-4">
                <Image
                  src={img}
                  alt={title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <h2 className="font-heading text-3xl text-white drop-shadow-md">{title}</h2>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
