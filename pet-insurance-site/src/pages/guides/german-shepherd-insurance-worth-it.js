import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GermanShepherdInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for German Shepherds? (2026)"
      description="Should you insure your German Shepherd? With high rates of hip dysplasia and bloat risk, here's the math."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for German Shepherds?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GSDs have predictable, expensive health issues. Here's why most owners benefit from coverage.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-forest-800 font-semibold mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                German Shepherds have high rates of hip dysplasia (~20%), bloat risk, and breed-specific conditions like DM and EPI. Insurance is recommended for most GSD owners.
              </p>
            </div>

            <h2>Why GSDs Are Good Candidates for Insurance</h2>
            <ul>
              <li><strong>Hip dysplasia</strong> — ~20% affected, surgery costs $5,000-$7,000</li>
              <li><strong>Bloat</strong> — Life-threatening, $5,000+ emergency</li>
              <li><strong>DM</strong> — Progressive, incurable, requires supportive care</li>
              <li><strong>EPI</strong> — Lifelong supplements ($200+/month)</li>
            </ul>

            <h2>The Math</h2>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="mb-2"><strong>Insurance:</strong> $50-100/month = $6,000-$12,000 over 10 years</p>
              <p><strong>One hip surgery:</strong> $5,000-$7,000</p>
              <p><strong>One bloat emergency:</strong> $5,000+</p>
              <p><strong>EPI management (5 years):</strong> $9,000+</p>
            </div>
            <p>A single major issue can exceed years of premiums.</p>

            <h2>What to Look For</h2>
            <ul>
              <li>✓ Short orthopedic waiting period (6 months ideal)</li>
              <li>✓ Bloat/GDV coverage</li>
              <li>✓ Chronic condition coverage (for EPI)</li>
              <li>✓ High or unlimited annual limits</li>
            </ul>

            <h2>Our Verdict</h2>
            <p><strong>Recommended</strong> for German Shepherd owners. The combination of joint issues, bloat risk, and breed-specific conditions makes coverage valuable for most.</p>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Compare GSD Insurance Options</h3>
              <Link href="/breeds/german-shepherd" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                German Shepherd Insurance Guide →
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
