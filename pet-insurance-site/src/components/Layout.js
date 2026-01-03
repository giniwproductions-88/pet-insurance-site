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
        <meta name="impact-site-verification" value="c530e8e9-a2c3-44db-8a7d-4f885c5670a6" />
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
              <Link href="/popular-breeds" className="text-gray-600 hover:text-gray-900 font-medium">
                Top 10 Dogs
              </Link>
              <Link href="/breeds" className="text-gray-600 hover:text-gray-900 font-medium">
                All Dogs
              </Link>
              <Link href="/cats" className="text-gray-600 hover:text-gray-900 font-medium">
                Cats
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
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {/* Brand */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  🐾 PetInsureCompare
                </h3>
                <p className="text-sm leading-relaxed">
                  Breed-specific pet insurance recommendations you can trust.
                </p>
              </div>

              {/* Dog Breeds */}
              <div>
                <h4 className="text-white font-semibold mb-4">Popular Dogs</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/popular-breeds" className="hover:text-white">Top 10 Breeds →</Link></li>
                  <li><Link href="/breeds/french-bulldog" className="hover:text-white">French Bulldog</Link></li>
                  <li><Link href="/breeds/golden-retriever" className="hover:text-white">Golden Retriever</Link></li>
                  <li><Link href="/breeds/labrador-retriever" className="hover:text-white">Labrador Retriever</Link></li>
                  <li><Link href="/breeds" className="hover:text-white">All 51 Breeds →</Link></li>
                </ul>
              </div>

              {/* Cat Breeds */}
              <div>
                <h4 className="text-white font-semibold mb-4">Popular Cats</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/cats/persian" className="hover:text-white">Persian</Link></li>
                  <li><Link href="/cats/maine-coon" className="hover:text-white">Maine Coon</Link></li>
                  <li><Link href="/cats/bengal" className="hover:text-white">Bengal</Link></li>
                  <li><Link href="/cats/ragdoll" className="hover:text-white">Ragdoll</Link></li>
                </ul>
              </div>

              {/* Guides */}
              <div>
                <h4 className="text-white font-semibold mb-4">Guides</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/guides/is-pet-insurance-worth-it" className="hover:text-white">Is Pet Insurance Worth It?</Link></li>
                  <li><Link href="/guides/how-pet-insurance-works" className="hover:text-white">How Pet Insurance Works</Link></li>
                  <li><Link href="/reviews" className="hover:text-white">Provider Reviews</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/editorial-policy" className="hover:text-white">Editorial Policy</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 mt-10 pt-8 text-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p>© {new Date().getFullYear()} PetInsureCompare. All rights reserved.</p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                  <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                  <Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
