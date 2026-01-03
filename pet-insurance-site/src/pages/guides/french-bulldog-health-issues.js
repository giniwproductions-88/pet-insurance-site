import Layout from '@/components/Layout'
import Link from 'next/link'

export default function FrenchBulldogHealthIssues() {
  return (
    <Layout
      title="French Bulldog Health Issues & Vet Costs (2026)"
      description="Common French Bulldog health problems and how much they cost to treat. BOAS, IVDD, allergies, and more—real vet bill estimates."
    >
      <article className="py-16">
        <div className="container-narrow">
          
          <header className="mb-12">
            <p className="text-brand-600 font-medium mb-2">Breed Health Guide</p>
            <h1 className="text-gray-900 mb-4">French Bulldog Health Issues & Vet Costs</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              French Bulldogs are adorable, but they come with serious health risks. Here's what to expect—and what it costs.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8 not-prose">
              <p className="text-amber-800 font-medium mb-2">The Reality Check</p>
              <p className="text-gray-700">
                French Bulldogs are one of the most expensive breeds to own medically. Their flat faces, compact spines, and skin folds create predictable health problems. This isn't bad luck—it's breed structure.
              </p>
            </div>

            <h2>Most Common Health Issues</h2>

            <h3>1. Brachycephalic Obstructive Airway Syndrome (BOAS)</h3>
            <p>
              <strong>What it is:</strong> The flat face that makes Frenchies cute also makes breathing difficult. Narrowed nostrils, elongated soft palate, and narrowed trachea all restrict airflow.
            </p>
            <p>
              <strong>Symptoms:</strong> Loud breathing, snoring, gagging, exercise intolerance, overheating, blue gums during exertion.
            </p>
            <p>
              <strong>Treatment:</strong> Mild cases managed with weight control and avoiding heat. Moderate to severe cases need surgery to widen nostrils and shorten soft palate.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $2,000 - $5,000</p>
              <p className="text-sm text-gray-600">Surgery typically $2,500-$4,000. Specialist surgeons charge more.</p>
            </div>

            <h3>2. Intervertebral Disc Disease (IVDD)</h3>
            <p>
              <strong>What it is:</strong> Spinal disc herniation causing pain, weakness, or paralysis. Frenchies' compact build puts extra stress on their spines.
            </p>
            <p>
              <strong>Symptoms:</strong> Back pain, reluctance to jump, wobbly gait, dragging legs, paralysis in severe cases.
            </p>
            <p>
              <strong>Treatment:</strong> Mild cases: crate rest, anti-inflammatories, pain medication. Severe cases: emergency spinal surgery.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $3,000 - $9,000+</p>
              <p className="text-sm text-gray-600">Conservative treatment $500-$1,500. Surgery $3,000-$8,000+. Rehab adds more.</p>
            </div>

            <h3>3. Skin Allergies & Infections</h3>
            <p>
              <strong>What it is:</strong> Environmental and food allergies causing chronic itching. Skin folds trap moisture and bacteria, leading to infections.
            </p>
            <p>
              <strong>Symptoms:</strong> Itching, licking paws, red skin, ear infections, hot spots, smelly skin folds.
            </p>
            <p>
              <strong>Treatment:</strong> Allergy testing, prescription diets, antihistamines, Apoquel or Cytopoint injections, antibiotics for infections.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $3,000/year (ongoing)</p>
              <p className="text-sm text-gray-600">Apoquel: ~$2-3/day. Cytopoint: $50-150/injection monthly. Adds up fast.</p>
            </div>

            <h3>4. Hip Dysplasia</h3>
            <p>
              <strong>What it is:</strong> Malformed hip joint causing arthritis and pain. Common in Frenchies due to their build.
            </p>
            <p>
              <strong>Symptoms:</strong> Bunny hopping, difficulty rising, reluctance to exercise, limping.
            </p>
            <p>
              <strong>Treatment:</strong> Weight management, joint supplements, pain medication, physical therapy. Severe cases may need hip replacement.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $7,000+</p>
              <p className="text-sm text-gray-600">Management: $500-$1,500/year. Total hip replacement: $5,000-$7,000 per hip.</p>
            </div>

            <h3>5. Cherry Eye</h3>
            <p>
              <strong>What it is:</strong> Prolapsed third eyelid gland appearing as a red mass in the corner of the eye.
            </p>
            <p>
              <strong>Symptoms:</strong> Red, fleshy mass visible in eye corner. May cause irritation and excess tearing.
            </p>
            <p>
              <strong>Treatment:</strong> Surgical repositioning of the gland. Removal is discouraged as it leads to dry eye.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $500 - $1,500 per eye</p>
              <p className="text-sm text-gray-600">Often recurs. May need repeat surgery.</p>
            </div>

            <h3>6. Ear Infections</h3>
            <p>
              <strong>What it is:</strong> Chronic ear infections due to narrow ear canals and allergies. Very common in Frenchies.
            </p>
            <p>
              <strong>Symptoms:</strong> Head shaking, scratching ears, odor, discharge, redness.
            </p>
            <p>
              <strong>Treatment:</strong> Cleaning, medicated drops, treating underlying allergies. Chronic cases may need surgery.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 my-4 not-prose">
              <p className="font-semibold text-gray-900">Estimated Cost: $200 - $1,500/year</p>
              <p className="text-sm text-gray-600">Each infection: $100-$300. Chronic cases add up quickly.</p>
            </div>

            <h2>Total Cost of French Bulldog Health Issues</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 not-prose">
              <p className="text-gray-600 mb-4">Conservative estimate for a Frenchie with typical health issues:</p>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>BOAS surgery (once)</span><span className="font-semibold">$3,000</span></li>
                <li className="flex justify-between"><span>Allergy management (per year)</span><span className="font-semibold">$1,500</span></li>
                <li className="flex justify-between"><span>Ear infections (per year)</span><span className="font-semibold">$500</span></li>
                <li className="flex justify-between"><span>Cherry eye surgery</span><span className="font-semibold">$1,000</span></li>
                <li className="flex justify-between border-t pt-2 mt-2"><span className="font-semibold">First few years total</span><span className="font-semibold text-brand-600">$8,000+</span></li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">This doesn't include IVDD or hip dysplasia, which could add $5,000-$15,000.</p>
            </div>

            <h2>How Pet Insurance Helps</h2>
            <p>
              Most French Bulldog health issues are covered by pet insurance if you enroll before symptoms appear. A policy costing $45-85/month could save you thousands on:
            </p>
            <ul>
              <li>BOAS surgery</li>
              <li>IVDD treatment or surgery</li>
              <li>Allergy medications (ongoing)</li>
              <li>Hip dysplasia treatment</li>
              <li>Cherry eye surgery</li>
            </ul>
            <p>
              The key is enrolling early—before conditions become pre-existing exclusions.
            </p>

            <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Find Coverage for Your Frenchie</h3>
              <p className="text-gray-600 mb-4">
                See which insurers best cover French Bulldog health issues—and what to watch out for in the fine print.
              </p>
              <Link href="/breeds/french-bulldog" className="btn-primary">
                French Bulldog Insurance Guide →
              </Link>
            </div>

          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 2026. Cost estimates based on national averages and may vary by location.
            </p>
          </footer>

        </div>
      </article>
    </Layout>
  )
}
