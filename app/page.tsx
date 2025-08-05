import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedRecipes from './components/FeaturedRecipes'
import Categories from './components/Categories'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function Home() {
    return (
        <main className="min-h-screen">
            <Header />
            <Hero />
            <FeaturedRecipes />
            <Categories />
            <Newsletter />
            <Footer />
        </main>
    )
} 