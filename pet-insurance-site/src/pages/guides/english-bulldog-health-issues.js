import Layout from '@/components/Layout'
import Link from 'next/link'

export default function EnglishBulldogHealthIssues() {
  return (
    <Layout
      title="English Bulldog Health Issues & Vet Costs (2026)"
      description="Common English Bulldog health problems. BOAS, skin infections, hip dysplasia—this breed has serious issues."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">English Bulldog Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              English Bulldogs are one of the most health-challenged breeds. Here's the reality.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-red-800 font-medium mb-2">Important</p>
              <p className="text-gray-700">
                English Bulldogs have more health problems than almost any other breed. Their extreme body structure creates predictable, expensive issues. If you're considering this breed, insurance is essential.
              </p>
            </div>

            <h2>Most Common Health Issues</h2>

            <h3>1. Brachycephalic Airway Syndrome (BOAS)</h3>
            <p>Severe breathing difficulties from their extremely flat faces. Most Bulldogs struggle to breathe normally.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $2,500 - $6,000</p>
              <p className="text-sm text-gray-600">Many need surgery. Some need multiple procedures.</p>
            </div>

            <h3>2. Skin Fold Dermatitis</h3>
            <p>Chronic infections in their numerous skin folds. Requires constant cleaning and treatment.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $2,000/year (ongoing)</p>
            </div>

            <h3>3. Hip Dysplasia</h3>
            <p>Over 70% of English Bulldogs have hip dysplasia—the highest rate of any breed.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
            </div>

            <h3>4. Cherry Eye</h3>
            <p>Extremely common in Bulldogs. Often affects both eyes.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $1,500 per eye</p>
            </div>

            <h3>5. Allergies</h3>
            <p>Food and environmental allergies causing itching, ear infections, and skin issues.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $3,000/year</p>
            </div>

            <h3>6. Heat Intolerance</h3>
            <p>Can't regulate temperature well. Heat stroke is a real danger.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Emergency Cost: $1,000 - $5,000</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>BOAS surgery</span><span className="font-semibold">$4,000</span></li>
                <li className="flex justify-between"><span>Skin care (lifetime)</span><span className="font-semibold">$8,000</span></li>
                <li className="flex justify-between"><span>Hip management</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>Cherry eye surgery</span><span className="font-semibold">$2,000</span></li>
                <li className="flex justify-between"><span>Allergies (lifetime)</span><span className="font-semibold">$10,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$29,000+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your English Bulldog</h3>
              <p className="text-gray-600 mb-4">Insurance is essential for this breed. See which providers offer the best coverage.</p>
              <Link href="/breeds/english-bulldog" className="btn-primary">English Bulldog Insurance Guide →</Link>
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
