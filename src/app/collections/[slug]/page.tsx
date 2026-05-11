import { getProductsByCategory } from "../../../lib/data"
import ProductCard from "../../../lib/components/ProductCard"
import { notFound } from "next/navigation"

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const products = getProductsByCategory(slug)

  if (!products || products.length === 0) {
    // If no products match the exact category, we could try to find all products if slug === 'all'
    if (slug !== "all") {
       // but for now let's just show an empty state or not found
    }
  }

  // Format title nicely
  const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl text-brand-text mb-4">{title}</h1>
        <p className="text-brand-olive max-w-2xl mx-auto">
          Browse our beautiful selection of {title.toLowerCase()}.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-brand-olive">
          <p>No products found in this collection.</p>
        </div>
      )}
    </div>
  )
}
