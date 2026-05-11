import ContactForm from "../../lib/components/ContactForm"
import Reveal from "../../lib/components/Reveal"

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 animate-fade-up">
        <p className="text-brand-orange tracking-[0.3em] text-xs uppercase mb-4">Say Hello</p>
        <h1 className="font-heading text-5xl md:text-6xl text-brand-text mb-4">Contact Us</h1>
        <div className="w-16 h-[2px] bg-brand-peach mx-auto mb-6" />
        <p className="text-brand-olive text-lg">We would love to hear from you.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <Reveal className="space-y-10">
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
              <p>
                <strong className="text-brand-text">Email:</strong>{" "}
                <a href="mailto:juliettefloraldesign1@gmail.com" className="link-underline">
                  juliettefloraldesign1@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-brand-text">Phone:</strong>{" "}
                <a href="tel:3479160013" className="link-underline">347-916-0013</a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl text-brand-text mb-4">Hours</h2>
            <div className="space-y-2 text-brand-olive text-lg">
              <p>Open for pickups and deliveries.</p>
              <p>Usually ready in 24 hours.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="bg-gradient-to-br from-brand-peach/20 to-brand-peach/5 p-8 rounded-3xl border border-brand-peach/40 shadow-xl">
          <h2 className="font-heading text-3xl text-brand-text mb-6">Send a Message</h2>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
