import Layout from '@/components/Layout'
import Link from 'next/link'

export default function LabradorHealthIssues() {
  return (
    <Layout
      title="Labrador Retriever Health Issues & Vet Costs (2026)"
      description="Common Labrador health problems and treatment costs. Hip dysplasia, obesity, ear infections, and more—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Labrador Retriever Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Labs are generally healthy, but they're prone to specific issues. Here's what to expect and budget for.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Most Common Health Issues</h2>

            <h3>1. Hip & Elbow Dysplasia</h3>
            <p>
              <strong>What it is:</strong> Malformed joints causing arthritis and pain. Very common in Labs—affects up to 20% of the breed.
            </p>
            <p>
              <strong>Symptoms:</strong> Bunny hopping, difficulty rising, reluctance to climb stairs, limping after exercise.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
              <p className="text-sm text-gray-600">Management: $500-$1,500/year. Surgery: $3,500-$7,000 per joint.</p>
            </div>

            <h3>2. Obesity</h3>
            <p>
              <strong>What it is:</strong> Labs have a gene mutation that makes them constantly hungry. Over 60% of Labs are overweight.
            </p>
            <p>
              <strong>Why it matters:</strong> Obesity worsens joint problems, causes diabetes, and shortens lifespan by 2+ years.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $3,000/year</p>
              <p className="text-sm text-gray-600">Prescription diet, increased vet visits, treating secondary conditions.</p>
            </div>

            <h3>3. Ear Infections</h3>
            <p>
              <strong>What it is:</strong> Labs' floppy ears trap moisture, especially after swimming. Chronic ear infections are extremely common.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $1,000/year</p>
              <p className="text-sm text-gray-600">Each infection: $100-$250. Chronic cases need ongoing treatment.</p>
            </div>

            <h3>4. Exercise-Induced Collapse (EIC)</h3>
            <p>
              <strong>What it is:</strong> Genetic condition causing collapse after intense exercise. Affects ~3-5% of Labs.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $500</p>
              <p className="text-sm text-gray-600">DNA test: $50-100. Management through exercise modification.</p>
            </div>

            <h3>5. Cruciate Ligament Tears (ACL/CCL)</h3>
            <p>
              <strong>What it is:</strong> Knee ligament tears from activity or degeneration. Labs' size and activity level increase risk.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,500 - $6,500</p>
              <p className="text-sm text-gray-600">Surgery required. 40-60% tear the other knee within 2 years.</p>
            </div>

            <h3>6. Bloat (GDV)</h3>
            <p>
              <strong>What it is:</strong> Life-threatening stomach twist. Labs' deep chest increases risk.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $7,500</p>
              <p className="text-sm text-gray-600">Emergency surgery required. Fatal without immediate treatment.</p>
            </div>

            <h2>Lifetime Health Cost Estimate</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <p className="text-gray-600 mb-4">Typical Lab with common health issues:</p>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Hip dysplasia management (lifetime)</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>Ear infections (lifetime)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between"><span>One ACL surgery</span><span className="font-semibold">$4,500</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$12,500+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Lab</h3>
              <p className="text-gray-600 mb-4">
                See which insurers best cover Labrador health issues—especially joint problems and ACL tears.
              </p>
              <Link href="/breeds/labrador-retriever" className="btn-primary">
                Labrador Insurance Guide →
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
