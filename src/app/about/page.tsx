import Image from "next/image"
import Link from "next/link"
import Reveal from "../../lib/components/Reveal"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero band */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 animate-ken-burns">
          <Image
            src="/media/hero-about.jpg"
            alt="Juliette Floral Design"
            fill
            unoptimized
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-text/30 via-brand-text/40 to-brand-text/60" />
        <div className="relative z-10 text-center px-4">
          <p className="animate-fade-up text-white/85 tracking-[0.35em] text-xs uppercase mb-4">Since Day One</p>
          <h1 className="animate-fade-up delay-100 font-heading text-5xl md:text-6xl text-white drop-shadow-md">Our Story</h1>
          <div className="animate-fade-up delay-200 w-16 h-[2px] bg-brand-peach mx-auto mt-6" />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/media/hero-about.jpg"
                alt="Juliette Floral Design boutique"
                fill
                unoptimized
                className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-6 text-brand-olive text-lg leading-relaxed">
            <p>
              Welcome to Juliette Floral Design. We believe that every occasion deserves to be celebrated with beauty and grace. Our passionate team of designers works tirelessly to source the freshest, most vibrant blooms to craft arrangements that speak from the heart.
            </p>
            <p>
              Located in the heart of Brooklyn, our boutique is a haven for flower lovers. From elegant weddings to intimate gatherings, or simply a gesture to brighten someone&apos;s day, we tailor our creations to your unique vision.
            </p>
            <p>
              We pride ourselves on our meticulous attention to detail and our commitment to sustainable floristry practices. Thank you for choosing us to be a part of your most cherished moments.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-brand-text text-white font-medium rounded-full hover:bg-brand-pink hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
