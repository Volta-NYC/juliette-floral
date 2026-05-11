import Link from "next/link"
import Image from "next/image"
import type { Product } from "../data"

export default function ProductCard({ product }: { product: Product }) {
  const defaultImage = product.images[0] || "/placeholder.jpg"
  const minPrice = product.variants && product.variants.length > 0 
    ? Math.min(...product.variants.map(v => v.price))
    : null

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-peach/20 mb-4">
        {/* We use standard img to easily handle local files from public, or Next Image if preferred. 
            Using standard img here for simplicity unless Next Image is required for performance, 
            but unoptimized=true prevents Next.js from throwing errors on missing images. */}
        <Image
          src={defaultImage}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="text-center px-2">
        <h3 className="font-heading text-xl text-brand-text mb-1 group-hover:text-brand-pink transition-colors">
          {product.name}
        </h3>
        {minPrice ? (
          <p className="text-brand-olive text-sm font-medium">From ${minPrice.toFixed(2)}</p>
        ) : (
          <p className="text-brand-olive text-sm italic">Price Unavailable</p>
        )}
      </div>
    </Link>
  )
}
