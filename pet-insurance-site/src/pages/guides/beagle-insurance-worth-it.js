import Layout from '@/components/Layout'
import Link from 'next/link'

export default function BeagleInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for Beagles? (2026)"
      description="Should you insure your Beagle? Chronic conditions like epilepsy and ear infections add up over time."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for Beagles?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Beagles are generally healthy, but chronic conditions make insurance worth considering.</p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-forest-800 font-semibold mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                Beagles aren't as high-risk as French Bulldogs or Golden Retrievers, but epilepsy and chronic ear infections can add up. Insurance is worth considering, especially for ongoing condition coverage.
              </p>
            </div>

            <h2>The Case for Insurance</h2>
            <ul>
              <li><strong>Epilepsy</strong> — Higher rates than average, lifelong medication</li>
              <li><strong>Chronic ear infections</strong> — Most Beagles deal with recurring issues</li>
              <li><strong>Long lifespan</strong> — 12-15 years means more time for issues to develop</li>
              <li><strong>Foreign object ingestion</strong> — Beagles eat things they shouldn't</li>
            </ul>

            <h2>The Math</h2>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance:</strong> $25-$50/month = $3,000-$6,000 over 10 years</p>
              <p><strong>Epilepsy (10 years):</strong> $3,000-$5,000</p>
              <p><strong>Ear infections (lifetime):</strong> $3,000-$6,000</p>
              <p><strong>One foreign object surgery:</strong> $1,500-$4,000</p>
            </div>

            <h2>When Insurance Makes Sense</h2>
            <ul>
              <li>✓ Your Beagle shows signs of allergies or ear issues</li>
              <li>✓ Family history of epilepsy</li>
              <li>✓ Your Beagle eats everything in sight</li>
              <li>✓ You couldn't easily pay a $3,000 emergency bill</li>
            </ul>

            <h2>Our Verdict</h2>
            <p><strong>Worth considering</strong> for Beagle owners. Not as urgent as high-risk breeds, but chronic conditions and their long lifespan make coverage reasonable. Especially valuable if you get good chronic condition coverage.</p>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Compare Beagle Insurance Options</h3>
              <Link href="/breeds/beagle" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Beagle Insurance Guide →
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
