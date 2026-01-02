# Pet Insurance Comparison Site - MVP

A breed-focused pet insurance comparison site built with Next.js and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to see your site.

---

## Project Structure

```
pet-insurance-site/
├── content/
│   └── breeds/           # Breed data as JSON files
│       ├── french-bulldog.json
│       ├── golden-retriever.json
│       ├── german-shepherd.json
│       └── labrador-retriever.json
├── src/
│   ├── components/
│   │   └── Layout.js     # Header, footer, meta tags
│   ├── pages/
│   │   ├── _app.js       # App wrapper
│   │   ├── index.js      # Homepage
│   │   └── breeds/
│   │       ├── index.js  # All breeds listing
│   │       └── [slug].js # Dynamic breed pages
│   └── styles/
│       └── globals.css   # Tailwind + custom styles
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

---

## Adding New Breeds

1. Create a new JSON file in `content/breeds/`:

```bash
content/breeds/poodle.json
```

2. Use this template (copy from existing breed and modify):

```json
{
  "name": "Poodle",
  "slug": "poodle",
  "metaDescription": "SEO description for the page...",
  "intro": "Opening paragraph for the page...",
  "whyInsurance": "Why this breed needs insurance...",
  "topPicks": [
    { "name": "Provider Name", "highlight": "Best for X" }
  ],
  "healthIssues": [
    { "name": "Condition", "description": "What it is", "cost": "$X - $Y" }
  ],
  "mustHave": ["Coverage item 1", "Coverage item 2"],
  "redFlags": ["Thing to avoid 1", "Thing to avoid 2"],
  "providers": [
    {
      "name": "Provider Name",
      "tagline": "Best for X",
      "description": "Why this provider is good...",
      "cost": "$XX-XX/mo",
      "pros": ["Pro 1", "Pro 2"],
      "cons": ["Con 1", "Con 2"],
      "affiliateLink": "https://your-affiliate-link.com"
    }
  ],
  "costIntro": "Cost context for this breed...",
  "costByAge": [
    { "age": "Puppy (8 weeks - 1 year)", "range": "$XX - $XX/month" },
    { "age": "Adult (1-7 years)", "range": "$XX - $XX/month" },
    { "age": "Senior (8+ years)", "range": "$XX - $XX/month" }
  ],
  "faqs": [
    { "question": "Question?", "answer": "Answer." }
  ],
  "finalCta": "Closing call-to-action text...",
  "relatedBreeds": [
    { "name": "Related Breed", "slug": "related-breed" }
  ]
}
```

3. Rebuild the site:

```bash
npm run build
```

---

## Adding Affiliate Links

Replace the `"affiliateLink": "#"` placeholders with your actual affiliate links:

1. **Embrace**: https://www.embracepetinsurance.com (ShareASale, CJ Affiliate)
2. **Healthy Paws**: https://www.healthypawspetinsurance.com (Direct program)
3. **Pumpkin**: https://www.pumpkin.care (ShareASale)
4. **Pets Best**: https://www.petsbest.com (CJ Affiliate)
5. **Lemonade**: https://www.lemonade.com/pet (Direct program)
6. **Trupanion**: https://www.trupanion.com (Direct program)
7. **Figo**: https://www.figopetinsurance.com (Direct program)

**To apply:**
- ShareASale: https://www.shareasale.com
- CJ Affiliate: https://www.cj.com
- Or search "[Provider] affiliate program"

---

## Deploying to Vercel (Free)

### Option 1: GitHub + Vercel (Recommended)

1. Push code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/pet-insurance-site.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" → Import your repository

4. Click "Deploy" (default settings work fine)

5. Your site is live at `your-project.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

---

## Custom Domain

1. Buy a domain (Namecheap, Google Domains, Cloudflare, etc.)

2. In Vercel dashboard → Your Project → Settings → Domains

3. Add your domain and follow DNS instructions

---

## Next Steps

### Week 1-2: Content
- [ ] Add 10-15 more breed pages
- [ ] Apply to affiliate programs
- [ ] Add affiliate links once approved

### Week 3-4: Expand
- [ ] Add educational guides (`/guides/is-pet-insurance-worth-it`)
- [ ] Add provider review pages (`/reviews/embrace`)
- [ ] Add comparison pages (`/compare/embrace-vs-healthy-paws`)

### Month 2+: Grow
- [ ] Add state-specific pages (`/states/california`)
- [ ] Build email capture for newsletter
- [ ] Start link building / guest posting
- [ ] Add Google Analytics / Search Console

---

## Adding New Page Types

### Guide Pages

Create `src/pages/guides/[slug].js` similar to the breed template, with content in `content/guides/`.

### Review Pages

Create `src/pages/reviews/[slug].js` for individual provider reviews.

### Comparison Pages

Create `src/pages/compare/[slug].js` for head-to-head comparisons like "Embrace vs Healthy Paws".

---

## SEO Checklist

- [x] Unique title tags per page
- [x] Meta descriptions
- [x] Semantic HTML (h1, h2, h3 hierarchy)
- [x] Mobile responsive
- [ ] Add FAQ schema markup (see below)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console

### Adding FAQ Schema

Add this to your breed page `<Head>`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": breed.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    })
  }}
/>
```

---

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Content**: JSON files (can upgrade to CMS later)
- **Hosting**: Vercel (free tier)

---

## Need Help?

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs

---

## License

MIT - Do whatever you want with this.
