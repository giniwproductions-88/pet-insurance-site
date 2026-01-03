import Layout from '@/components/Layout'
import Link from 'next/link'

export default function EditorialPolicy() {
  return (
    <Layout
      title="Editorial Policy"
      description="How PetInsureCompare evaluates pet insurance providers. Our methodology, independence standards, and commitment to accuracy."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">Editorial Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            How we evaluate providers, maintain independence, and keep our content accurate.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow prose prose-lg">
          
          <h2>Editorial Independence</h2>
          
          <p>
            PetInsureCompare earns money through affiliate commissions when visitors purchase policies through our links. This is how we keep the site free to use.
          </p>
          
          <p>
            That said: <strong>affiliate relationships do not determine our rankings or recommendations.</strong>
          </p>
          
          <p>
            We evaluate providers based on coverage quality, cost, claims experience, and breed-specific suitability—not on who pays us the highest commission. If a provider offers a great product but no affiliate program, we'll still recommend them. If a partner offers weak coverage, we'll say so.
          </p>
          
          <p>
            There's no pay-for-placement on this site. Our recommendations reflect what we'd tell a friend.
          </p>

          <h2>How We Evaluate Providers</h2>
          
          <p>
            Pet insurance isn't one-size-fits-all. A French Bulldog needs different coverage than a Maine Coon. That's why we evaluate providers through a breed-specific lens.
          </p>
          
          <p>For each provider and breed combination, we consider:</p>
          
          <ul>
            <li><strong>Coverage scope</strong> — What's included? What's excluded? Does it cover hereditary conditions, chronic illness, and breed-specific health risks?</li>
            <li><strong>Cost</strong> — Premiums, deductibles, reimbursement rates, and annual limits. We look at real pricing, not marketing claims.</li>
            <li><strong>Waiting periods</strong> — How long before coverage kicks in? This matters especially for orthopedic and hereditary conditions.</li>
            <li><strong>Claims process</strong> — How easy is it to file? How fast do they pay? We review customer feedback and industry reputation.</li>
            <li><strong>Breed suitability</strong> — Does this provider make sense for your breed's specific health risks? A plan that excludes hip dysplasia isn't ideal for a German Shepherd.</li>
          </ul>
          
          <p>
            We apply the same evaluation framework to all providers. We don't assign arbitrary star ratings. Instead, we explain why a provider might be a good (or poor) fit for a specific breed's needs.
          </p>

          <h2>Accuracy & Fact-Checking</h2>
          
          <p>
            Pet insurance details change—rates adjust, coverage terms update, new providers enter the market. We take accuracy seriously.
          </p>
          
          <p>Our approach:</p>
          
          <ul>
            <li>Information is reviewed against insurer documentation, policy samples, and public disclosures</li>
            <li>Cost estimates are based on real quotes and industry data, not guesswork</li>
            <li>Health risk information comes from veterinary sources, breed clubs, and established medical literature</li>
            <li>When we're unsure, we say so</li>
          </ul>
          
          <p>
            If you spot an error, please <Link href="/contact">let us know</Link>. We'll investigate and correct it promptly.
          </p>

          <h2>How We Make Money</h2>
          
          <p>
            Transparency matters. Here's exactly how this site generates revenue:
          </p>
          
          <p>
            <strong>Affiliate commissions:</strong> When you click a link to a provider and purchase a policy, we may receive a commission from that provider. This doesn't cost you anything extra—you pay the same price as if you'd gone directly to their site.
          </p>
          
          <p>
            We participate in affiliate programs through networks like CJ Affiliate, Impact, and direct partnerships with insurers.
          </p>
          
          <p>
            <strong>What we don't do:</strong>
          </p>
          
          <ul>
            <li>Sell your personal information</li>
            <li>Accept payment for favorable reviews</li>
            <li>Let advertisers influence our editorial content</li>
            <li>Rank providers based on commission rates</li>
          </ul>
          
          <p>
            Our business model only works if you trust our recommendations. We take that seriously.
          </p>

          <h2>Content Standards</h2>
          
          <p>
            We hold ourselves to straightforward standards:
          </p>
          
          <ul>
            <li><strong>Honesty:</strong> We present both pros and cons. Every provider has strengths and weaknesses.</li>
            <li><strong>No misleading claims:</strong> We don't exaggerate savings, guarantee outcomes, or make promises we can't back up.</li>
            <li><strong>Factual basis:</strong> Comparisons are based on actual policy features, not marketing language.</li>
            <li><strong>Clarity:</strong> Insurance is confusing enough. We write in plain English.</li>
          </ul>

          <h2>How We Keep Content Current</h2>
          
          <p>
            Insurance products change. Rates shift. Providers update their terms.
          </p>
          
          <p>
            We review and update our content regularly to reflect current offerings. Each page displays when it was last reviewed. If something looks outdated, <Link href="/contact">contact us</Link> and we'll prioritize an update.
          </p>
          
          <p>
            Major changes—like a provider discontinuing coverage for certain conditions—are updated as soon as we become aware.
          </p>

          <h2>Our Commitment</h2>
          
          <p>
            This site exists because pet insurance is confusing and most comparison sites don't account for breed-specific needs. We're trying to fix that.
          </p>
          
          <p>
            We're not a massive media company. We're a small operation focused on doing this one thing well: helping pet owners find coverage that actually fits their breed's health risks.
          </p>
          
          <p>
            If we do our job right, you'll make a more informed decision—and your pet will be better protected.
          </p>
          
          <p className="text-gray-500 text-base mt-12">
            Questions about our editorial process? <Link href="/contact">Get in touch</Link>.
          </p>
          
          <p className="text-gray-400 text-sm mt-6">
            Last Updated: January 2026
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Ready to Compare?</h2>
          <p className="text-gray-600 mb-6">
            Find coverage recommendations tailored to your breed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/breeds" className="btn-primary">
              Dog Breeds →
            </Link>
            <Link href="/cats" className="btn-secondary">
              Cat Breeds →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
