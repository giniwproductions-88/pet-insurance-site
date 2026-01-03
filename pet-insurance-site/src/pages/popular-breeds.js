import Layout from '@/components/Layout'
import Link from 'next/link'

const popularBreeds = [
  {
    rank: 1,
    name: 'French Bulldog',
    slug: 'french-bulldog',
    risk: 'Very High',
    issues: 'BOAS, IVDD, allergies, skin infections',
    cost: '$45-85/mo',
    verdict: 'Essential',
  },
  {
    rank: 2,
    name: 'Labrador Retriever',
    slug: 'labrador-retriever',
    risk: 'Medium',
    issues: 'Hip dysplasia, obesity, ACL tears',
    cost: '$35-75/mo',
    verdict: 'Recommended',
  },
  {
    rank: 3,
    name: 'Golden Retriever',
    slug: 'golden-retriever',
    risk: 'High',
    issues: 'Cancer (60%), hip dysplasia, heart disease',
    cost: '$45-85/mo',
    verdict: 'Essential',
  },
  {
    rank: 4,
    name: 'German Shepherd',
    slug: 'german-shepherd',
    risk: 'High',
    issues: 'Hip dysplasia, DM, bloat, EPI',
    cost: '$50-100/mo',
    verdict: 'Recommended',
  },
  {
    rank: 5,
    name: 'Poodle',
    slug: 'poodle',
    risk: 'Medium',
    issues: 'Bloat (Standard), Addison\'s, eye issues',
    cost: '$30-70/mo',
    verdict: 'Recommended',
  },
  {
    rank: 6,
    name: 'Dachshund',
    slug: 'dachshund',
    risk: 'High',
    issues: 'IVDD (25%), obesity, dental disease',
    cost: '$30-55/mo',
    verdict: 'Highly Recommended',
  },
  {
    rank: 7,
    name: 'Rottweiler',
    slug: 'rottweiler',
    risk: 'High',
    issues: 'Cancer, hip dysplasia, heart disease',
    cost: '$50-100/mo',
    verdict: 'Recommended',
  },
  {
    rank: 8,
    name: 'Beagle',
    slug: 'beagle',
    risk: 'Medium',
    issues: 'Epilepsy, ear infections, hypothyroidism',
    cost: '$25-50/mo',
    verdict: 'Worth Considering',
  },
  {
    rank: 9,
    name: 'English Bulldog',
    slug: 'english-bulldog',
    risk: 'Very High',
    issues: 'BOAS, skin infections, hip dysplasia (70%+)',
    cost: '$55-100/mo',
    verdict: 'Essential',
  },
  {
    rank: 10,
    name: 'German Shorthaired Pointer',
    slug: 'german-shorthaired-pointer',
    risk: 'Medium',
    issues: 'Hip dysplasia, bloat, cancer, ACL tears',
    cost: '$40-70/mo',
    verdict: 'Recommended',
  },
]

function getRiskColor(risk) {
  switch (risk) {
    case 'Very High':
      return 'bg-red-100 text-red-700'
    case 'High':
      return 'bg-orange-100 text-orange-700'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

function getVerdictColor(verdict) {
  switch (verdict) {
    case 'Essential':
      return 'text-red-600'
    case 'Highly Recommended':
      return 'text-orange-600'
    case 'Recommended':
      return 'text-forest-600'
    default:
      return 'text-gray-600'
  }
}

export default function PopularBreeds() {
  return (
    <Layout
      title="Most Popular Dog Breeds - Pet Insurance Guide (2026)"
      description="Insurance guides for America's top 10 most popular dog breeds. Health issues, costs, and whether insurance is worth it for each breed."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-gray-900 mb-6">
              America's Most Popular Dog Breeds
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Insurance guides for the top 10 breeds based on AKC registration data. Each includes health risks, costs, and our insurance recommendation.
            </p>
            <p className="text-gray-500">
              Looking for a specific breed? <Link href="/breeds" className="text-brand-600 hover:underline">View all 51 dog breeds →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Breed Cards */}
      <section className="py-12">
        <div className="container-wide">
          <div className="space-y-6">
            {popularBreeds.map((breed) => (
              <div key={breed.slug} className="card hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Rank & Name */}
                  <div className="flex items-center gap-4 lg:w-64">
                    <span className="flex-shrink-0 w-10 h-10 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold">
                      {breed.rank}
                    </span>
                    <div>
                      <h2 className="text-lg font-semibold">{breed.name}</h2>
                      <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${getRiskColor(breed.risk)}`}>
                        {breed.risk} Risk
                      </span>
                    </div>
                  </div>

                  {/* Health Issues */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1">Common Health Issues</p>
                    <p className="text-gray-700">{breed.issues}</p>
                  </div>

                  {/* Cost & Verdict */}
                  <div className="lg:text-right">
                    <p className="text-sm text-gray-500">Est. Insurance</p>
                    <p className="font-semibold text-gray-900">{breed.cost}</p>
                    <p className={`text-sm font-medium ${getVerdictColor(breed.verdict)}`}>
                      {breed.verdict}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="mt-6 pt-6 border-t flex flex-wrap gap-3">
                  <Link
                    href={`/breeds/${breed.slug}`}
                    className="btn-primary text-sm"
                  >
                    Insurance Guide →
                  </Link>
                  <Link
                    href={`/guides/${breed.slug}-health-issues`}
                    className="btn-secondary text-sm"
                  >
                    🏥 Health Issues & Costs
                  </Link>
                  <Link
                    href={`/guides/${breed.slug}-insurance-worth-it`}
                    className="btn-secondary text-sm"
                  >
                    💰 Is Insurance Worth It?
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <h2 className="mb-6">Quick Insurance Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="font-semibold text-red-600 mb-3">Essential (Get Insurance)</h3>
              <ul className="space-y-2 text-sm">
                <li>• French Bulldog — Breathing, spine, skin issues</li>
                <li>• Golden Retriever — 60% cancer rate</li>
                <li>• English Bulldog — Most health-challenged breed</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-orange-600 mb-3">Highly Recommended</h3>
              <ul className="space-y-2 text-sm">
                <li>• Dachshund — 25% IVDD rate</li>
                <li>• German Shepherd — Joint issues, bloat</li>
                <li>• Rottweiler — Cancer, joint problems</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold text-forest-600 mb-3">Recommended</h3>
              <ul className="space-y-2 text-sm">
                <li>• Labrador — ACL tears, joint issues</li>
                <li>• Poodle — Varies by size</li>
                <li>• Beagle — Chronic conditions</li>
                <li>• German Shorthaired Pointer — Bloat, activity injuries</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Don't See Your Breed?</h2>
          <p className="text-gray-300 mb-8">
            We have insurance guides for 51 dog breeds and 10 cat breeds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/breeds" className="btn-primary">
              All Dog Breeds →
            </Link>
            <Link href="/cats" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              Cat Breeds →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
