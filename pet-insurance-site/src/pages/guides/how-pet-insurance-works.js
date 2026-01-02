import Layout from '@/components/Layout'
import Link from 'next/link'

export default function HowPetInsuranceWorks() {
  return (
    <Layout
      title="How Pet Insurance Works: A Complete Guide"
      description="Understand pet insurance basics: deductibles, reimbursement rates, waiting periods, exclusions, and how to actually use your policy when you need it."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-16">
        <div className="container-narrow">
          <Link href="/guides" className="text-brand-600 hover:text-brand-700 text-sm font-medium mb-4 inline-block">
            ← Back to Guides
          </Link>
          <h1 className="text-gray-900 mb-6">How Pet Insurance Works</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pet insurance isn't like human health insurance. Here's everything you need to know before you buy.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container-narrow">
          
          {/* Key Difference */}
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-brand-800 mb-3">The Key Difference from Human Insurance</h2>
            <p className="text-gray-700 leading-relaxed">
              Pet insurance is <strong>reimbursement-based</strong>. You pay the vet bill first, then submit a claim to get money back. There are no networks, no referrals, and you can use any licensed vet.
            </p>
          </div>

          {/* The Basics */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Three Numbers That Matter</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every pet insurance policy has three key components that determine what you pay and what you get back:
            </p>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. Annual Deductible</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  The amount you pay out-of-pocket before insurance kicks in each year. Common options: $100, $250, $500, $1,000.
                </p>
                <ul className="space-y-2 text-gray-600 ml-4 mb-4">
                  <li><strong>Lower deductible</strong> = Higher monthly premium, but insurance kicks in sooner</li>
                  <li><strong>Higher deductible</strong> = Lower monthly premium, but more out-of-pocket before coverage</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Our take:</strong> For most people, $250-$500 is the sweet spot. Anything lower usually isn't worth the premium increase.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. Reimbursement Rate</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  The percentage of covered costs the insurance pays back after your deductible. Common options: 70%, 80%, 90%.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 mb-2"><strong>Example:</strong> You have a $500 deductible and 80% reimbursement. Your dog needs $3,000 surgery.</p>
                  <ul className="space-y-1 text-gray-600 ml-4">
                    <li>You pay: $500 (deductible) + $500 (20% of remaining $2,500) = <strong>$1,000</strong></li>
                    <li>Insurance pays: <strong>$2,000</strong></li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Our take:</strong> 80% is the most popular choice. 90% costs more but is worth it for high-risk breeds.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Annual Limit</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  The maximum amount insurance will pay per year. Options range from $5,000 to unlimited.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>Our take:</strong> We recommend at least $15,000 or unlimited. Cancer treatment alone can exceed $10,000, and you don't want to hit your limit mid-treatment.
                </p>
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Typically Covered</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-forest-50 border border-forest-200 rounded-lg p-6">
                <h3 className="text-forest-800 font-semibold text-lg mb-4">✓ Usually Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Accidents (broken bones, lacerations, poisoning)</li>
                  <li>• Illnesses (infections, cancer, diabetes)</li>
                  <li>• Emergency care and surgery</li>
                  <li>• Hospitalization</li>
                  <li>• Prescription medications</li>
                  <li>• Diagnostic tests (X-rays, MRIs, bloodwork)</li>
                  <li>• Hereditary conditions (most policies)</li>
                  <li>• Chronic conditions</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-red-800 font-semibold text-lg mb-4">✗ Usually NOT Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pre-existing conditions</li>
                  <li>• Routine/wellness care (unless added)</li>
                  <li>• Spay/neuter</li>
                  <li>• Dental cleanings (unless added)</li>
                  <li>• Breeding costs</li>
                  <li>• Cosmetic procedures</li>
                  <li>• Food and supplements</li>
                  <li>• Grooming</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Waiting Periods */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Waiting Periods: The Fine Print That Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              After you buy a policy, there's a waiting period before coverage begins. This prevents people from buying insurance after their pet is already sick.
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Coverage Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Typical Waiting Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-3 px-4">Accidents</td><td className="py-3 px-4">2-14 days</td></tr>
                  <tr><td className="py-3 px-4">Illnesses</td><td className="py-3 px-4">14-30 days</td></tr>
                  <tr><td className="py-3 px-4">Orthopedic conditions (hips, knees)</td><td className="py-3 px-4">6-12 months</td></tr>
                  <tr><td className="py-3 px-4">Cruciate ligament issues</td><td className="py-3 px-4">6-12 months</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              <strong>Important:</strong> Orthopedic waiting periods vary significantly by insurer. Embrace has a 6-month wait; others require 12 months. If you have a breed prone to hip dysplasia, this matters a lot.
            </p>
          </section>

          {/* Pre-Existing Conditions */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Existing Conditions Explained</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A pre-existing condition is anything that showed symptoms or was diagnosed before coverage started (or during the waiting period). These are never covered.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>This is why insuring early matters.</strong> If you wait until your dog limps to buy insurance, hip dysplasia becomes pre-existing. But if you insure as a puppy, conditions that develop later are covered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Some conditions are considered "curable"—like a UTI that fully resolves. After a symptom-free period (usually 12 months), these may no longer be excluded.
            </p>
          </section>

          {/* How to File a Claim */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to File a Claim</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <p className="font-semibold text-gray-800">Pay your vet bill</p>
                  <p className="text-gray-600">You pay upfront, just like normal</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <p className="font-semibold text-gray-800">Get your records</p>
                  <p className="text-gray-600">Ask for an itemized invoice and medical records</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <p className="font-semibold text-gray-800">Submit your claim</p>
                  <p className="text-gray-600">Most insurers have apps or online portals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <p className="font-semibold text-gray-800">Wait for processing</p>
                  <p className="text-gray-600">Usually 5-14 days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-semibold">5</span>
                <div>
                  <p className="font-semibold text-gray-800">Get reimbursed</p>
                  <p className="text-gray-600">Direct deposit or check</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">
              <strong>Pro tip:</strong> Some insurers (like Trupanion) can pay the vet directly, so you don't have to front the money. Ask your vet if they support this.
            </p>
          </section>

          {/* Choosing the Right Policy */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Policy</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              The "best" policy depends on your specific situation:
            </p>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">For High-Risk Breeds (Bulldogs, Cavaliers, Berners)</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Choose 90% reimbursement</li>
                  <li>• Get unlimited annual coverage</li>
                  <li>• Look for shorter orthopedic waiting periods</li>
                  <li>• Confirm hereditary conditions are covered</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">For Healthy, Low-Risk Breeds</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• 80% reimbursement is usually fine</li>
                  <li>• $15,000+ annual limit</li>
                  <li>• Consider a higher deductible to lower premiums</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">For Budget-Conscious Pet Owners</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Accident-only coverage is cheaper than comprehensive</li>
                  <li>• Higher deductible ($500-$1,000) significantly lowers premiums</li>
                  <li>• Skip wellness add-ons (they rarely pay off)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold">1.</span>
                <p className="text-gray-600"><strong className="text-gray-800">Waiting too long to insure</strong> — Every vet visit creates potential pre-existing conditions</p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold">2.</span>
                <p className="text-gray-600"><strong className="text-gray-800">Choosing the cheapest policy</strong> — Low limits and exclusions can leave you exposed</p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold">3.</span>
                <p className="text-gray-600"><strong className="text-gray-800">Not reading the exclusions</strong> — Some policies exclude breed-specific conditions</p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold">4.</span>
                <p className="text-gray-600"><strong className="text-gray-800">Adding unnecessary wellness coverage</strong> — Do the math; it often costs more than it returns</p>
              </div>
              <div className="flex gap-4">
                <span className="flex-shrink-0 text-red-500 font-bold">5.</span>
                <p className="text-gray-600"><strong className="text-gray-800">Ignoring orthopedic waiting periods</strong> — 12 months is a long time if your puppy develops hip issues at 8 months</p>
              </div>
            </div>
          </section>

          {/* Summary Box */}
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-14">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Summary</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Pet insurance reimburses you after you pay the vet</li>
              <li>• Choose your deductible ($250-$500 recommended), reimbursement rate (80-90%), and annual limit ($15k+ or unlimited)</li>
              <li>• Waiting periods apply—insure early before issues develop</li>
              <li>• Pre-existing conditions are never covered</li>
              <li>• The right policy depends on your breed's specific risks</li>
            </ul>
          </div>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find the Right Coverage for Your Breed</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Now that you understand how insurance works, find the specific recommendations for your breed. We break down what to look for, what to avoid, and which providers are best for each breed's unique health risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/breeds" className="btn-primary text-center">
                Find Your Breed →
              </Link>
              <Link href="/guides/is-pet-insurance-worth-it" className="btn-secondary text-center">
                Is Insurance Worth It?
              </Link>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  )
}
