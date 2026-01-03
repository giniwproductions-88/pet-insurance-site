import Layout from '@/components/Layout'
import Link from 'next/link'

const popularDogs = [
  {
    name: 'French Bulldog',
    slug: 'french-bulldog',
    risk: 'High',
    issues: 'Breathing, spine, allergies',
    cost: '$45-85/mo',
  },
  {
    name: 'Golden Retriever',
    slug: 'golden-retriever',
    risk: 'High',
    issues: 'Cancer, hip dysplasia',
    cost: '$45-85/mo',
  },
  {
    name: 'German Shepherd',
    slug: 'german-shepherd',
    risk: 'High',
    issues: 'Hip dysplasia, DM, bloat',
    cost: '$50-100/mo',
  },
]

const popularCats = [
  {
    name: 'Persian',
    slug: 'persian',
    risk: 'High',
    issues: 'PKD, breathing, eyes',
    cost: '$25-50/mo',
  },
  {
    name: 'Maine Coon',
    slug: 'maine-coon',
    risk: 'High',
    issues: 'HCM, hip dysplasia',
    cost: '$28-55/mo',
  },
  {
    name: 'Bengal',
    slug: 'bengal',
    risk: 'Medium',
    issues: 'HCM, PRA, joints',
    cost: '$26-50/mo',
  },
]

const topProviders = [
  {
    name: 'Embrace',
    highlight: 'Best for hereditary conditions',
    features: ['6-month orthopedic wait', 'Diminishing deductible', 'Prescription food covered'],
  },
  {
    name: 'Healthy Paws',
    highlight: 'Best for unlimited coverage',
    features: ['No annual limits', 'Fast claims', 'Covers cancer treatment'],
  },
  {
    name: 'Pumpkin',
    highlight: 'Best coverage breadth',
    features: ['Dental illness included', '90% reimbursement', 'No breed restrictions'],
  },
]

export default function Home() {
  return (
    <Layout
      title="Compare Pet Insurance by Breed"
      description="Find the best pet insurance for your dog or cat. Breed-specific recommendations, cost comparisons, and honest reviews to protect your furry family."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-gray-900 mb-6">
              Find the Right Pet Insurance for <span className="text-brand-600">Your Pet</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Not all pets have the same health risks. We break down coverage by breed so you know exactly what to look for—and what to avoid.
            </p>
          </div>

          {/* Pet Type Selector */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-gray-500 mb-4">I have a...</p>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/breeds"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <svg className="w-16 h-16 text-gray-400 group-hover:text-brand-500 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                  <path d="M32 8c-4.4 0-8 3.6-8 8 0 2.5 1.2 4.8 3 6.3-5.8 2.3-10 7.9-10 14.4v11.3c0 4.4 3.6 8 8 8h14c4.4 0 8-3.6 8-8V36.7c0-6.5-4.2-12.1-10-14.4 1.8-1.5 3-3.8 3-6.3 0-4.4-3.6-8-8-8zm-12 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm24 0c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM12 20c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4zm40 0c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4s4-1.8 4-4v-8c0-2.2-1.8-4-4-4z"/>
                </svg>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">Dog</span>
                <span className="text-sm text-gray-500">50 breeds covered</span>
              </Link>
              
              <Link
                href="/cats"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-brand-500 hover:shadow-md transition-all group"
              >
                <svg className="w-16 h-16 text-gray-400 group-hover:text-brand-500 transition-colors" viewBox="0 0 64 64" fill="currentColor">
                  <path d="M50 10c-1.5 0-2.9.8-3.7 2l-4.3 6.5V14c0-2.2-1.8-4-4-4H26c-2.2 0-4 1.8-4 4v4.5L17.7 12c-.8-1.2-2.2-2-3.7-2-2.5 0-4.5 2-4.5 4.5 0 .8.2 1.6.6 2.3l6.9 11.5V50c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V28.3l6.9-11.5c.4-.7.6-1.5.6-2.3 0-2.5-2-4.5-4.5-4.5zM28 42c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4 6c-2.2 0-4-1.3-4-3h8c0 1.7-1.8 3-4 3z"/>
                </svg>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-brand-600">Cat</span>
                <span className="text-sm text-gray-500">10 breeds covered</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Breed Matters */}
      <section className="py-16">
        <div className="container-wide">
          <h2 className="text-center mb-4">Why Your Breed Matters</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A French Bulldog's insurance needs are completely different from a Persian's. We analyze health risks by breed so you get coverage that actually protects you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold mb-2">Breed-Specific Risks</h3>
              <p className="text-gray-600 text-sm">
                Some breeds face cancer, others joint issues, others breathing problems. We tell you what to expect.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-lg font-semibold mb-2">Real Cost Data</h3>
              <p className="text-gray-600 text-sm">
                Actual premium ranges for your breed, not vague averages. Know what you'll pay before you apply.
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold mb-2">Coverage That Fits</h3>
              <p className="text-gray-600 text-sm">
                We match providers to your breed's needs. No point in cheap insurance that excludes what you need most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dogs */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="mb-2">Popular Dog Breeds</h2>
              <p className="text-gray-600">Coverage guides for the most common dogs</p>
            </div>
            <Link href="/breeds" className="text-brand-600 font-semibold hover:text-brand-700 hidden sm:block">
              View all dogs →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularDogs.map((breed) => (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="card hover:shadow-md hover:border-brand-200 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-brand-600 transition-colors">
                    {breed.name}
                  </h3>
                  <span className={`tag ${
                    breed.risk === 'Very High' ? 'bg-red-100 text-red-700' :
                    breed.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {breed.risk} Risk
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Common issues:</strong> {breed.issues}
                </p>
                <p className="text-sm font-medium text-forest-600">
                  Est. cost: {breed.cost}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/breeds" className="text-brand-600 font-semibold hover:text-brand-700">
              View all dogs →
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Cats */}
      <section className="py-16">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="mb-2">Popular Cat Breeds</h2>
              <p className="text-gray-600">Coverage guides for the most common cats</p>
            </div>
            <Link href="/cats" className="text-brand-600 font-semibold hover:text-brand-700 hidden sm:block">
              View all cats →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularCats.map((breed) => (
              <Link
                key={breed.slug}
                href={`/cats/${breed.slug}`}
                className="card hover:shadow-md hover:border-brand-200 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold group-hover:text-brand-600 transition-colors">
                    {breed.name}
                  </h3>
                  <span className={`tag ${
                    breed.risk === 'Very High' ? 'bg-red-100 text-red-700' :
                    breed.risk === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {breed.risk} Risk
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Common issues:</strong> {breed.issues}
                </p>
                <p className="text-sm font-medium text-forest-600">
                  Est. cost: {breed.cost}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/cats" className="text-brand-600 font-semibold hover:text-brand-700">
              View all cats →
            </Link>
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-center mb-4">Top Providers</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            These insurers consistently rank highest across breeds. But the best one depends on your specific pet.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {topProviders.map((provider, index) => (
              <div key={provider.name} className={index === 0 ? 'card-highlight' : 'card'}>
                {index === 0 && (
                  <span className="inline-block px-3 py-1 bg-brand-500 text-white text-xs font-semibold rounded-full mb-4">
                    Most Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{provider.name}</h3>
                <p className="text-brand-600 font-medium mb-4">{provider.highlight}</p>
                <ul className="space-y-2">
                  {provider.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Ready to Protect Your Pet?</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Find the right coverage for your breed. Our guides break down exactly what you need—no fluff, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/breeds" className="btn-primary">
              Find Dog Breeds →
            </Link>
            <Link href="/cats" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              Find Cat Breeds →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
