import Layout from '@/components/Layout'
import Link from 'next/link'

export default function DachshundHealthIssues() {
  return (
    <Layout
      title="Dachshund Health Issues & Vet Costs (2026)"
      description="Common Dachshund health problems. IVDD back issues, obesity, dental disease—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Dachshund Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              That adorable long body creates serious back problems. Here's what Dachshund owners need to know.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-amber-800 font-medium mb-2">The Big One: IVDD</p>
              <p className="text-gray-700">
                Up to 25% of Dachshunds will experience Intervertebral Disc Disease. Their long spines and short legs create enormous stress on spinal discs.
              </p>
            </div>

            <h2>Most Common Health Issues</h2>

            <h3>1. Intervertebral Disc Disease (IVDD)</h3>
            <p>Herniated spinal discs causing pain, weakness, or paralysis. THE Dachshund health issue.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $9,000+</p>
              <p className="text-sm text-gray-600">Conservative treatment: $500-$1,500. Surgery: $3,000-$8,000. Rehab: $1,000+</p>
            </div>

            <h3>2. Obesity</h3>
            <p>Extra weight dramatically increases IVDD risk. Dachshunds love food and gain weight easily.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $300 - $1,000/year</p>
              <p className="text-sm text-gray-600">Prescription diets, extra vet visits, treating secondary conditions.</p>
            </div>

            <h3>3. Dental Disease</h3>
            <p>Small mouths with crowded teeth. Most Dachshunds need regular dental cleanings.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $2,000</p>
              <p className="text-sm text-gray-600">Cleanings: $300-$700. Extractions add significantly more.</p>
            </div>

            <h3>4. Luxating Patella</h3>
            <p>Kneecap dislocation—common in Miniature Dachshunds especially.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $1,500 - $3,500</p>
            </div>

            <h3>5. Progressive Retinal Atrophy</h3>
            <p>Hereditary blindness. Test breeding dogs.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $2,000</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>One IVDD episode (surgery)</span><span className="font-semibold">$6,000</span></li>
                <li className="flex justify-between"><span>Dental care (lifetime)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between"><span>Weight management</span><span className="font-semibold">$2,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$11,000+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Dachshund</h3>
              <p className="text-gray-600 mb-4">IVDD coverage is critical. See which insurers have short spinal waiting periods.</p>
              <Link href="/breeds/dachshund" className="btn-primary">Dachshund Insurance Guide →</Link>
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
