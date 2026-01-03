import Layout from '@/components/Layout'
import Link from 'next/link'

export default function RottweilerInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for Rottweilers? (2026)"
      description="Should you insure your Rottweiler? Cancer risk, joint issues, and size make coverage valuable."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for Rottweilers?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Yes. Cancer rates, joint problems, and large-breed treatment costs make insurance recommended.</p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-forest-800 font-semibold mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                Rottweilers have elevated cancer rates, high joint disease prevalence, and their size means expensive treatment. Insurance is recommended.
              </p>
            </div>

            <h2>Why Rotties Need Coverage</h2>
            <ul>
              <li><strong>Cancer risk</strong> — Higher than average rates of osteosarcoma, lymphoma</li>
              <li><strong>Joint disease</strong> — ~20% have hip/elbow dysplasia</li>
              <li><strong>Large breed costs</strong> — Everything costs more (drugs, surgery, equipment)</li>
              <li><strong>ACL tears</strong> — Common in large, active dogs</li>
              <li><strong>Bloat risk</strong> — Deep-chested breed</li>
            </ul>

            <h2>The Math</h2>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance:</strong> $50-$100/month = $6,000-$12,000 over 10 years</p>
              <p><strong>Osteosarcoma treatment:</strong> $8,000-$15,000</p>
              <p><strong>Hip dysplasia surgery:</strong> $5,000-$7,000</p>
              <p><strong>Bloat emergency:</strong> $5,000+</p>
            </div>

            <h2>What to Look For</h2>
            <ul>
              <li>✓ Unlimited or high annual limits ($20,000+)</li>
              <li>✓ No cancer caps</li>
              <li>✓ Bloat coverage</li>
              <li>✓ Orthopedic coverage with reasonable waiting period</li>
            </ul>

            <h2>Our Verdict</h2>
            <p><strong>Recommended</strong> for Rottweiler owners. The combination of cancer risk, joint issues, and large-breed treatment costs makes insurance valuable.</p>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Compare Rottweiler Insurance Options</h3>
              <Link href="/breeds/rottweiler" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Rottweiler Insurance Guide →
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
