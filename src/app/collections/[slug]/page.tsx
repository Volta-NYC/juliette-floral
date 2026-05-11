import { getProductsByCategory } from "../../../lib/data"
import ProductCard from "../../../lib/components/ProductCard"
import Reveal from "../../../lib/components/Reveal"

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const products = getProductsByCategory(slug)
  const title = slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-up">
        <p className="text-brand-orange tracking-[0.3em] text-xs uppercase mb-4">Collection</p>
        <h1 className="font-heading text-5xl md:text-6xl text-brand-text mb-4">{title}</h1>
        <div className="w-16 h-[2px] bg-brand-peach mx-auto mb-6" />
        <p className="text-brand-olive max-w-2xl mx-auto">
          Browse our beautiful selection of {title.toLowerCase()}.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 8) * 80}>
              <ProductCard product={product} />
            </Reveal>
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
