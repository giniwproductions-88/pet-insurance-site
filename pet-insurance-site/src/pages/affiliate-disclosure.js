import Layout from '@/components/Layout'
import Link from 'next/link'

export default function AffiliateDisclosure() {
  return (
    <Layout
      title="Affiliate Disclosure"
      description="How ComparePetInsure earns money and what that means for you."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">Affiliate Disclosure</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transparency about how we earn money.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow prose prose-lg">

          <h2>How We Make Money</h2>
          
          <p>
            ComparePetInsure is a free resource. We earn money through <strong>affiliate commissions</strong>.
          </p>
          
          <p>
            Here's how it works: when you click a link to a pet insurance provider on our site and purchase a policy, we may receive a commission from that provider. This is at no additional cost to you—you pay the same price as if you'd gone directly to their website.
          </p>

          <h2>Our Affiliate Partners</h2>
          
          <p>
            We participate in affiliate programs through:
          </p>
          <ul>
            <li><strong>CJ Affiliate (Commission Junction)</strong> — Programs including Pumpkin, Pets Best, Embrace, and others</li>
            <li><strong>Impact</strong> — Programs including Lemonade and others</li>
            <li><strong>Direct partnerships</strong> — Some insurance providers offer direct affiliate relationships</li>
          </ul>
          <p>
            Not all providers we mention have affiliate programs. When we recommend a provider without an affiliate relationship, it's because we genuinely think they're a good option—not because we're being paid.
          </p>

          <h2>What This Means for You</h2>
          
          <p><strong>You don't pay extra.</strong> Affiliate commissions come from the provider, not from you. Your policy cost is identical whether you click our link or go directly to the provider.</p>
          
          <p><strong>Our recommendations aren't for sale.</strong> Affiliate relationships do not determine our rankings or recommendations. We evaluate providers based on coverage quality, cost, claims experience, and breed-specific suitability—not commission rates. See our <Link href="/editorial-policy">Editorial Policy</Link> for details.</p>
          
          <p><strong>We disclose when links are affiliate links.</strong> Links to insurance providers on our site should be assumed to be affiliate links unless otherwise noted.</p>

          <h2>Why We Use Affiliate Links</h2>
          
          <p>
            Creating and maintaining in-depth, breed-specific insurance content takes time. Affiliate commissions allow us to:
          </p>
          <ul>
            <li>Keep the site free for visitors</li>
            <li>Research and update content regularly</li>
            <li>Add new breed pages and guides</li>
            <li>Operate without intrusive advertising</li>
          </ul>
          <p>
            We believe this model aligns our interests with yours: we only earn when you find a provider that works for you.
          </p>

          <h2>What We Won't Do</h2>
          
          <ul>
            <li>Recommend a provider solely because they pay higher commissions</li>
            <li>Hide or downplay a provider's weaknesses to drive clicks</li>
            <li>Exclude good providers just because they don't have affiliate programs</li>
            <li>Use misleading language to pressure you into clicking</li>
          </ul>

          <h2>FTC Compliance</h2>
          
          <p>
            This disclosure is provided in accordance with the Federal Trade Commission's (FTC) guidelines on affiliate marketing. The FTC requires that we disclose any material connection between us and the companies whose products we discuss.
          </p>
          <p>
            We are disclosing this: we may receive compensation when you click links on our site and purchase products.
          </p>

          <h2>Questions?</h2>
          
          <p>
            If you have questions about our affiliate relationships or how we make money, we're happy to explain. Reach out at <a href="mailto:hello@comparepetinsure.com">hello@comparepetinsure.com</a>.
          </p>

          <p className="text-gray-400 text-sm mt-12">
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
