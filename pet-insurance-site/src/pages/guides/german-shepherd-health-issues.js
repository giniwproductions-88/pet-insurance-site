import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GermanShepherdHealthIssues() {
  return (
    <Layout
      title="German Shepherd Health Issues & Vet Costs (2026)"
      description="Common German Shepherd health problems and treatment costs. Hip dysplasia, DM, bloat—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">German Shepherd Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              German Shepherds are loyal and capable, but they're prone to serious joint and spinal issues.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <h2>Most Common Health Issues</h2>

            <h3>1. Hip Dysplasia</h3>
            <p>Affects nearly 20% of German Shepherds. Malformed hip joints cause arthritis, pain, and mobility issues.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
              <p className="text-sm text-gray-600">Management: $500-$1,500/year. Hip replacement: $5,000-$7,000 per hip.</p>
            </div>

            <h3>2. Degenerative Myelopathy (DM)</h3>
            <p>Progressive spinal cord disease causing hind leg weakness and paralysis. No cure exists.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $3,000</p>
              <p className="text-sm text-gray-600">Physical therapy, wheelchairs, supportive care. Disease is progressive.</p>
            </div>

            <h3>3. Bloat (GDV)</h3>
            <p>Life-threatening stomach twist. German Shepherds' deep chest increases risk significantly.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $7,500</p>
              <p className="text-sm text-gray-600">Emergency surgery required. Fatal within hours without treatment.</p>
            </div>

            <h3>4. Elbow Dysplasia</h3>
            <p>Malformed elbow joints causing lameness. Often occurs alongside hip dysplasia.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $2,000 - $4,000</p>
              <p className="text-sm text-gray-600">Surgery often required for significant cases.</p>
            </div>

            <h3>5. Exocrine Pancreatic Insufficiency (EPI)</h3>
            <p>Pancreas doesn't produce enough digestive enzymes. Common in GSDs.</p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $150 - $300/month (lifelong)</p>
              <p className="text-sm text-gray-600">Enzyme supplements required with every meal forever.</p>
            </div>

            <h2>Lifetime Cost Estimate</h2>
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Hip dysplasia treatment</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>Bloat surgery (if occurs)</span><span className="font-semibold">$5,000</span></li>
                <li className="flex justify-between"><span>EPI management (5 years)</span><span className="font-semibold">$9,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Potential total</span><span className="font-semibold text-brand-600">$19,000+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your GSD</h3>
              <p className="text-gray-600 mb-4">See which insurers best cover German Shepherd health issues.</p>
              <Link href="/breeds/german-shepherd" className="btn-primary">German Shepherd Insurance Guide →</Link>
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
