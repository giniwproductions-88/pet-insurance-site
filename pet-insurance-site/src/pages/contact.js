import Layout from '@/components/Layout'
import Link from 'next/link'

export default function Contact() {
  return (
    <Layout
      title="Contact Us"
      description="Have questions or feedback? Get in touch with the PetInsureCompare team."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-narrow">
          <h1 className="text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Questions, corrections, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container-narrow">
          
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                <p className="text-gray-600 mb-2">
                  For questions about pet insurance, our content, or anything else:
                </p>
                <a 
                  href="mailto:hello@comparepetinsure.com" 
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  hello@comparepetinsure.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Content Corrections</h3>
                <p className="text-gray-600 mb-2">
                  Spotted an error or outdated information? Let us know and we'll fix it promptly.
                </p>
                <a 
                  href="mailto:corrections@comparepetinsure.com" 
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  corrections@comparepetinsure.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business & Partnerships</h3>
                <p className="text-gray-600 mb-2">
                  For affiliate inquiries, partnership opportunities, or press requests:
                </p>
                <a 
                  href="mailto:partnerships@comparepetinsure.com" 
                  className="text-brand-600 hover:text-brand-700 font-medium"
                >
                  partnerships@comparepetinsure.com
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">
                We're a small team, but we read every message. Expect a response within 1-2 business days. For urgent corrections, we typically respond faster.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-2">Before You Reach Out</h3>
              <p className="text-gray-600 mb-4">
                These pages might answer your question:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-brand-600 hover:text-brand-700">
                    About Us
                  </Link>
                  <span className="text-gray-500"> — Who we are and why we built this site</span>
                </li>
                <li>
                  <Link href="/editorial-policy" className="text-brand-600 hover:text-brand-700">
                    Editorial Policy
                  </Link>
                  <span className="text-gray-500"> — How we evaluate providers</span>
                </li>
                <li>
                  <Link href="/guides/how-pet-insurance-works" className="text-brand-600 hover:text-brand-700">
                    How Pet Insurance Works
                  </Link>
                  <span className="text-gray-500"> — Pet insurance basics explained</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container-narrow text-center">
          <h2 className="mb-4">Looking for Insurance?</h2>
          <p className="text-gray-600 mb-6">
            Start with your breed—we'll show you what coverage to look for.
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
