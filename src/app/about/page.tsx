export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-6">
      <h1 className="font-heading text-4xl text-brand-text">About Us</h1>
      <p className="text-brand-text/80 leading-relaxed">
        Juliette Floral Design is a Brooklyn-based floral studio dedicated to capturing magic through flowers.
        Every arrangement is handcrafted with care, creativity, and a deep love for botanicals.
      </p>
      <p className="text-brand-text/80 leading-relaxed">
        Whether you&apos;re celebrating love, honoring a loved one, or simply brightening someone&apos;s day,
        we bring your vision to life - one bloom at a time.
      </p>
      <div className="rounded-[18px] bg-brand-peach p-6 text-brand-text space-y-1">
        <p className="font-heading text-lg">Visit Us</p>
        <p className="text-sm">170 5th Ave, Brooklyn, NY 11217</p>
        <p className="text-sm">juliettefloraldesign1@gmail.com</p>
        <p className="text-sm">347-916-0013</p>
      </div>
    </div>
  )
}
