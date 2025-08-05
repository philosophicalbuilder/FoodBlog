import { ChefHat, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const footerLinks = {
        recipes: [
            { name: 'Quick & Easy', href: '/recipes/quick-easy' },
            { name: 'Vegetarian', href: '/recipes/vegetarian' },
            { name: 'Gluten-Free', href: '/recipes/gluten-free' },
            { name: 'Desserts', href: '/recipes/desserts' },
            { name: 'Seasonal', href: '/recipes/seasonal' },
        ],
        categories: [
            { name: 'Italian', href: '/categories/italian' },
            { name: 'Asian', href: '/categories/asian' },
            { name: 'Mexican', href: '/categories/mexican' },
            { name: 'Mediterranean', href: '/categories/mediterranean' },
            { name: 'American', href: '/categories/american' },
        ],
        resources: [
            { name: 'Cooking Tips', href: '/tips' },
            { name: 'Kitchen Essentials', href: '/essentials' },
            { name: 'Meal Planning', href: '/meal-planning' },
            { name: 'Nutrition Guide', href: '/nutrition' },
            { name: 'Cooking Classes', href: '/classes' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Contact', href: '/contact' },
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/cookies' },
        ],
    }

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: Facebook },
        { name: 'Twitter', href: '#', icon: Twitter },
        { name: 'Instagram', href: '#', icon: Instagram },
        { name: 'YouTube', href: '#', icon: Youtube },
    ]

    return (
            <footer className="bg-dark-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ChefHat className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-serif font-semibold">
                Val's Delights
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Inspiring home cooks with delicious recipes, cooking tips, and culinary adventures. 
              Join our community of food lovers and discover the joy of cooking.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">hello@culinarydelights.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

                    {/* Recipes */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Recipes</h3>
                        <ul className="space-y-2">
                            {footerLinks.recipes.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest recipes and cooking tips delivered to your inbox
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} Val's Delights. All rights reserved.
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
} 