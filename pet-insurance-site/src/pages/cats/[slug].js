import Layout from '@/components/Layout'
import Link from 'next/link'
import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export async function getStaticPaths() {
  const breedsDirectory = path.join(process.cwd(), 'content/breeds/cats')
  const filenames = fs.readdirSync(breedsDirectory)
  
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.json', ''),
    },
  }))
  
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/breeds/cats', `${params.slug}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const breed = JSON.parse(fileContents)
  
  return {
    props: {
      breed,
    },
  }
}

export default function CatBreedPage({ breed }) {
  const currentYear = new Date().getFullYear()
  
  return (
    <Layout
      title={`Best Pet Insurance for ${breed.name} Cats (${currentYear})`}
      description={breed.metaDescription}
    >
      {/* FAQ Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": breed.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Head>

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-brand-600 font-medium mb-2">
              <Link href="/cats" className="hover:underline">Cat Breeds</Link> / {breed.name}
            </p>
            <h1 className="text-gray-900 mb-6">
              Best Pet Insurance for {breed.name} Cats ({currentYear})
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {breed.intro}
            </p>
            <a href="#providers" className="btn-primary">
              See Top Picks →
            </a>
          </div>
        </div>
      </section>

      {/* Quick Picks */}
      <section className="py-12 border-b">
        <div className="container-wide">
          <div className="card-highlight">
            <h2 className="text-xl font-semibold mb-4">🏆 Our Top Picks for {breed.name} Cats</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {breed.topPicks.map((pick, index) => (
                <div key={pick.name} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{pick.name}</p>
                    <p className="text-sm text-gray-600">{pick.highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Insurance */}
      <section className="py-12">
        <div className="container-wide">
          <h2 className="mb-4">Why {breed.name} Cats Need Insurance</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">
            {breed.whyInsurance}
          </p>
          
          <h3 className="text-lg font-semibold mb-4">Common Health Issues & Costs</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3 pr-4 font-semibold">Condition</th>
                  <th className="py-3 pr-4 font-semibold">What It Is</th>
                  <th className="py-3 font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {breed.healthIssues.map((issue) => (
                  <tr key={issue.name} className="border-b">
                    <td className="py-3 pr-4 font-medium">{issue.name}</td>
                    <td className="py-3 pr-4 text-gray-600">{issue.description}</td>
                    <td className="py-3 text-forest-600 font-medium">{issue.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="mb-8">What to Look For in {breed.name} Insurance</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-forest-600">✓ Must-Have Coverage</h3>
              <ul className="space-y-3">
                {breed.mustHave.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-forest-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-4 text-red-600">✗ Red Flags to Avoid</h3>
              <ul className="space-y-3">
                {breed.redFlags.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-gray-700">
                    <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Reviews */}
      <section id="providers" className="py-12">
        <div className="container-wide">
          <h2 className="mb-8">Best Insurance Providers for {breed.name} Cats</h2>
          
          <div className="space-y-8">
            {breed.providers.map((provider, index) => (
              <div key={provider.name} className={index === 0 ? 'card-highlight' : 'card'}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    {index === 0 && (
                      <span className="inline-block px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full mb-2">
                        Top Pick
                      </span>
                    )}
                    <h3 className="text-xl font-semibold">{provider.name}</h3>
                    <p className="text-brand-600 font-medium">{provider.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">{provider.cost}</p>
                    <p className="text-sm text-gray-500">estimated monthly</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{provider.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-forest-600 mb-2">Pros</h4>
                    <ul className="space-y-1">
                      {provider.pros.map((pro) => (
                        <li key={pro} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-forest-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                    <ul className="space-y-1">
                      {provider.cons.map((con) => (
                        <li key={con} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a
                  href={provider.affiliateLink}
                  className="btn-primary inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Quote from {provider.name} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="mb-4">How Much Does {breed.name} Insurance Cost?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl">{breed.costIntro}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {breed.costByAge.map((tier) => (
              <div key={tier.age} className="card text-center">
                <p className="text-sm text-gray-500 mb-2">{tier.age}</p>
                <p className="text-2xl font-bold text-gray-900">{tier.range}</p>
              </div>
            ))}
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            * Estimates based on average rates. Actual cost depends on your location, chosen deductible, reimbursement level, and coverage limits.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container-wide">
          <h2 className="mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 max-w-3xl">
            {breed.faqs.map((faq) => (
              <div key={faq.question} className="border-b pb-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Protect Your {breed.name}</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            {breed.finalCta}
          </p>
          <a href="#providers" className="btn-primary">
            Compare Top Providers →
          </a>
        </div>
      </section>

      {/* Related Breeds */}
      {breed.relatedBreeds && breed.relatedBreeds.length > 0 && (
        <section className="py-12">
          <div className="container-wide">
            <h2 className="mb-6">Related Cat Breeds</h2>
            <div className="flex flex-wrap gap-4">
              {breed.relatedBreeds.map((related) => (
                <Link
                  key={related.slug}
                  href={`/cats/${related.slug}`}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  {related.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  )
}
