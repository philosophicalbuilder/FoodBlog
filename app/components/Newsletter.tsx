'use client'

import { useState } from 'react'
import { Mail, Send, ChefHat } from 'lucide-react'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the email to your backend
        console.log('Subscribing email:', email)
        setIsSubscribed(true)
        setEmail('')

        // Reset the success message after 3 seconds
        setTimeout(() => {
            setIsSubscribed(false)
        }, 3000)
    }

      return (
    <section className="py-16 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex p-4 bg-primary-500/20 rounded-full mb-6">
          <ChefHat className="h-8 w-8 text-primary-400" />
        </div>

        {/* Content */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          Stay Inspired in the Kitchen
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get weekly recipe inspiration, cooking tips, and exclusive content delivered straight to your inbox. 
          Join thousands of home cooks who are already cooking better meals.
        </p>

                        {/* Newsletter Form */}
        <div className="max-w-md mx-auto">
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-dark-700 text-white placeholder-gray-400 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Subscribe
                <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          ) : (
            <div className="bg-dark-700/50 backdrop-blur-sm rounded-lg p-6 border border-dark-600">
              <div className="flex items-center justify-center space-x-2 text-white">
                <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-medium">Successfully subscribed!</span>
              </div>
              <p className="text-gray-300 mt-2">
                Welcome to our culinary community! Check your inbox for your first recipe.
              </p>
            </div>
          )}
        </div>

                        {/* Benefits */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Weekly Inspiration</h3>
            <p className="text-gray-300 text-sm">
              Fresh recipes and cooking ideas every week
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Cooking Tips</h3>
            <p className="text-gray-300 text-sm">
              Expert techniques and kitchen hacks
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-2">Exclusive Content</h3>
            <p className="text-gray-300 text-sm">
              Special recipes and behind-the-scenes content
            </p>
          </div>
        </div>

        {/* Privacy Note */}
        <p className="text-gray-400 text-sm mt-8">
          We respect your privacy. Unsubscribe at any time.
        </p>
            </div>
        </section>
    )
} 