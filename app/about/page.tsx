import { ChefHat, Calendar, TrendingUp, Award, Users, BookOpen, Star, ArrowRight } from 'lucide-react'

export default function AboutPage() {
    const milestones = [
        {
            date: 'January 2024',
            title: 'The Beginning',
            description: 'Started Val\'s Delights as a personal cooking journal. First recipe posted: Classic Margherita Pizza.',
            icon: ChefHat,
            achievement: 'First Post Published'
        },
        {
            date: 'March 2024',
            title: 'Growing Community',
            description: 'Reached 1,000 followers! The community started sharing their own cooking adventures.',
            icon: Users,
            achievement: '1K Followers'
        },
        {
            date: 'May 2024',
            title: 'Local Recognition',
            description: 'Featured in "San Francisco Food & Wine" magazine. Interview about home cooking trends.',
            icon: Award,
            achievement: 'Magazine Feature'
        },
        {
            date: 'July 2024',
            title: 'Recipe Collection',
            description: 'Published 100+ recipes across 15 categories. From quick weeknight meals to gourmet dishes.',
            icon: BookOpen,
            achievement: '100 Recipes'
        },
        {
            date: 'September 2024',
            title: 'National Spotlight',
            description: 'Appeared on "Cooking Today" morning show. Demonstrated signature pasta carbonara recipe.',
            icon: TrendingUp,
            achievement: 'TV Appearance'
        },
        {
            date: 'November 2024',
            title: 'Cookbook Deal',
            description: 'Signed with a major publisher for "Val\'s Delights: From Kitchen to Table" cookbook.',
            icon: Star,
            achievement: 'Cookbook Contract'
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="flex justify-center mb-8">
                            <ChefHat className="h-16 w-16 text-primary-400" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                            About Val's Delights
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            From a tiny apartment kitchen to a beloved food community, discover the story behind
                            the recipes that bring families together around the table.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Me Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            Meet Val
                        </h2>
                        <div className="space-y-4 text-gray-300 leading-relaxed">
                            <p>
                                Hi there! I'm Valerie (Val to my friends), a self-taught home cook who believes that
                                great food has the power to create memories, bring people together, and make any day
                                feel special. My journey into the culinary world began in the most unexpected way.
                            </p>
                            <p>
                                In 2023, I was working as a software engineer in San Francisco, spending my days
                                writing code and my nights ordering takeout. That all changed when my grandmother
                                gifted me her well-worn recipe book and a simple challenge: "Cook one meal from
                                scratch every week."
                            </p>
                            <p>
                                What started as a weekly experiment quickly became an obsession. I discovered that
                                cooking wasn't just about following recipes—it was about patience, creativity, and
                                the joy of sharing something made with love. My tiny apartment kitchen became my
                                laboratory, and every weekend brought new culinary adventures.
                            </p>
                            <p>
                                Today, Val's Delights is more than just a food blog. It's a community of home cooks,
                                food lovers, and anyone who believes that the best conversations happen around a
                                well-set table. Whether you're a seasoned chef or just starting your cooking journey,
                                you'll find recipes that work, tips that help, and stories that inspire.
                            </p>
                        </div>
                    </div>
                    <div className="bg-dark-700 rounded-2xl p-8">
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">My Cooking Philosophy</h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300">Fresh, seasonal ingredients are the foundation of every great dish</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300">Cooking should be accessible, not intimidating</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300">Every mistake in the kitchen is a learning opportunity</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300">The best recipes are the ones that bring people together</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Journey Timeline */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        Our Journey Together
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        From humble beginnings to a thriving food community, here's how Val's Delights
                        has grown and evolved over the past year.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-dark-600"></div>

                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="relative flex items-start">
                                {/* Timeline dot */}
                                <div className="absolute left-6 w-4 h-4 bg-primary-400 rounded-full border-4 border-dark-800"></div>

                                <div className="ml-16 flex-1">
                                    <div className="bg-dark-700 rounded-xl p-6 hover:bg-dark-600 transition-colors duration-200">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center space-x-3">
                                                <milestone.icon className="h-6 w-6 text-primary-400" />
                                                <span className="text-primary-400 font-medium">{milestone.date}</span>
                                            </div>
                                            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {milestone.achievement}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-serif font-semibold text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-300 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* First Post Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-white mb-4">
                                The Post That Started It All
                            </h2>
                            <p className="text-gray-100 mb-6 leading-relaxed">
                                My very first blog post was about making the perfect Margherita pizza from scratch.
                                I was so nervous about sharing it that I almost didn't hit publish. But that simple
                                post about flour, tomatoes, and mozzarella connected with people in ways I never expected.
                            </p>
                            <div className="bg-white/10 rounded-lg p-4 mb-6">
                                <p className="text-white italic">
                                    "Sometimes the simplest recipes are the hardest to get right. This Margherita pizza
                                    taught me that cooking is about patience, practice, and a whole lot of love."
                                </p>
                            </div>
                            <button className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                                <span>Read the First Post</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6">
                            <h3 className="text-xl font-serif font-bold text-white mb-4">Classic Margherita Pizza</h3>
                            <div className="space-y-3 text-gray-100">
                                <div className="flex justify-between">
                                    <span>Prep Time:</span>
                                    <span>30 minutes</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Cook Time:</span>
                                    <span>15 minutes</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Servings:</span>
                                    <span>4 people</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Difficulty:</span>
                                    <span>Beginner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Recognition */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        In the News
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Val's Delights has been featured in various media outlets, sharing our passion
                        for home cooking and community building.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            outlet: "San Francisco Food & Wine",
                            title: "The Rise of Home Cooking in the Digital Age",
                            date: "May 2024",
                            excerpt: "How one software engineer turned food blogger is inspiring a new generation of home cooks."
                        },
                        {
                            outlet: "Cooking Today Show",
                            title: "From Code to Kitchen: Valerie Chen's Story",
                            date: "September 2024",
                            excerpt: "Live demonstration of signature pasta carbonara and the story behind Val's Delights."
                        },
                        {
                            outlet: "Food Network Magazine",
                            title: "10 Food Bloggers You Should Follow",
                            date: "October 2024",
                            excerpt: "Val's Delights makes the list for its authentic approach to home cooking."
                        }
                    ].map((article, index) => (
                        <div key={index} className="bg-dark-700 rounded-xl p-6 hover:bg-dark-600 transition-colors duration-200">
                            <div className="text-primary-400 font-medium mb-2">{article.outlet}</div>
                            <h3 className="text-lg font-serif font-semibold text-white mb-2">{article.title}</h3>
                            <p className="text-gray-300 text-sm mb-3">{article.excerpt}</p>
                            <div className="text-gray-400 text-sm">{article.date}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Whether you're here to find your next favorite recipe, share your cooking adventures,
                        or just enjoy the stories behind great food, you're welcome at Val's Delights.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                            Explore Recipes
                        </button>
                        <button className="border border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
} 