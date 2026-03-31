"use client";
import React, { useState } from 'react';
import { MailIcon, SendIcon, CheckIcon, SparklesIcon } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-terracotta-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-clay-400/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative glass rounded-3xl border border-terracotta-200/30 shadow-warm backdrop-blur-xl p-12 md:p-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-terracotta-200/30 mb-8 backdrop-blur-xl">
              <div>
                <MailIcon className="w-5 h-5 text-terracotta-600" />
              </div>
              <span className="text-sm font-semibold text-clay-800 dark:text-cream-200">Stay Updated</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-clay-800 via-terracotta-700 to-clay-600 dark:from-cream-200 dark:via-cream-100 dark:to-sand-200 bg-clip-text text-transparent">
              Never Miss a Story
            </h2>

            <p className="text-xl text-clay-700 dark:text-cream-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest releases, exclusive deals, and reading recommendations delivered straight to your inbox.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="flex-grow relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-5 rounded-2xl glass border border-terracotta-200/30 text-clay-800 dark:text-cream-200 placeholder-clay-500 dark:placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-terracotta-400 transition-all duration-300 backdrop-blur-xl text-lg"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <MailIcon className="w-6 h-6 text-clay-500 dark:text-cream-400" />
                </div>
              </div>

              <button
                type="submit"
                className={`px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-glow backdrop-blur-xl flex items-center justify-center gap-3 hover:scale-105 hover:-translate-y-0.5 ${
                  isSubscribed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white' 
                    : 'bg-gradient-to-r from-terracotta-500 to-clay-500 hover:from-terracotta-600 hover:to-clay-600 text-cream-50'
                }`}
              >
                {isSubscribed ? (
                  <>
                    <CheckIcon className="w-6 h-6" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <SendIcon className="w-6 h-6" />
                    Subscribe
                  </>
                )}
              </button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {[
                { icon: SparklesIcon, title: "Weekly Recommendations", desc: "Handpicked books just for you" },
                { icon: MailIcon, title: "Exclusive Deals", desc: "Special offers and discounts" },
                { icon: CheckIcon, title: "No Spam", desc: "Unsubscribe anytime" }
              ].map((feature) => (
                <div key={feature.title} className="text-center p-6 rounded-2xl glass border border-terracotta-200/20 backdrop-blur-xl hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-terracotta-400 to-clay-400 flex items-center justify-center hover:rotate-360 transition-transform duration-600">
                    <feature.icon className="w-8 h-8 text-cream-50" />
                  </div>
                  <h3 className="text-xl font-bold text-clay-800 dark:text-cream-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-clay-600 dark:text-cream-300">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
