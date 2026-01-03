import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GSPHealthIssues() {
  return (
    <Layout
      title="German Shorthaired Pointer Health Issues & Vet Costs (2026)"
      description="Common German Shorthaired Pointer health problems. Hip dysplasia, bloat, cancer—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">German Shorthaired Pointer Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              GSPs are athletic, active dogs with moderate health risks. Their activity level also increases injury risk.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Most Common Health Issues</h2>

            <h3>1. Hip Dysplasia</h3>
            <p>Joint malformation affecting many medium-to-large breeds. GSPs are moderately prone.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000</p>
              <p className="text-sm text-gray-600">Management: $500-$1,500/year. Surgery: $3,500-$7,000.</p>
            </div>

            <h3>2. Bloat (GDV)</h3>
            <p>Deep-chested breeds like GSPs are at elevated bloat risk. Life-threatening emergency.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $7,500</p>
              <p className="text-sm text-gray-600">Emergency surgery required. Fatal within hours without treatment.</p>
            </div>

            <h3>3. Cancer</h3>
            <p>Higher than average rates of lymphoma and hemangiosarcoma.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $5,000 - $15,000+</p>
            </div>

            <h3>4. ACL/CCL Tears</h3>
            <p>Knee ligament injuries from their high-intensity activity.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,500 - $6,500</p>
              <p className="text-sm text-gray-600">40-60% tear the other knee within 2 years.</p>
            </div>

            <h3>5. Entropion</h3>
            <p>Eyelids rolling inward, causing irritation. Common in the breed.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $1,000 - $2,500</p>
            </div>

            <h3>6. Sports Injuries</h3>
            <p>Cuts, sprains, and fractures from fieldwork and intense activity.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $4,000 per incident</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Hip dysplasia treatment</span><span className="font-semibold">$4,000</span></li>
                <li className="flex justify-between"><span>ACL surgery (one knee)</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>Sports injuries (lifetime)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$12,000+</span></li>
              </ul>
              <p className="text-sm text-gray-500 mt-2">Bloat or cancer would add $5,000-$15,000.</p>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your GSP</h3>
              <Link href="/breeds/german-shorthaired-pointer" className="btn-primary">GSP Insurance Guide →</Link>
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
