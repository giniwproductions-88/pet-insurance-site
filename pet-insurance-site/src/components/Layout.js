import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title, description }) {
  const siteTitle = 'PetInsureCompare'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const metaDescription = description || 'Compare pet insurance plans and find the best coverage for your furry friend. Breed-specific recommendations, cost breakdowns, and honest reviews.'

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="7o8LfHg4BFJJBSnzR9JmvskSn9JDLo3sDGiMVsr5BvE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
          <div className="container-wide py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-display font-bold text-gray-900 hover:text-brand-600 transition-colors">
              🐾 PetInsureCompare
            </Link>
            
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/breeds" className="text-gray-600 hover:text-gray-900 font-medium">
                By Breed
              </Link>
              <Link href="/reviews" className="text-gray-600 hover:text-gray-900 font-medium">
                Reviews
              </Link>
              <Link href="/guides" className="text-gray-600 hover:text-gray-900 font-medium">
                Guides
              </Link>
              <Link href="/compare" className="btn-primary text-sm">
                Compare Quotes
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 mt-20">
          <div className="container-wide py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  🐾 PetInsureCompare
                </h3>
                <p className="text-sm leading-relaxed max-w-md">
                  We help pet owners find the right insurance coverage. Our breed-specific guides break down what matters most for your furry family member.
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="text-white font-semibold mb-4">Popular Breeds</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/breeds/french-bulldog" className="hover:text-white">French Bulldog</Link></li>
                  <li><Link href="/breeds/golden-retriever" className="hover:text-white">Golden Retriever</Link></li>
                  <li><Link href="/breeds/german-shepherd" className="hover:text-white">German Shepherd</Link></li>
                  <li><Link href="/breeds/labrador-retriever" className="hover:text-white">Labrador Retriever</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/guides/is-pet-insurance-worth-it" className="hover:text-white">Is Pet Insurance Worth It?</Link></li>
                  <li><Link href="/guides/how-pet-insurance-works" className="hover:text-white">How Pet Insurance Works</Link></li>
                  <li><Link href="/reviews" className="hover:text-white">Provider Reviews</Link></li>
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-8 text-sm text-center">
              <p>© {new Date().getFullYear()} PetInsureCompare. All rights reserved.</p>
              <p className="mt-2 text-xs text-gray-500">
                Affiliate Disclosure: We may earn a commission when you purchase through links on our site. This doesn't affect our recommendations.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
