export const dynamic = 'force-dynamic';

import { Metadata } from 'next';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | BooksGlance',
  description: 'Get in touch with BooksGlance. We\'re here to help with your book orders and questions.',
  keywords: 'contact, support, customer service',
};

export default function ContactPage() {
  const contactInfo = [
    { icon: PhoneIcon, label: 'Phone', value: '+92 (XXX) XXX-XXXX', color: 'from-gold-500 to-amber-600' },
    { icon: MailIcon, label: 'Email', value: 'support@booksglance.pk', color: 'from-amber-500 to-gold-600' },
    { icon: MapPinIcon, label: 'Location', value: 'Karachi, Pakistan', color: 'from-gold-600 to-amber-500' },
    { icon: ClockIcon, label: 'Hours', value: 'Mon - Fri: 10 AM - 6 PM', color: 'from-gold-500 to-gold-700' },
  ];

  return (
    <div className="min-h-screen py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-gold-500/15 mb-8">
            <MailIcon className="w-5 h-5 text-gold-500" />
            <span className="text-sm font-semibold text-ivory-200">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gold-300 via-gold-500 to-amber-400 bg-clip-text text-transparent font-serif">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-ivory-400 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team anytime.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.label}
                  className="glass rounded-2xl p-6 border border-gold-500/10 hover-3d group text-center"
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-warm group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-noir-950" />
                  </div>
                  <h3 className="text-base font-bold text-ivory-100 mb-1">
                    {info.label}
                  </h3>
                  <p className="text-sm text-ivory-400">
                    {info.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="glass rounded-3xl p-8 sm:p-12 border border-gold-500/15">
            <h2 className="text-2xl font-bold text-ivory-100 mb-8 font-serif">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-ivory-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-5 py-3.5 rounded-2xl glass border border-gold-500/15 text-ivory-100 placeholder-ivory-600 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ivory-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-5 py-3.5 rounded-2xl glass border border-gold-500/15 text-ivory-100 placeholder-ivory-600 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-ivory-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-5 py-3.5 rounded-2xl glass border border-gold-500/15 text-ivory-100 placeholder-ivory-600 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-ivory-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-5 py-3.5 rounded-2xl glass border border-gold-500/15 text-ivory-100 placeholder-ivory-600 focus:outline-none focus:ring-2 focus:ring-gold-500/40 transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-noir-950 font-bold text-lg shadow-gold hover:shadow-glow hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shimmer-sweep relative overflow-hidden"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
