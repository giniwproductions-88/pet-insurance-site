import Layout from '@/components/Layout'
import Link from 'next/link'

export default function IsPetInsuranceWorthIt() {
  return (
    <Layout
      title="Is Pet Insurance Worth It? A Data-Driven Analysis"
      description="Find out if pet insurance makes financial sense for your situation. We break down the math, the risks, and when insurance is—and isn't—worth the cost."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-16">
        <div className="container-narrow">
          <Link href="/guides" className="text-brand-600 hover:text-brand-700 text-sm font-medium mb-4 inline-block">
            ← Back to Guides
          </Link>
          <h1 className="text-gray-900 mb-6">Is Pet Insurance Worth It?</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The honest answer: it depends. Here's how to figure out if it makes sense for you.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-12 bg-brand-50">
        <div className="container-narrow">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h2 className="text-xl font-bold text-brand-800 mb-2">The Short Answer</h2>
              <p className="text-gray-700 leading-relaxed">
                Pet insurance is worth it if you <strong>can't comfortably afford a $3,000-$10,000 emergency vet bill</strong> and you have a breed with elevated health risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Math */}
      <section className="py-16">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Let's Look at the Math</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-brand-600 mb-2">$30-60</div>
              <div className="text-gray-600">per month for insurance</div>
              <div className="text-sm text-gray-500 mt-2">~$3,600-$7,200 over 10 years</div>
            </div>
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">$3,000-$15,000</div>
              <div className="text-gray-600">for one major surgery</div>
              <div className="text-sm text-gray-500 mt-2">Cancer, ACL, bloat, back surgery</div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-800">Common Treatment Costs</h3>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between px-6 py-4">
                <span className="text-gray-700">ACL/Cruciate surgery</span>
                <span className="font-semibold text-gray-900">$3,000 - $6,000</span>
              </div>
              <div className="flex justify-between px-6 py-4 bg-gray-50">
                <span className="text-gray-700">Cancer treatment</span>
                <span className="font-semibold text-gray-900">$5,000 - $15,000+</span>
              </div>
              <div className="flex justify-between px-6 py-4">
                <span className="text-gray-700">Bloat surgery (GDV)</span>
                <span className="font-semibold text-gray-900">$2,500 - $7,500</span>
              </div>
              <div className="flex justify-between px-6 py-4 bg-gray-50">
                <span className="text-gray-700">Hip dysplasia surgery</span>
                <span className="font-semibold text-gray-900">$3,500 - $7,000</span>
              </div>
              <div className="flex justify-between px-6 py-4">
                <span className="text-gray-700">IVDD (back) surgery</span>
                <span className="font-semibold text-gray-900">$4,000 - $10,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Worth It */}
      <section className="py-16 bg-forest-50">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">✅</span>
            <h2 className="text-2xl font-bold text-gray-900">When Insurance IS Worth It</h2>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-7 h-7 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                You Have a High-Risk Breed
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  French Bulldogs, English Bulldogs
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  German Shepherds
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  Golden Retrievers
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  Cavalier King Charles Spaniels
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  Great Danes, Bernese Mountain Dogs
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-forest-500 rounded-full"></span>
                  Dachshunds
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                You Can't Absorb a $5,000+ Bill
              </h3>
              <p className="text-gray-600 text-sm ml-9">
                If an emergency surgery tomorrow would cause financial stress, insurance gives you peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                You'd Choose Treatment Over Euthanasia
              </h3>
              <p className="text-gray-600 text-sm ml-9">
                Insurance removes the impossible choice between your pet's health and your financial stability.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <span className="w-7 h-7 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                You're Getting a Puppy
              </h3>
              <p className="text-gray-600 text-sm ml-9">
                Insure early = no pre-existing conditions. Waiting periods finish before issues typically emerge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When NOT Worth It */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">⏸️</span>
            <h2 className="text-2xl font-bold text-gray-900">When Insurance May NOT Be Worth It</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">You Have Significant Savings</h3>
              <p className="text-gray-600 text-sm">
                $10,000+ in emergency funds? You might prefer to self-insure and come out ahead.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Low-Risk Mixed Breed</h3>
              <p className="text-gray-600 text-sm">
                Mixed breeds are healthier. A medium-sized mutt has lower expected costs.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Senior with Pre-Existing Conditions</h3>
              <p className="text-gray-600 text-sm">
                Existing issues won't be covered, and senior premiums are high. Consider a savings account instead.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Only Want Wellness Coverage</h3>
              <p className="text-gray-600 text-sm">
                Wellness plans rarely pay for themselves. Pay out of pocket for routine care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Real Value */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold mb-6">The Real Value of Pet Insurance</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-4">
            Insurance lets you say <span className="text-white font-semibold">"yes"</span> to treatment without hesitation.
          </p>
          <p className="text-gray-400">
            When your vet says "we can do surgery, it's $6,000" — you don't have to calculate. That peace of mind has real value, even if you never file a claim.
          </p>
        </div>
      </section>

      {/* Recommendation */}
      <section className="py-16">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-forest-50 border border-forest-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👍</span>
                <h3 className="font-bold text-forest-800">Get Insurance If...</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• You have a purebred or high-risk breed</li>
                <li>• You're getting a puppy</li>
                <li>• A $5,000 bill would hurt financially</li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">👋</span>
                <h3 className="font-bold text-gray-800">Skip It If...</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• You have substantial emergency savings</li>
                <li>• You have a healthy mixed breed</li>
                <li>• You're comfortable self-insuring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Coverage?</h2>
          <p className="text-gray-600 mb-8">
            The right policy depends on your breed. Find specific recommendations for your pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/breeds" className="btn-primary">
              Find Your Breed →
            </Link>
            <Link href="/guides/how-pet-insurance-works" className="btn-secondary">
              How Insurance Works
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
