import Layout from '@/components/Layout'
import Link from 'next/link'

export default function PoodleInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for Poodles? (2026)"
      description="Should you insure your Poodle? It depends on size. Here's the breakdown for Standard, Miniature, and Toy."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for Poodles?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              The answer varies by size. Standards face bigger risks; smaller Poodles have different concerns.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Standard Poodles: Recommended</h2>
            <p>Standard Poodles face bloat risk, Addison's disease, and hip dysplasia. One bloat emergency ($5,000+) or Addison's diagnosis (lifelong management) makes insurance worthwhile.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance cost:</strong> $40-$70/month</p>
              <p><strong>Bloat surgery:</strong> $3,000-$7,500</p>
              <p><strong>Addison's (lifetime):</strong> $5,000-$15,000</p>
            </div>

            <h2>Miniature Poodles: Consider It</h2>
            <p>Moderate risk profile. Luxating patella and eye conditions are the main concerns. Insurance is reasonable but less urgent than Standards.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance cost:</strong> $30-$55/month</p>
              <p><strong>Knee surgery:</strong> $1,500-$3,500</p>
            </div>

            <h2>Toy Poodles: Consider It</h2>
            <p>Generally healthy but prone to dental issues, luxating patella, and fragile bones. Their longevity (15+ years) means more time for issues to develop.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance cost:</strong> $25-$45/month</p>
              <p><strong>Knee surgery:</strong> $1,500-$3,500</p>
            </div>

            <h2>Our Verdict</h2>
            <ul>
              <li><strong>Standard Poodles:</strong> Recommended — bloat and Addison's risk</li>
              <li><strong>Miniature Poodles:</strong> Worth considering — moderate risk</li>
              <li><strong>Toy Poodles:</strong> Worth considering — long lifespan increases lifetime risk</li>
            </ul>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Compare Poodle Insurance Options</h3>
              <Link href="/breeds/poodle" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Poodle Insurance Guide →
              </Link>
            </div>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: January 2026</p>
          </footer>
        </div>
      </article>
    </Layout>
  )
}
