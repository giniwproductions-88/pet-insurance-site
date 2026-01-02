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
      <article className="py-12">
        <div className="container-narrow prose prose-lg max-w-none">
          
          {/* Mission */}
          <h2>Our Mission</h2>
          <p>
            Pet insurance is confusing. Every provider claims to be the best, and generic "top 10" lists don't account for what makes your pet unique.
          </p>
          <p>
            A French Bulldog has completely different insurance needs than a Labrador. A policy that's perfect for one breed might be terrible for another.
          </p>
          <p>
            <strong>We exist to cut through the noise.</strong> Our breed-specific guides tell you exactly what coverage to prioritize, what to watch out for, and which providers best fit your pet's actual health risks.
          </p>

          {/* How We Review */}
          <h2>How We Evaluate Providers</h2>
          <p>
            We assess each insurance provider across multiple factors, with extra weight given to breed-specific considerations:
          </p>

          <h3>Coverage Quality</h3>
          <ul>
            <li>Hereditary and congenital condition coverage</li>
            <li>Chronic condition coverage</li>
            <li>Cancer treatment coverage</li>
            <li>Prescription medication coverage</li>
            <li>Annual and lifetime limits</li>
          </ul>

          <h3>Policy Terms</h3>
          <ul>
            <li>Waiting periods (especially orthopedic)</li>
            <li>Reimbursement rates available</li>
            <li>Deductible options</li>
            <li>Age restrictions</li>
            <li>Breed restrictions or exclusions</li>
          </ul>

          <h3>Value & Pricing</h3>
          <ul>
            <li>Premium costs relative to coverage</li>
            <li>Rate increase history</li>
            <li>Multi-pet discounts</li>
            <li>Overall value for specific breeds</li>
          </ul>

          <h3>Customer Experience</h3>
          <ul>
            <li>Claim processing speed</li>
            <li>Claim approval rates</li>
            <li>Customer service quality</li>
            <li>Mobile app and portal usability</li>
          </ul>

          {/* Breed-Specific Approach */}
          <h2>Why Breed-Specific Matters</h2>
          <p>
            Generic insurance reviews ignore a crucial fact: <strong>different breeds need different coverage.</strong>
          </p>
          
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="mt-0">Examples:</h3>
            <ul className="mb-0">
              <li><strong>French Bulldogs</strong> need coverage for BOAS surgery and spinal issues. A 12-month orthopedic wait is a dealbreaker.</li>
              <li><strong>Golden Retrievers</strong> need unlimited cancer coverage. A $10,000 annual limit isn't enough.</li>
              <li><strong>Cavalier King Charles Spaniels</strong> need heart and neurological coverage without caps.</li>
              <li><strong>Dachshunds</strong> need IVDD/back surgery coverage with short waiting periods.</li>
            </ul>
          </div>
          <p>
            We research each breed's specific health risks and recommend providers accordingly. A provider that's "best overall" might be terrible for your specific breed.
          </p>

          {/* Our Standards */}
          <h2>Our Editorial Standards</h2>
          
          <h3>Independence</h3>
          <p>
            Our recommendations are based on research, not on who pays us the most. We recommend providers based on fit for each breed, not commission rates.
          </p>

          <h3>Transparency</h3>
          <p>
            We clearly disclose when we use affiliate links (see below). Our opinions aren't for sale, but we do earn commissions when you purchase through our links.
          </p>

          <h3>Accuracy</h3>
          <p>
            We regularly review and update our content as providers change their policies. Insurance terms change—we work to keep our information current.
          </p>

          <h3>Honesty</h3>
          <p>
            We'll tell you when insurance isn't worth it. We'll point out provider weaknesses, not just strengths. Our goal is to help you make the right decision, even if that decision is "don't buy insurance."
          </p>

          {/* Affiliate Disclosure */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-10">
            <h2 className="text-amber-800 mt-0">Affiliate Disclosure</h2>
            <p>
              PetInsureCompare earns commissions when you purchase insurance through links on our site. This is how we keep the site running and our content free.
            </p>
            <p>
              <strong>Important:</strong> Affiliate relationships never influence our recommendations. We recommend providers based on what's best for your breed—not what pays us the most. Many providers we recommend highly have lower commissions than ones we recommend less frequently.
            </p>
            <p className="mb-0">
              Our business model only works if you trust our recommendations. We take that seriously.
            </p>
          </div>

          {/* Data Sources */}
          <h2>Our Research Sources</h2>
          <p>
            Our breed health information comes from:
          </p>
          <ul>
            <li>Orthopedic Foundation for Animals (OFA) database</li>
            <li>Breed-specific health studies and veterinary literature</li>
            <li>American Kennel Club breed health statements</li>
            <li>Breed club health surveys and data</li>
            <li>Veterinary cost databases</li>
            <li>Direct provider policy documents</li>
          </ul>

          {/* Contact */}
          <h2>Contact Us</h2>
          <p>
            Have questions, feedback, or corrections? We'd love to hear from you.
          </p>
          <p>
            <strong>Email:</strong> hello@comparepetinsure.com
          </p>

          {/* CTA */}
          <div className="mt-12 text-center not-prose">
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
