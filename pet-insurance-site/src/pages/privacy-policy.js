import Layout from '@/components/Layout'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacy Policy"
      description="How ComparePetInsure collects, uses, and protects your information."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Your privacy matters. Here's how we handle your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow prose prose-lg">
          
          <p className="text-gray-500">Effective Date: January 2026</p>

          <p>
            ComparePetInsure ("we," "our," or "us") operates the website comparepetinsure.com. This Privacy Policy explains what information we collect, how we use it, and your choices regarding that information.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <p>
            We collect information you voluntarily provide, such as:
          </p>
          <ul>
            <li>Email address (if you contact us)</li>
            <li>Any other information you include in communications with us</li>
          </ul>
          <p>
            We do not require account creation to use this site. We do not collect sensitive personal information like Social Security numbers, financial account details, or health records.
          </p>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our site, we may automatically collect:
          </p>
          <ul>
            <li><strong>Usage data:</strong> Pages visited, time spent on pages, click patterns</li>
            <li><strong>Device information:</strong> Browser type, operating system, device type</li>
            <li><strong>Location data:</strong> General geographic location based on IP address (country/region level, not precise location)</li>
          </ul>
          <p>
            This information is collected through cookies and similar technologies. See the Cookies section below for more details.
          </p>

          <h2>How We Use Your Information</h2>
          
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and communications</li>
            <li>Improve our website content and user experience</li>
            <li>Analyze site traffic and usage patterns</li>
            <li>Detect and prevent technical issues or abuse</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <h2>Affiliate Links & Third Parties</h2>
          
          <p>
            Our site contains affiliate links to pet insurance providers. When you click these links:
          </p>
          <ul>
            <li>You leave our site and enter a third-party website</li>
            <li>That third party's privacy policy governs their data collection</li>
            <li>We may receive information that a referral occurred (but not your personal details)</li>
          </ul>
          <p>
            We participate in affiliate programs through networks including CJ Affiliate and Impact. These networks may use cookies to track referrals. See their respective privacy policies for details on their data practices.
          </p>

          <h2>Cookies</h2>
          
          <p>
            Cookies are small text files stored on your device. We use them for:
          </p>
          <ul>
            <li><strong>Analytics:</strong> Understanding how visitors use our site (via Google Analytics or similar services)</li>
            <li><strong>Affiliate tracking:</strong> Crediting referrals to our affiliate partners</li>
            <li><strong>Functionality:</strong> Remembering your preferences</li>
          </ul>
          
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect site functionality.
          </p>

          <h3>Analytics</h3>
          <p>
            We use analytics services (such as Google Analytics) to understand site usage. These services may collect information about your online activities across different websites. Google's privacy policy is available at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
          </p>

          <h2>Data Retention</h2>
          
          <p>
            We retain personal information only as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law. Communications (like emails) are typically retained for up to 2 years for reference purposes.
          </p>

          <h2>Your Rights & Choices</h2>
          
          <p>
            Depending on your location, you may have rights regarding your personal information:
          </p>
          <ul>
            <li><strong>Access:</strong> Request a copy of information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Opt-out:</strong> Opt out of certain data collection (e.g., via browser settings or cookie controls)</li>
          </ul>
          <p>
            To exercise these rights, contact us at <a href="mailto:privacy@comparepetinsure.com">privacy@comparepetinsure.com</a>.
          </p>

          <h3>California Residents</h3>
          <p>
            Under the California Consumer Privacy Act (CCPA), California residents have additional rights, including the right to know what personal information is collected and the right to request deletion. We do not sell personal information as defined by the CCPA.
          </p>

          <h3>European Visitors</h3>
          <p>
            If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the rights listed above. Our legal basis for processing your information is legitimate interest (improving our services) and, where applicable, your consent.
          </p>

          <h2>Children's Privacy</h2>
          
          <p>
            Our site is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child, please contact us immediately.
          </p>

          <h2>Security</h2>
          
          <p>
            We use reasonable measures to protect information from unauthorized access or disclosure. However, no internet transmission is completely secure. We cannot guarantee absolute security of data transmitted to our site.
          </p>

          <h2>Changes to This Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the updated policy.
          </p>

          <h2>Contact Us</h2>
          
          <p>
            Questions about this Privacy Policy? Contact us at:
          </p>
          <p>
            <a href="mailto:privacy@comparepetinsure.com">privacy@comparepetinsure.com</a>
          </p>

          <p className="text-gray-400 text-sm mt-12">
            Last Updated: January 2026
          </p>

        </div>
      </section>
    </Layout>
  )
}
