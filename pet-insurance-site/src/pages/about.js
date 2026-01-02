import Layout from '@/components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout
      title="About Us & How We Review"
      description="Learn how PetInsureCompare evaluates pet insurance providers. Our methodology, standards, and commitment to honest recommendations."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">About PetInsureCompare</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We help pet owners find the right insurance coverage through honest, breed-specific recommendations.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container-narrow">
          
          {/* Mission */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Pet insurance is confusing. Every provider claims to be the best, and generic "top 10" lists don't account for what makes your pet unique.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A French Bulldog has completely different insurance needs than a Labrador. A policy that's perfect for one breed might be terrible for another.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong>We exist to cut through the noise.</strong> Our breed-specific guides tell you exactly what coverage to prioritize, what to watch out for, and which providers best fit your pet's actual health risks.
            </p>
          </section>

          {/* How We Review */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Evaluate Providers</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We assess each insurance provider across multiple factors, with extra weight given to breed-specific considerations:
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Coverage Quality</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Hereditary and congenital condition coverage</li>
                  <li>• Chronic condition coverage</li>
                  <li>• Cancer treatment coverage</li>
                  <li>• Prescription medication coverage</li>
                  <li>• Annual and lifetime limits</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Policy Terms</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Waiting periods (especially orthopedic)</li>
                  <li>• Reimbursement rates available</li>
                  <li>• Deductible options</li>
                  <li>• Age restrictions</li>
                  <li>• Breed restrictions or exclusions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Value & Pricing</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Premium costs relative to coverage</li>
                  <li>• Rate increase history</li>
                  <li>• Multi-pet discounts</li>
                  <li>• Overall value for specific breeds</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Experience</h3>
                <ul className="space-y-2 text-gray-600 ml-4">
                  <li>• Claim processing speed</li>
                  <li>• Claim approval rates</li>
                  <li>• Customer service quality</li>
                  <li>• Mobile app and portal usability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Breed-Specific Approach */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Breed-Specific Matters</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Generic insurance reviews ignore a crucial fact: <strong>different breeds need different coverage.</strong>
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Examples:</h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>French Bulldogs</strong> need coverage for BOAS surgery and spinal issues. A 12-month orthopedic wait is a dealbreaker.</li>
                <li><strong>Golden Retrievers</strong> need unlimited cancer coverage. A $10,000 annual limit isn't enough.</li>
                <li><strong>Cavalier King Charles Spaniels</strong> need heart and neurological coverage without caps.</li>
                <li><strong>Dachshunds</strong> need IVDD/back surgery coverage with short waiting periods.</li>
              </ul>
            </div>
            <p className="text-gray-600 leading-relaxed mt-6">
              We research each breed's specific health risks and recommend providers accordingly. A provider that's "best overall" might be terrible for your specific breed.
            </p>
          </section>

          {/* Our Standards */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Editorial Standards</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Independence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our recommendations are based on research, not on who pays us the most. We recommend providers based on fit for each breed, not commission rates.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We clearly disclose when we use affiliate links (see below). Our opinions aren't for sale, but we do earn commissions when you purchase through our links.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Accuracy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We regularly review and update our content as providers change their policies. Insurance terms change—we work to keep our information current.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Honesty</h3>
                <p className="text-gray-600 leading-relaxed">
                  We'll tell you when insurance isn't worth it. We'll point out provider weaknesses, not just strengths. Our goal is to help you make the right decision, even if that decision is "don't buy insurance."
                </p>
              </div>
            </div>
          </section>

          {/* Affiliate Disclosure */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-14">
            <h2 className="text-xl font-bold text-amber-800 mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PetInsureCompare earns commissions when you purchase insurance through links on our site. This is how we keep the site running and our content free.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Important:</strong> Affiliate relationships never influence our recommendations. We recommend providers based on what's best for your breed—not what pays us the most. Many providers we recommend highly have lower commissions than ones we recommend less frequently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our business model only works if you trust our recommendations. We take that seriously.
            </p>
          </div>

          {/* Data Sources */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Research Sources</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our breed health information comes from:
            </p>
            <ul className="space-y-2 text-gray-600 ml-4">
              <li>• Orthopedic Foundation for Animals (OFA) database</li>
              <li>• Breed-specific health studies and veterinary literature</li>
              <li>• American Kennel Club breed health statements</li>
              <li>• Breed club health surveys and data</li>
              <li>• Veterinary cost databases</li>
              <li>• Direct provider policy documents</li>
            </ul>
          </section>

          {/* Contact */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              Have questions, feedback, or corrections? We'd love to hear from you.
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> hello@comparepetinsure.com
            </p>
          </section>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-semibold mb-4">Ready to Find Coverage?</h2>
            <p className="text-gray-600 mb-6">
              Find breed-specific insurance recommendations tailored to your pet's health risks.
            </p>
            <Link href="/breeds" className="btn-primary">
              Browse by Breed →
            </Link>
          </div>

        </div>
      </article>
    </Layout>
  )
}
