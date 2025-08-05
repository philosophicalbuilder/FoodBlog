import { ArrowRight, Clock, Users, Star } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                  {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 to-dark-800/60 z-10" />
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-primary-400">Val's Blog</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          From traditional family recipes to innovative culinary creations, 
          explore a world of flavors that will inspire your next kitchen adventure.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary-400" />
            <span className="text-lg">500+ Recipes</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary-400" />
            <span className="text-lg">10K+ Cooks</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-primary-400" />
            <span className="text-lg">4.9/5 Rating</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/recipes"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 group"
          >
            Explore Recipes
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-sm transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    )
} 