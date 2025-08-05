import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Val\'s Delights | Your Cooking Blog',
    description: 'Discover delicious recipes, cooking tips, and culinary adventures. From quick weeknight meals to gourmet dishes, find inspiration for your next kitchen adventure.',
    keywords: 'cooking, recipes, food blog, culinary, cooking tips, delicious meals',
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'Val\'s Delights | Your Cooking Blog',
        description: 'Discover delicious recipes, cooking tips, and culinary adventures.',
        type: 'website',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
                  <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 to-dark-800">
          {children}
        </div>
      </body>
        </html>
    )
} 