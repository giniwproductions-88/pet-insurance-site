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
            Pet insurance isn't like human health insurance. Here's what you actually need to know.
          </p>
        </div>
      </section>

      {/* Key Difference */}
      <section className="py-12 bg-brand-50">
        <div className="container-narrow">
          <div className="flex items-start gap-4">
            <div className="text-4xl">🔑</div>
            <div>
              <h2 className="text-xl font-bold text-brand-800 mb-2">The Key Difference</h2>
              <p className="text-gray-700 leading-relaxed">
                Pet insurance is <strong>reimbursement-based</strong>. You pay the vet first, then submit a claim to get money back. No networks, no referrals — use any licensed vet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Numbers */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Three Numbers That Matter</h2>
          <p className="text-gray-600 text-center mb-12">Every policy has these three components</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-brand-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-brand-700 font-bold">$</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Deductible</h3>
              <p className="text-sm text-gray-600 mb-4">Amount you pay before insurance kicks in</p>
              <div className="text-2xl font-bold text-brand-600">$250-500</div>
              <div className="text-xs text-gray-500 mt-1">recommended</div>
            </div>

            <div className="bg-white border-2 border-forest-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-forest-700 font-bold">%</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Reimbursement</h3>
              <p className="text-sm text-gray-600 mb-4">Percentage insurance pays back</p>
              <div className="text-2xl font-bold text-forest-600">80-90%</div>
              <div className="text-xs text-gray-500 mt-1">most popular</div>
            </div>

            <div className="bg-white border-2 border-amber-200 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-700 font-bold">∞</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Annual Limit</h3>
              <p className="text-sm text-gray-600 mb-4">Max insurance pays per year</p>
              <div className="text-2xl font-bold text-amber-600">$15k+</div>
              <div className="text-xs text-gray-500 mt-1">or unlimited</div>
            </div>
          </div>

          {/* Example Box */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <span className="text-xl">📝</span> Example Claim
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-sm text-gray-500 mb-1">Surgery Cost</div>
                <div className="text-xl font-bold text-gray-900">$3,000</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">You Pay</div>
                <div className="text-xl font-bold text-red-600">$1,000</div>
                <div className="text-xs text-gray-500">$500 deductible + 20%</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Insurance Pays</div>
                <div className="text-xl font-bold text-forest-600">$2,000</div>
                <div className="text-xs text-gray-500">80% after deductible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's Covered?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-forest-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">✅</span>
                <h3 className="font-bold text-forest-800">Usually Covered</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Accidents</div>
                <div>• Illnesses</div>
                <div>• Surgery</div>
                <div>• Hospitalization</div>
                <div>• Prescriptions</div>
                <div>• X-rays, MRIs</div>
                <div>• Cancer treatment</div>
                <div>• Chronic conditions</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❌</span>
                <h3 className="font-bold text-red-800">Usually NOT Covered</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>• Pre-existing</div>
                <div>• Routine care*</div>
                <div>• Spay/neuter</div>
                <div>• Dental cleaning*</div>
                <div>• Breeding</div>
                <div>• Cosmetic</div>
                <div>• Food</div>
                <div>• Grooming</div>
              </div>
              <div className="text-xs text-gray-500 mt-3">*Unless you add wellness coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Waiting Periods */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⏱️</span>
            <h2 className="text-2xl font-bold text-gray-900">Waiting Periods</h2>
          </div>
          <p className="text-gray-600 mb-8">
            Coverage doesn't start immediately. This prevents people from buying insurance after their pet is already sick.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-forest-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-forest-700 mb-1">2-14 days</div>
              <div className="text-sm text-gray-600">Accidents</div>
            </div>
            <div className="bg-brand-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-brand-700 mb-1">14-30 days</div>
              <div className="text-sm text-gray-600">Illnesses</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-amber-700 mb-1">6-12 months</div>
              <div className="text-sm text-gray-600">Orthopedic (hips, knees)</div>
            </div>
            <div className="bg-red-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-red-700 mb-1">6-12 months</div>
              <div className="text-sm text-gray-600">Cruciate ligament</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>💡 Tip:</strong> Embrace has a 6-month orthopedic wait vs 12 months at most competitors. Important for breeds prone to hip issues.
            </p>
          </div>
        </div>
      </section>

      {/* Pre-Existing */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">⚠️</span>
            <h2 className="text-2xl font-bold">Pre-Existing Conditions</h2>
          </div>
          <p className="text-gray-300 text-lg mb-6">
            Anything diagnosed or showing symptoms before coverage started is <strong className="text-white">never covered</strong>.
          </p>
          <div className="bg-gray-800 rounded-xl p-6">
            <p className="text-gray-300">
              <strong className="text-white">This is why insuring early matters.</strong> Wait until your dog limps? Hip dysplasia becomes pre-existing. Insure as a puppy? Conditions that develop later are covered.
            </p>
          </div>
        </div>
      </section>

      {/* How to File */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to File a Claim</h2>
          
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1 text-center p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-700 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Pay Vet</h3>
              <p className="text-sm text-gray-500">You pay upfront</p>
            </div>
            <div className="hidden md:flex items-center text-gray-300">→</div>
            <div className="flex-1 text-center p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-700 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Get Records</h3>
              <p className="text-sm text-gray-500">Invoice + medical records</p>
            </div>
            <div className="hidden md:flex items-center text-gray-300">→</div>
            <div className="flex-1 text-center p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-700 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Submit</h3>
              <p className="text-sm text-gray-500">App or online portal</p>
            </div>
            <div className="hidden md:flex items-center text-gray-300">→</div>
            <div className="flex-1 text-center p-6">
              <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-brand-700 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">Get Paid</h3>
              <p className="text-sm text-gray-500">5-14 days typically</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-forest-50 border border-forest-200 rounded-lg text-center">
            <p className="text-sm text-forest-800">
              <strong>💡 Pro tip:</strong> Trupanion can pay vets directly so you don't front the money. Ask if your vet supports this.
            </p>
          </div>
        </div>
      </section>

      {/* Choosing Right Policy */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Choose the Right Policy</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-red-200">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">HIGH-RISK BREEDS</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Bulldogs, Cavaliers, Berners</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> 90% reimbursement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Unlimited coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Short ortho wait
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Hereditary covered
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-forest-200">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-forest-100 text-forest-700 text-xs font-semibold rounded-full">LOW-RISK BREEDS</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Healthy Mixed Breeds</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> 80% reimbursement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> $15k+ annual limit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Higher deductible OK
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-center mb-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">BUDGET-CONSCIOUS</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-4 text-center">Save on Premiums</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Accident-only option
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> $500-1k deductible
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-forest-500">✓</span> Skip wellness add-ons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Mistakes to Avoid</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Waiting too long</div>
                <div className="text-xs text-gray-600">Every vet visit creates potential pre-existing conditions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Choosing cheapest policy</div>
                <div className="text-xs text-gray-600">Low limits and exclusions leave you exposed</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Not reading exclusions</div>
                <div className="text-xs text-gray-600">Some exclude breed-specific conditions</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Adding unnecessary wellness</div>
                <div className="text-xs text-gray-600">Often costs more than it returns</div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <div className="font-semibold text-gray-800 text-sm">Ignoring ortho waits</div>
                <div className="text-xs text-gray-600">12 months is long if puppy develops issues at 8 months</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 bg-gray-100">
        <div className="container-narrow">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Quick Summary</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center text-sm">
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-800">Pay → Claim → Reimburse</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-800">$250-500 deductible</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-800">80-90% reimbursement</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-800">$15k+ or unlimited</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="font-semibold text-gray-800">Insure early!</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find the Right Coverage for Your Breed</h2>
          <p className="text-gray-600 mb-8">
            Different breeds need different coverage. Get specific recommendations for your pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/breeds" className="btn-primary">
              Find Your Breed →
            </Link>
            <Link href="/guides/is-pet-insurance-worth-it" className="btn-secondary">
              Is Insurance Worth It?
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
