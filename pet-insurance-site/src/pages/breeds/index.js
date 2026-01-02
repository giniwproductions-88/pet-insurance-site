import Layout from '@/components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
  const breedsDirectory = path.join(process.cwd(), 'content/breeds')
  const filenames = fs.readdirSync(breedsDirectory)
  
  const breeds = filenames.map((filename) => {
    const filePath = path.join(breedsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const breed = JSON.parse(fileContents)
    
    return {
      name: breed.name,
      slug: breed.slug,
      metaDescription: breed.metaDescription,
      healthIssues: breed.healthIssues.slice(0, 3).map(h => h.name),
      costRange: breed.costByAge[1]?.range || '$40-80/mo',
    }
  })
  
  // Sort alphabetically
  breeds.sort((a, b) => a.name.localeCompare(b.name))
  
  return {
    props: {
      breeds,
    },
  }
}

export default function BreedsIndex({ breeds }) {
  return (
    <Layout
      title="Pet Insurance by Breed"
      description="Find the best pet insurance for your specific breed. Compare coverage, costs, and health risks for popular dog breeds."
    >
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-50 via-white to-forest-50 py-12 md:py-16">
        <div className="container-wide">
          <h1 className="text-gray-900 mb-4">Pet Insurance by Breed</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Every breed has different health risks. Find coverage recommendations tailored to your dog's specific needs.
          </p>
        </div>
      </section>

      {/* Breed Grid */}
      <section className="py-12">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {breeds.map((breed) => (
              <Link
                key={breed.slug}
                href={`/breeds/${breed.slug}`}
                className="card hover:shadow-md hover:border-brand-200 transition-all group"
              >
                <h2 className="text-lg font-semibold group-hover:text-brand-600 transition-colors mb-2">
                  {breed.name}
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  <strong>Common issues:</strong> {breed.healthIssues.join(', ')}
                </p>
                <p className="text-sm font-medium text-forest-600">
                  Est. cost: {breed.costRange}
                </p>
              </Link>
            ))}
          </div>

          {breeds.length < 10 && (
            <div className="mt-12 text-center p-8 bg-gray-50 rounded-xl">
              <p className="text-gray-600 mb-2">
                More breeds coming soon! We're adding new guides every week.
              </p>
              <p className="text-sm text-gray-500">
                Don't see your breed? Check back soon or start with a similar breed above.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <h2 className="text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-300 mb-6">
            Our guides break down exactly what to look for based on your breed's health risks.
          </p>
          <Link href="/guides/is-pet-insurance-worth-it" className="btn-primary">
            Is Pet Insurance Worth It? →
          </Link>
        </div>
      </section>
    </Layout>
  )
}
