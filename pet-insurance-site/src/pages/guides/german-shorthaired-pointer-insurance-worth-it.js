import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GSPInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It for German Shorthaired Pointers? (2026)"
      description="Should you insure your GSP? Bloat risk, joint issues, and high activity levels make coverage worth considering."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Insurance Guide</p>
            <h1 className="text-gray-900 mb-4">Is Pet Insurance Worth It for German Shorthaired Pointers?</h1>
            <p className="text-xl text-gray-600 leading-relaxed">Yes, especially for active GSPs. Bloat risk plus injury-prone lifestyle makes coverage valuable.</p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-forest-800 font-semibold mb-2">The Bottom Line</p>
              <p className="text-gray-700">
                GSPs are generally healthy, but bloat risk, cancer rates, and their athletic lifestyle create real insurance value. Recommended for most GSP owners.
              </p>
            </div>

            <h2>Why GSPs Benefit from Insurance</h2>
            <ul>
              <li><strong>Bloat risk</strong> — Deep-chested breed, $5,000+ emergency</li>
              <li><strong>Cancer rates</strong> — Higher than average</li>
              <li><strong>ACL tears</strong> — Athletic dogs tear ligaments</li>
              <li><strong>Sports injuries</strong> — Hunting/fieldwork means cuts, sprains, fractures</li>
            </ul>

            <h2>The Math</h2>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p><strong>Insurance:</strong> $40-$70/month = $4,800-$8,400 over 10 years</p>
              <p><strong>One bloat emergency:</strong> $5,000+</p>
              <p><strong>One ACL surgery:</strong> $4,500+</p>
              <p><strong>Cancer treatment:</strong> $8,000-$15,000</p>
            </div>
            <p>A single major incident exceeds years of premiums.</p>

            <h2>Best For</h2>
            <ul>
              <li>✓ Active GSPs (hunting, field trials, agility)</li>
              <li>✓ Owners who couldn't easily pay $5,000+ emergency</li>
              <li>✓ Dogs used for fieldwork (higher injury risk)</li>
            </ul>

            <h2>What to Look For</h2>
            <ul>
              <li>✓ Bloat/GDV coverage</li>
              <li>✓ Strong accident coverage</li>
              <li>✓ ACL/CCL coverage (some exclude)</li>
              <li>✓ Cancer coverage without caps</li>
            </ul>

            <h2>Our Verdict</h2>
            <p><strong>Recommended</strong> for German Shorthaired Pointer owners, especially active ones. The combination of bloat risk, cancer rates, and athletic lifestyle makes insurance a sound investment.</p>

            <div className="bg-gray-900 text-white rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold mb-2">Compare GSP Insurance Options</h3>
              <Link href="/breeds/german-shorthaired-pointer" className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                GSP Insurance Guide →
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
