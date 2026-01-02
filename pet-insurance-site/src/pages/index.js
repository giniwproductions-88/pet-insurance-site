import Layout from '@/components/Layout'
import Link from 'next/link'

const popularBreeds = [
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
  {
    name: 'Labrador Retriever',
    slug: 'labrador-retriever',
    risk: 'Medium',
    issues: 'Joint issues, obesity',
    cost: '$35-75/mo',
  },
  {
    name: 'Bulldog',
    slug: 'bulldog',
    risk: 'Very High',
    issues: 'Breathing, joints, skin',
    cost: '$55-100/mo',
  },
  {
    name: 'Poodle',
    slug: 'poodle',
    risk: 'Medium',
    issues: 'Bloat, Addisons, hips',
    cost: '$40-70/mo',
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
              Find the Right Pet Insurance for <span className="text-brand-600">Your Breed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Not all pets have the same health risks. We break down coverage by breed so you know exactly what to look for—and what to avoid.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/breeds" className="btn-primary text-center">
                Browse by Breed →
              </Link>
              <Link href="/guides/is-pet-insurance-worth-it" className="btn-secondary text-center">
                Is Insurance Worth It?
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
            A French Bulldog's insurance needs are completely different from a Labrador's. We analyze health risks by breed so you get coverage that actually protects you.
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

      {/* Popular Breeds */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <h2 className="text-center mb-4">Popular Breeds</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Click any breed to see detailed coverage recommendations, health risks, and cost breakdowns.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularBreeds.map((breed) => (
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

          <div className="text-center mt-10">
            <Link href="/breeds" className="text-brand-600 font-semibold hover:text-brand-700">
              View all breeds →
            </Link>
          </div>
        </div>
      </section>

      {/* Top Providers */}
      <section className="py-16">
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
          <Link href="/breeds" className="btn-primary">
            Find Your Breed →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
