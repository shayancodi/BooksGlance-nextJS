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
    { icon: PhoneIcon, label: 'Phone', value: '+92 (XXX) XXX-XXXX', color: 'text-terracotta-600 dark:text-terracotta-400' },
    { icon: MailIcon, label: 'Email', value: 'support@booksglance.pk', color: 'text-sand-600 dark:text-sand-400' },
    { icon: MapPinIcon, label: 'Location', value: 'Karachi, Pakistan', color: 'text-clay-600 dark:text-clay-400' },
    { icon: ClockIcon, label: 'Hours', value: 'Mon - Fri: 10 AM - 6 PM', color: 'text-clay-600 dark:text-clay-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 via-sand-50 to-clay-50 dark:from-clay-900 dark:via-terracotta-900 dark:to-sand-900 py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-clay-700 via-terracotta-700 to-clay-500 dark:from-cream-200 dark:via-cream-100 dark:to-sand-300 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-clay-600 dark:text-cream-300 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Get in touch with our team anytime.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={info.label}
                  className="bg-white/50 dark:bg-clay-800/50 backdrop-blur-sm rounded-xl p-6 border border-terracotta-200/30 dark:border-terracotta-700/50"
                >
                  <IconComponent className={`w-8 h-8 mb-3 ${info.color}`} />
                  <h3 className="text-lg font-bold text-clay-800 dark:text-cream-100 mb-2">
                    {info.label}
                  </h3>
                  <p className="text-clay-700 dark:text-cream-200">
                    {info.value}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-white/50 dark:bg-clay-800/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-terracotta-200/30 dark:border-terracotta-700/50">
            <h2 className="text-2xl font-bold text-clay-800 dark:text-cream-100 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-clay-700 dark:text-cream-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-terracotta-200/50 dark:border-terracotta-700/50 bg-white dark:bg-clay-700 text-clay-800 dark:text-cream-100 placeholder-clay-400 dark:placeholder-clay-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-clay-700 dark:text-cream-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-terracotta-200/50 dark:border-terracotta-700/50 bg-white dark:bg-clay-700 text-clay-800 dark:text-cream-100 placeholder-clay-400 dark:placeholder-clay-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-clay-700 dark:text-cream-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-terracotta-200/50 dark:border-terracotta-700/50 bg-white dark:bg-clay-700 text-clay-800 dark:text-cream-100 placeholder-clay-400 dark:placeholder-clay-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-clay-700 dark:text-cream-200 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-terracotta-200/50 dark:border-terracotta-700/50 bg-white dark:bg-clay-700 text-clay-800 dark:text-cream-100 placeholder-clay-400 dark:placeholder-clay-500 focus:outline-none focus:ring-2 focus:ring-terracotta-500 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-terracotta-600 to-clay-600 dark:from-terracotta-500 dark:to-clay-500 text-white font-semibold hover:shadow-lg transition-all duration-300"
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
