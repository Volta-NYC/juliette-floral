import ContactForm from "../../lib/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-heading text-5xl text-brand-text mb-6">Contact Us</h1>
        <p className="text-brand-olive text-lg">We would love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="space-y-10">
          <div>
            <h2 className="font-heading text-3xl text-brand-text mb-4">Visit Our Shop</h2>
            <div className="space-y-2 text-brand-olive text-lg">
              <p>170 5th Avenue</p>
              <p>Brooklyn, NY 11217</p>
            </div>
          </div>
          
          <div>
            <h2 className="font-heading text-3xl text-brand-text mb-4">Get in Touch</h2>
            <div className="space-y-2 text-brand-olive text-lg">
              <p><strong>Email:</strong> juliettefloraldesign1@gmail.com</p>
              <p><strong>Phone:</strong> 347-916-0013</p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-brand-text mb-4">Hours</h2>
            <div className="space-y-2 text-brand-olive text-lg">
              <p>Open for pickups and deliveries.</p>
              <p>Usually ready in 24 hours.</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-peach/10 p-8 rounded-3xl border border-brand-peach">
          <h2 className="font-heading text-3xl text-brand-text mb-6">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
