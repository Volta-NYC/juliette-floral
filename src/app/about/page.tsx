import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl text-brand-text mb-6">Our Story</h1>
        <div className="w-24 h-1 bg-brand-peach mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
           <Image
              src="/placeholder.jpg" // Note: in a real deploy we'd use a specific team image if extracted
              alt="Juliette Floral Design Team"
              fill
              unoptimized
              className="object-cover"
           />
        </div>
        <div className="space-y-6 text-brand-olive text-lg leading-relaxed">
          <p>
            Welcome to Juliette Floral Design. We believe that every occasion deserves to be celebrated with beauty and grace. Our passionate team of designers works tirelessly to source the freshest, most vibrant blooms to craft arrangements that speak from the heart.
          </p>
          <p>
            Located in the heart of Brooklyn, our boutique is a haven for flower lovers. From elegant weddings to intimate gatherings, or simply a gesture to brighten someone's day, we tailor our creations to your unique vision.
          </p>
          <p>
            We pride ourselves on our meticulous attention to detail and our commitment to sustainable floristry practices. Thank you for choosing us to be a part of your most cherished moments.
          </p>
        </div>
      </div>
    </div>
  )
}
