import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Terms() {
  return (
    <Layout
      title="Terms of Service"
      description="Terms and conditions for using ComparePetInsure."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            The terms that govern your use of our site.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow prose prose-lg">
          
          <p className="text-gray-500">Effective Date: January 2026</p>

          <p>
            Welcome to ComparePetInsure. By accessing or using our website at comparepetinsure.com ("Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site.
          </p>

          <h2>About Our Service</h2>
          
          <p>
            ComparePetInsure provides educational content and comparison information about pet insurance products. We are <strong>not</strong> an insurance company, broker, or agent. We do not sell insurance policies or provide insurance advice.
          </p>
          <p>
            Our content is for informational purposes only and should not be considered a substitute for professional advice from a licensed insurance agent, veterinarian, or financial advisor.
          </p>

          <h2>No Professional Advice</h2>
          
          <p>
            The information on this Site:
          </p>
          <ul>
            <li>Is general in nature and may not apply to your specific situation</li>
            <li>Does not constitute insurance, financial, legal, or veterinary advice</li>
            <li>Should not be relied upon as the sole basis for purchasing decisions</li>
          </ul>
          <p>
            Always review policy documents directly with insurers and consult qualified professionals before making insurance decisions.
          </p>

          <h2>Accuracy of Information</h2>
          
          <p>
            We strive to provide accurate, up-to-date information. However:
          </p>
          <ul>
            <li>Insurance products, pricing, and availability change frequently</li>
            <li>Information may become outdated between our reviews</li>
            <li>We cannot guarantee the accuracy, completeness, or reliability of all content</li>
          </ul>
          <p>
            Always verify current terms, pricing, and coverage directly with insurance providers before purchasing a policy.
          </p>

          <h2>Affiliate Relationships</h2>
          
          <p>
            We earn money through affiliate commissions when you click links to insurance providers and purchase policies. This is disclosed in our <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> and <Link href="/editorial-policy">Editorial Policy</Link>.
          </p>
          <p>
            When you click an affiliate link, you leave our Site and enter a third-party website. We are not responsible for the content, privacy practices, or terms of third-party sites.
          </p>

          <h2>Third-Party Links</h2>
          
          <p>
            Our Site contains links to third-party websites, including insurance providers. These links are provided for convenience. We do not:
          </p>
          <ul>
            <li>Control or endorse third-party content</li>
            <li>Guarantee the accuracy of information on third-party sites</li>
            <li>Accept liability for your interactions with third parties</li>
          </ul>
          <p>
            Your use of third-party sites is governed by their respective terms and privacy policies.
          </p>

          <h2>Intellectual Property</h2>
          
          <p>
            All content on this Site—including text, graphics, logos, and design—is owned by ComparePetInsure or our licensors and is protected by copyright and other intellectual property laws.
          </p>
          <p>
            You may:
          </p>
          <ul>
            <li>View and print content for personal, non-commercial use</li>
            <li>Share links to our pages</li>
          </ul>
          <p>
            You may not:
          </p>
          <ul>
            <li>Reproduce, distribute, or republish content without permission</li>
            <li>Use our content for commercial purposes without written consent</li>
            <li>Remove copyright or attribution notices</li>
          </ul>

          <h2>User Conduct</h2>
          
          <p>
            When using our Site, you agree not to:
          </p>
          <ul>
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Interfere with the Site's operation or other users' access</li>
            <li>Transmit malware, spam, or harmful content</li>
            <li>Scrape or harvest content without permission</li>
            <li>Misrepresent your identity or affiliation</li>
          </ul>

          <h2>Disclaimer of Warranties</h2>
          
          <p>
            THE SITE AND ALL CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul>
            <li>MERCHANTABILITY</li>
            <li>FITNESS FOR A PARTICULAR PURPOSE</li>
            <li>NON-INFRINGEMENT</li>
            <li>ACCURACY OR RELIABILITY OF CONTENT</li>
          </ul>
          <p>
            We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPAREPETINSURE AND ITS OWNER(S), EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM:
          </p>
          <ul>
            <li>Your use of or inability to use the Site</li>
            <li>Any errors or omissions in content</li>
            <li>Any insurance decisions made based on our content</li>
            <li>Your interactions with third-party providers</li>
          </ul>
          <p>
            Our total liability for any claim arising from your use of the Site shall not exceed the amount you paid to us (if any) in the 12 months preceding the claim.
          </p>

          <h2>Indemnification</h2>
          
          <p>
            You agree to indemnify and hold harmless ComparePetInsure and its owner(s) from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your violation of these Terms or your use of the Site.
          </p>

          <h2>Changes to Terms</h2>
          
          <p>
            We may modify these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the modified Terms.
          </p>

          <h2>Governing Law</h2>
          
          <p>
            These Terms are governed by the laws of the United States. Any disputes arising from these Terms or your use of the Site shall be resolved in accordance with applicable law.
          </p>

          <h2>Severability</h2>
          
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
          </p>

          <h2>Contact</h2>
          
          <p>
            Questions about these Terms? Contact us at:
          </p>
          <p>
            <a href="mailto:hello@comparepetinsure.com">hello@comparepetinsure.com</a>
          </p>

          <p className="text-gray-400 text-sm mt-12">
            Last Updated: January 2026
          </p>

        </div>
      </section>
    </Layout>
  )
}
