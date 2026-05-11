import Image from "next/image"
import Link from "next/link"
import { getProducts } from "../lib/data"
import ProductCard from "../lib/components/ProductCard"
import Reveal from "../lib/components/Reveal"

export default function Home() {
  const products = getProducts()
  const featuredProducts = products.slice(0, 4)
  const heroImage = "/media/hero-about.jpg"
  const aboutImage = products[1]?.images[0] || "/media/hero-about.jpg"

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[620px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={heroImage}
              alt="Beautiful floral arrangement"
              fill
              unoptimized
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-text/20 via-brand-text/30 to-brand-text/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto mt-8">
          <p className="animate-fade-up text-white/85 tracking-[0.35em] text-xs sm:text-sm uppercase mb-6">
            Brooklyn, New York
          </p>
          <h1 className="animate-fade-up delay-100 font-heading text-5xl md:text-7xl text-white mb-6 drop-shadow-md leading-tight">
            Capturing Magic <br className="hidden sm:block" />
            <span className="italic text-brand-peach">Through Flowers</span>
          </h1>
          <p className="animate-fade-up delay-200 text-lg md:text-xl text-white/95 font-light mb-10 drop-shadow max-w-xl mx-auto">
            Premium, handcrafted arrangements for every occasion — designed with passion in Brooklyn.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/collections/flowers"
              className="px-8 py-4 bg-white text-brand-text font-medium rounded-full hover:bg-brand-peach hover:-translate-y-0.5 hover:shadow-2xl shadow-lg transition-all duration-300"
            >
              Shop Fresh Flowers
            </Link>
            <Link
              href="/collections/plants"
              className="px-8 py-4 bg-transparent border border-white/80 backdrop-blur-sm text-white font-medium rounded-full hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Plants
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
          <div className="w-[1px] h-10 bg-white/70 mx-auto mb-2" />
          <span className="text-white/80 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <Reveal className="text-center mb-16">
          <p className="text-brand-orange tracking-[0.3em] text-xs uppercase mb-4">Seasonal Picks</p>
          <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-4">Featured Arrangements</h2>
          <div className="w-16 h-[2px] bg-brand-peach mx-auto mb-6" />
          <p className="text-brand-olive max-w-2xl mx-auto">
            Our most loved seasonal creations, designed to bring joy and beauty into your space.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.id} delay={i * 100}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <Link
            href="/collections"
            className="link-underline inline-block text-brand-pink hover:text-brand-text transition-colors font-medium"
          >
            View All Collections &rarr;
          </Link>
        </Reveal>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-br from-brand-peach/20 via-brand-peach/10 to-transparent py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal className="relative">
              <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src={aboutImage}
                  alt="Floral workshop"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
              </div>
              {/* Decorative accent */}
              <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-brand-orange/20 blur-2xl" />
              <div className="hidden md:block absolute -top-6 -left-6 w-24 h-24 rounded-full bg-brand-pink/20 blur-2xl" />
            </Reveal>
            <Reveal delay={150}>
              <p className="text-brand-orange tracking-[0.3em] text-xs uppercase mb-4">Our Story</p>
              <h2 className="font-heading text-4xl md:text-5xl text-brand-text mb-6 leading-tight">
                About Juliette Floral Design
              </h2>
              <p className="text-brand-olive text-lg leading-relaxed mb-8">
                We believe in the power of flowers to transform spaces and elevate moods.
                Our boutique in Brooklyn curates the freshest seasonal blooms, designing each piece with passion and an eye for elegance.
                Whether you need a quick gift or a grand event arrangement, we bring your vision to life.
              </p>
              <Link
                href="/about"
                className="px-8 py-4 bg-brand-text text-white font-medium rounded-full hover:bg-brand-pink hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 inline-block"
              >
                Learn More
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-white py-16 px-4 sm:px-6 border-t border-brand-peach/40">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          {[
            { title: "Locally Crafted", body: "Designed by hand in our Brooklyn boutique." },
            { title: "Freshest Blooms", body: "Sourced weekly for vibrant, long-lasting beauty." },
            { title: "Same-Day Pickup", body: "Most arrangements ready within 24 hours." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <h3 className="font-heading text-xl text-brand-text mb-3">{item.title}</h3>
              <div className="w-8 h-[2px] bg-brand-orange/60 mx-auto mb-3" />
              <p className="text-brand-olive text-sm leading-relaxed">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
