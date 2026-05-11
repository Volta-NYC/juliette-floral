import { getProductBySlug } from "../../../lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import ProductForm from "../../../lib/components/ProductForm"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const defaultImage = product.images[0] || "/placeholder.jpg"

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-brand-peach/10">
            <Image
              src={defaultImage}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
          {/* Thumbnails if more than 1 image */}
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <div key={i} className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-brand-olive/20 cursor-pointer hover:border-brand-text">
                  <Image src={img} alt={`${product.name} thumbnail`} fill unoptimized className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col pt-4">
          <h1 className="font-heading text-4xl text-brand-text mb-4">{product.name}</h1>
          <ProductForm product={product} />
        </div>
      </div>
    </div>
  )
}
