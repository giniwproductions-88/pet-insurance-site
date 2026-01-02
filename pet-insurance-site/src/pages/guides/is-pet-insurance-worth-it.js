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

      {/* Content */}
      <article className="py-16">
        <div className="container-narrow">
          
          {/* Quick Answer */}
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-6 mb-12">
            <h2 className="text-xl font-bold text-brand-800 mb-3">The Short Answer</h2>
            <p className="text-gray-700 leading-relaxed">
              Pet insurance is worth it if you <strong>can't comfortably afford a $3,000-$10,000 emergency vet bill</strong> and you have a breed with elevated health risks. It's essentially a financial safety net that lets you make medical decisions based on what's best for your pet—not what's in your bank account.
            </p>
          </div>

          {/* The Math */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Look at the Math</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The average pet owner pays <strong>$30-60/month</strong> for comprehensive insurance. Over a 10-year pet lifespan, that's roughly <strong>$3,600-$7,200</strong> in premiums.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Meanwhile, here's what common treatments cost:
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Treatment</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Typical Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr><td className="py-3 px-4">ACL/Cruciate surgery</td><td className="py-3 px-4">$3,000 - $6,000</td></tr>
                  <tr><td className="py-3 px-4">Cancer treatment</td><td className="py-3 px-4">$5,000 - $15,000+</td></tr>
                  <tr><td className="py-3 px-4">Bloat surgery (GDV)</td><td className="py-3 px-4">$2,500 - $7,500</td></tr>
                  <tr><td className="py-3 px-4">Hip dysplasia surgery</td><td className="py-3 px-4">$3,500 - $7,000</td></tr>
                  <tr><td className="py-3 px-4">Foreign body removal</td><td className="py-3 px-4">$1,500 - $5,000</td></tr>
                  <tr><td className="py-3 px-4">IVDD (back) surgery</td><td className="py-3 px-4">$4,000 - $10,000</td></tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 leading-relaxed">
              One major incident can easily exceed what you'd pay in a lifetime of premiums. The question isn't whether expensive things <em>can</em> happen—it's how likely they are for <em>your</em> pet.
            </p>
          </section>

          {/* When It's Worth It */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When Pet Insurance IS Worth It</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. You Have a High-Risk Breed</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Some breeds are significantly more likely to need expensive care:
                </p>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li><strong>French Bulldogs, English Bulldogs</strong> — Breathing issues, spine problems, allergies</li>
                  <li><strong>German Shepherds</strong> — Hip dysplasia, degenerative myelopathy</li>
                  <li><strong>Golden Retrievers</strong> — Cancer (affects ~60% of the breed)</li>
                  <li><strong>Cavalier King Charles Spaniels</strong> — Heart disease, syringomyelia</li>
                  <li><strong>Great Danes, Bernese Mountain Dogs</strong> — Bloat, cancer, joint issues</li>
                  <li><strong>Dachshunds</strong> — Back problems (IVDD)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  If your breed has known expensive health issues, insurance is almost always worth it.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. You Can't Absorb a $5,000+ Bill</h3>
                <p className="text-gray-600 leading-relaxed">
                  Be honest: if your dog needed emergency surgery tomorrow, could you pay $5,000 without financial stress? If the answer is no, insurance provides valuable peace of mind.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. You'd Choose Treatment Over Euthanasia</h3>
                <p className="text-gray-600 leading-relaxed">
                  This is uncomfortable to think about, but it's real: without insurance, some pet owners face the choice of going into debt or putting down a treatable pet. Insurance removes that impossible decision.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4. You're Getting a Puppy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Insuring early means no pre-existing conditions and completed waiting periods before issues typically emerge. It's the ideal time to get coverage.
                </p>
              </div>
            </div>
          </section>

          {/* When It's NOT Worth It */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">When Pet Insurance May NOT Be Worth It</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">1. You Have Significant Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have $10,000+ in emergency savings and wouldn't blink at a large vet bill, you might prefer to self-insure. You'll likely come out ahead financially over your pet's lifetime.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2. You Have a Low-Risk, Mixed Breed</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mixed breeds are generally healthier than purebreds. If you have a medium-sized mutt with no known health issues, your expected costs are lower.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">3. Your Pet is Already Senior with Pre-Existing Conditions</h3>
                <p className="text-gray-600 leading-relaxed">
                  If your pet already has documented health issues, those won't be covered. And premiums for seniors are high. At this point, a dedicated savings account might make more sense.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4. You Only Want Wellness Coverage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wellness plans (covering vaccines, checkups, dental cleanings) rarely pay for themselves mathematically. You're usually better off paying out of pocket for routine care and insuring against accidents/illness only.
                </p>
              </div>
            </div>
          </section>

          {/* The Real Value */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Real Value of Pet Insurance</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Here's what the math doesn't capture: <strong>insurance lets you say "yes" to treatment without hesitation.</strong>
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              When your vet says "we can do surgery, it's $6,000," you don't have to calculate whether you can afford it. You don't have to choose between your pet's health and your financial stability.
            </p>
            <p className="text-gray-600 leading-relaxed">
              That peace of mind has real value—even if you never file a claim.
            </p>
          </section>

          {/* Our Recommendation */}
          <div className="bg-forest-50 border border-forest-200 rounded-lg p-6 mb-14">
            <h2 className="text-xl font-bold text-forest-800 mb-4">Our Recommendation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Get pet insurance if:</strong> You have a purebred or high-risk breed, you're getting a puppy, or you couldn't comfortably handle a $5,000 emergency bill.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Skip it if:</strong> You have substantial savings, a healthy mixed breed, and you're comfortable self-insuring against emergencies.
            </p>
          </div>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you've decided insurance makes sense, your next question is: which provider? The answer depends heavily on your specific breed.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              A French Bulldog needs different coverage than a Labrador. We break down exactly what to look for—and what to avoid—for each breed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/breeds" className="btn-primary text-center">
                Find Your Breed →
              </Link>
              <Link href="/guides/how-pet-insurance-works" className="btn-secondary text-center">
                Learn How Insurance Works
              </Link>
            </div>
          </section>

        </div>
      </article>
    </Layout>
  )
}
