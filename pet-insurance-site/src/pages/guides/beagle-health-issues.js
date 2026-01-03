import Layout from '@/components/Layout'
import Link from 'next/link'

export default function BeagleHealthIssues() {
  return (
    <Layout
      title="Beagle Health Issues & Vet Costs (2026)"
      description="Common Beagle health problems. Epilepsy, ear infections, hypothyroidism—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Beagle Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beagles are generally hardy, but they have specific health concerns including epilepsy and chronic ear infections.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Most Common Health Issues</h2>

            <h3>1. Epilepsy</h3>
            <p>Beagles have higher than average epilepsy rates. Seizures require lifelong medication.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $500/year (ongoing)</p>
              <p className="text-sm text-gray-600">Medication, regular blood work, occasional emergency visits.</p>
            </div>

            <h3>2. Ear Infections</h3>
            <p>Those adorable floppy ears trap moisture and bacteria. Chronic ear infections are very common.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $800/year</p>
              <p className="text-sm text-gray-600">Each infection: $100-$250. Some Beagles get 3-4+ per year.</p>
            </div>

            <h3>3. Hypothyroidism</h3>
            <p>Underactive thyroid causing weight gain, lethargy, and skin issues. Common in the breed.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $500/year</p>
              <p className="text-sm text-gray-600">Daily medication plus regular blood tests.</p>
            </div>

            <h3>4. Cherry Eye</h3>
            <p>Prolapsed third eyelid gland. Beagles are predisposed.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $1,500 per eye</p>
            </div>

            <h3>5. Intervertebral Disc Disease</h3>
            <p>Back problems can occur, though less common than in Dachshunds.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $2,000 - $7,000</p>
            </div>

            <h3>6. Obesity</h3>
            <p>Beagles are food-obsessed. Most become overweight without strict portion control.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $300 - $1,000/year</p>
              <p className="text-sm text-gray-600">Weight-related conditions, prescription food, extra monitoring.</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Epilepsy management (10 years)</span><span className="font-semibold">$3,500</span></li>
                <li className="flex justify-between"><span>Ear infections (lifetime)</span><span className="font-semibold">$4,000</span></li>
                <li className="flex justify-between"><span>Hypothyroidism (10 years)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$10,500+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Beagle</h3>
              <Link href="/breeds/beagle" className="btn-primary">Beagle Insurance Guide →</Link>
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
