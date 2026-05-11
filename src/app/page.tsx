import Image from "next/image"
import Link from "next/link"
import { getProducts } from "../lib/data"
import ProductCard from "../lib/components/ProductCard"

export default function Home() {
  const products = getProducts()
  // Pick a few featured products. Just take the first 4 for now.
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* We use a fallback image or the first product image if available for the hero background */}
          <Image
            src={products[0]?.images[0] || "/placeholder.jpg"}
            alt="Beautiful Floral Arrangement"
            fill
            unoptimized
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-brand-text/30" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-12">
          <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 drop-shadow-md">
            Capturing Magic Through Flowers
          </h1>
          <p className="text-lg md:text-xl text-white/95 font-light mb-10 drop-shadow">
            Premium, handcrafted arrangements for every occasion in Brooklyn, NY.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/collections/flowers" 
              className="px-8 py-4 bg-white text-brand-text font-medium rounded-full hover:bg-brand-peach hover:text-brand-text transition-colors shadow-lg"
            >
              Shop Fresh Flowers
            </Link>
            <Link 
              href="/collections/plants" 
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            >
              View Plants
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl text-brand-text mb-4">Featured Arrangements</h2>
          <p className="text-brand-olive max-w-2xl mx-auto">
            Our most loved seasonal creations, designed to bring joy and beauty into your space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/collections"
            className="inline-block border-b border-brand-pink text-brand-pink pb-1 hover:text-brand-text hover:border-brand-text transition-colors"
          >
            View All Collections &rarr;
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-brand-peach/10 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
               <Image
                  src={products[1]?.images[0] || "/placeholder.jpg"}
                  alt="Floral workshop"
                  fill
                  unoptimized
                  className="object-cover"
                />
            </div>
            <div>
              <h2 className="font-heading text-4xl text-brand-text mb-6">About Juliette Floral Design</h2>
              <p className="text-brand-olive text-lg leading-relaxed mb-8">
                We believe in the power of flowers to transform spaces and elevate moods. 
                Our boutique in Brooklyn curates the freshest seasonal blooms, designing each piece with passion and an eye for elegance. 
                Whether you need a quick gift or a grand event arrangement, we bring your vision to life.
              </p>
              <Link 
                href="/about"
                className="px-8 py-4 bg-brand-text text-white font-medium rounded-full hover:bg-brand-pink transition-colors inline-block"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
