import Layout from '@/components/Layout'
import Link from 'next/link'

export default function GoldenRetrieverHealthIssues() {
  return (
    <Layout
      title="Golden Retriever Health Issues & Vet Costs (2026)"
      description="Common Golden Retriever health problems and treatment costs. Cancer, hip dysplasia, heart disease—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">Golden Retriever Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Goldens are wonderful dogs with a serious cancer problem. Here's what every owner should know.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-amber-800 font-medium mb-2">The Hard Truth</p>
              <p className="text-gray-700">
                Approximately 60% of Golden Retrievers will develop cancer. This is the highest rate of any breed. It's not a possibility—it's a probability.
              </p>
            </div>

            <h2>Most Common Health Issues</h2>

            <h3>1. Cancer (Multiple Types)</h3>
            <p>
              <strong>What it is:</strong> Goldens have extremely high rates of hemangiosarcoma, lymphoma, osteosarcoma, and mast cell tumors.
            </p>
            <p>
              <strong>Why:</strong> Genetic predisposition in the breed. Research is ongoing, but the problem is widespread.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $5,000 - $20,000+</p>
              <p className="text-sm text-gray-600">Diagnosis, surgery, chemotherapy, and ongoing care. Some cancers exceed $15,000.</p>
            </div>

            <h3>2. Hip & Elbow Dysplasia</h3>
            <p>
              <strong>What it is:</strong> Malformed joints causing arthritis. Affects ~20% of Golden Retrievers.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
              <p className="text-sm text-gray-600">Management: $500-$1,500/year. Surgery: $3,500-$7,000 per joint.</p>
            </div>

            <h3>3. Heart Disease (SAS)</h3>
            <p>
              <strong>What it is:</strong> Subvalvular aortic stenosis—a heart defect that restricts blood flow.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $5,000</p>
              <p className="text-sm text-gray-600">Diagnosis, monitoring, medication. Severe cases may need intervention.</p>
            </div>

            <h3>4. Skin Allergies & Hot Spots</h3>
            <p>
              <strong>What it is:</strong> Environmental allergies causing itching, and hot spots from their thick coats.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $300 - $2,000/year</p>
              <p className="text-sm text-gray-600">Allergy medications, medicated shampoos, vet visits.</p>
            </div>

            <h3>5. Hypothyroidism</h3>
            <p>
              <strong>What it is:</strong> Underactive thyroid causing weight gain, lethargy, skin issues.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $600/year</p>
              <p className="text-sm text-gray-600">Lifelong daily medication. Regular blood tests needed.</p>
            </div>

            <h2>Lifetime Health Cost Estimate</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <p className="text-gray-600 mb-4">Golden with typical health issues:</p>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>Cancer treatment</span><span className="font-semibold">$10,000</span></li>
                <li className="flex justify-between"><span>Hip dysplasia management</span><span className="font-semibold">$4,000</span></li>
                <li className="flex justify-between"><span>Skin/allergy care (lifetime)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">Estimated total</span><span className="font-semibold text-brand-600">$17,000+</span></li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Golden</h3>
              <p className="text-gray-600 mb-4">
                Cancer coverage is critical. See which insurers offer unlimited benefits for Golden Retrievers.
              </p>
              <Link href="/breeds/golden-retriever" className="btn-primary">
                Golden Retriever Insurance Guide →
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
