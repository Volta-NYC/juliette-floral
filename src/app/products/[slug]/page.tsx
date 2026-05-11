import { getProductBySlug, getProductsByCategory } from "../../../lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"
import ProductForm from "../../../lib/components/ProductForm"
import ProductGallery from "../../../lib/components/ProductGallery"
import ProductCard from "../../../lib/components/ProductCard"
import Reveal from "../../../lib/components/Reveal"

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const related = getProductsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4)

  const categoryTitle = product.category
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm text-brand-olive mb-8 animate-fade-in">
        <Link href="/" className="hover:text-brand-text transition-colors">Home</Link>
        <span className="mx-2 text-brand-olive/50">/</span>
        <Link href={`/collections/${product.category}`} className="hover:text-brand-text transition-colors">
          {categoryTitle}
        </Link>
        <span className="mx-2 text-brand-olive/50">/</span>
        <span className="text-brand-text">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        <div className="animate-fade-up">
          <ProductGallery images={product.images} name={product.name} />
        </div>

        <div className="flex flex-col pt-4 animate-fade-up delay-100">
          <p className="text-brand-orange tracking-[0.25em] text-xs uppercase mb-2">{categoryTitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">{product.name}</h1>
          <ProductForm product={product} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28">
          <Reveal className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-brand-text mb-3">You May Also Love</h2>
            <div className="w-12 h-[2px] bg-brand-peach mx-auto" />
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
