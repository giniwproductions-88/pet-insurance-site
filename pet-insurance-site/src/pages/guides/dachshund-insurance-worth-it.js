import Layout from '@/components/Layout'
import Link from 'next/link'

export default function DachshundInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for Dachshunds? (2026)"
      description="Should you insure your Dachshund? With 25% IVDD rates, the math strongly favors coverage."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for Dachshunds?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Yes. IVDD risk alone makes insurance a smart choice for Dachshund owners.</p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-forest-800 font-semibold mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                Up to 1 in 4 Dachshunds will experience IVDD. One back surgery costs $5,000-$8,000. Insurance is strongly recommended.
              </p>
            </div>

            <h2>The IVDD Factor</h2>
            <p>Dachshunds have the highest IVDD rate of any breed. This isn't a minor risk—it's a defining characteristic.</p>
            <ul>
              <li>19-24% will have at least one IVDD episode</li>
              <li>Many have multiple episodes</li>
              <li>Surgery costs $5,000-$8,000</li>
              <li>Some cases require emergency surgery within hours</li>
            </ul>

            <h2>The Math</h2>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance:</strong> $30-$55/month = $3,600-$6,600 over 10 years</p>
              <p><strong>One IVDD surgery:</strong> $5,000-$8,000</p>
              <p><strong>Second IVDD surgery (common):</strong> $5,000-$8,000</p>
            </div>
            <p>If your Dachshund needs even one back surgery, insurance likely pays for itself.</p>

            <h2>Critical Coverage Requirements</h2>
            <ul>
              <li>✓ IVDD/spinal coverage without exclusions</li>
              <li>✓ Short waiting period for back issues (some are 12+ months)</li>
              <li>✓ High enough limits for surgery ($10,000+)</li>
              <li>✓ Coverage for multiple incidents</li>
            </ul>

            <h2>Red Flags</h2>
            <ul>
              <li>✗ Spinal condition exclusions</li>
              <li>✗ 12+ month orthopedic/spinal waits</li>
              <li>✗ Per-condition caps under $5,000</li>
            </ul>

            <h2>Our Verdict</h2>
            <p><strong>Highly recommended</strong> for Dachshunds. The IVDD statistics make this one of the clearer breed-specific insurance decisions. Enroll early before any back issues develop.</p>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Find IVDD Coverage for Your Dachshund</h3>
              <Link href="/breeds/dachshund" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Dachshund Insurance Guide →
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
