import Layout from '@/components/Layout'
import Link from 'next/link'

export default function RottweilerHealthIssues() {
  return (
    <Layout
      title="Rottweiler Health Issues & Vet Costs (2026)"
      description="Common Rottweiler health problems. Hip dysplasia, cancer, heart disease—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Rottweiler Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Rotties are powerful dogs with significant health risks including cancer, joint problems, and heart disease.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Most Common Health Issues</h2>

            <h3>1. Cancer (Multiple Types)</h3>
            <p>Rottweilers have elevated cancer rates—osteosarcoma (bone cancer), lymphoma, and hemangiosarcoma.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $5,000 - $15,000+</p>
              <p className="text-sm text-gray-600">Osteosarcoma often requires amputation + chemo: $8,000-$15,000</p>
            </div>

            <h3>2. Hip & Elbow Dysplasia</h3>
            <p>Joint malformation affecting ~20% of Rottweilers. Their size makes this particularly painful.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
            </div>

            <h3>3. Aortic Stenosis</h3>
            <p>Heart defect restricting blood flow. Rottweilers are predisposed.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $5,000</p>
            </div>

            <h3>4. Cruciate Ligament Tears</h3>
            <p>Knee ligament injuries from their size and activity.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,500 - $6,500</p>
            </div>

            <h3>5. Bloat (GDV)</h3>
            <p>Life-threatening stomach twist. Large, deep-chested breeds are vulnerable.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $7,500</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Cancer treatment</span><span className="font-semibold">$10,000</span></li>
                <li className="flex justify-between"><span>Joint issues (lifetime)</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>Heart monitoring/treatment</span><span className="font-semibold">$2,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Potential total</span><span className="font-semibold text-brand-600">$17,000+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Rottweiler</h3>
              <Link href="/breeds/rottweiler" className="btn-primary">Rottweiler Insurance Guide →</Link>
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
