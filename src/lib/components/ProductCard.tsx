import Link from "next/link"
import Image from "next/image"
import type { Product } from "../data"

export default function ProductCard({ product }: { product: Product }) {
  const defaultImage = product.images[0] || "/placeholder.jpg"
  const hoverImage = product.images[1] || defaultImage
  const minPrice =
    product.variants && product.variants.length > 0
      ? Math.min(...product.variants.map((v) => v.price))
      : null

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-brand-peach/20 mb-4 shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <Image
          src={defaultImage}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-all duration-[800ms] ease-out group-hover:scale-110 group-hover:opacity-0"
        />
        <Image
          src={hoverImage}
          alt=""
          fill
          unoptimized
          className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/95 backdrop-blur-sm text-brand-text text-xs font-medium tracking-widest uppercase px-4 py-2 rounded-full shadow-md">
          View Details
        </span>
      </div>
      <div className="text-center px-2">
        <h3 className="font-heading text-xl text-brand-text mb-1 group-hover:text-brand-pink transition-colors duration-300">
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
