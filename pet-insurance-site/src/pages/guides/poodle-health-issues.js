import Layout from '@/components/Layout'
import Link from 'next/link'

export default function PoodleHealthIssues() {
  return (
    <Layout
      title="Poodle Health Issues & Vet Costs (2026)"
      description="Common Poodle health problems across all sizes. Hip dysplasia, Addison's, bloat, and eye issues—real vet costs."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Poodle Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Poodles are generally healthy, but each size variety has specific concerns.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <p>Health issues vary by size: Standard, Miniature, and Toy Poodles each have different risk profiles.</p>

            <h2>Standard Poodle Issues</h2>

            <h3>Bloat (GDV)</h3>
            <p>Deep-chested Standards are at significant bloat risk.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $7,500</p>
            </div>

            <h3>Addison's Disease</h3>
            <p>Adrenal insufficiency—Standard Poodles have one of the highest breed rates.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $2,000/year (lifelong)</p>
            </div>

            <h3>Hip Dysplasia</h3>
            <p>Joint malformation affecting larger Standards.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000</p>
            </div>

            <h2>Miniature & Toy Poodle Issues</h2>

            <h3>Luxating Patella</h3>
            <p>Kneecap dislocation—common in smaller Poodles.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $1,500 - $3,500</p>
            </div>

            <h3>Progressive Retinal Atrophy (PRA)</h3>
            <p>Hereditary blindness affecting all Poodle sizes.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $2,000</p>
            </div>

            <h2>All Poodle Sizes</h2>

            <h3>Epilepsy</h3>
            <p>Seizure disorder requiring lifelong medication.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $500/year</p>
            </div>

            <h3>Von Willebrand Disease</h3>
            <p>Blood clotting disorder—test before any surgery.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $3,000</p>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Poodle</h3>
              <p className="text-gray-600 mb-4">See which insurers best cover Poodle health issues by size.</p>
              <Link href="/breeds/poodle" className="btn-primary">Poodle Insurance Guide →</Link>
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
