import Layout from '@/components/Layout'
import Link from 'next/link'

const guides = [
  {
    title: 'Is Pet Insurance Worth It?',
    slug: 'is-pet-insurance-worth-it',
    description: 'A data-driven look at when pet insurance makes financial sense—and when it doesn\'t.',
    readTime: '8 min read',
    icon: '🤔',
  },
  {
    title: 'How Pet Insurance Works',
    slug: 'how-pet-insurance-works',
    description: 'Understand deductibles, reimbursements, waiting periods, and what\'s actually covered.',
    readTime: '10 min read',
    icon: '📋',
  },
]

export default function GuidesIndex() {
  return (
    <Layout
      title="Pet Insurance Guides"
      description="Learn everything you need to know about pet insurance. Understand how it works, whether it's worth it, and how to choose the right policy."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-16">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-gray-900 mb-6">Pet Insurance Guides</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Not sure where to start? Our guides break down everything you need to know about pet insurance—no jargon, no sales pitch.
            </p>
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card hover:shadow-md hover:border-brand-200 transition-all group"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h2 className="text-xl font-semibold mb-3 group-hover:text-brand-600 transition-colors">
                  {guide.title}
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{guide.description}</p>
                <span className="text-sm text-gray-500">{guide.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Ready to Find Coverage?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Once you understand the basics, find the best insurance for your specific breed.
          </p>
          <Link href="/breeds" className="btn-primary">
            Browse by Breed →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
