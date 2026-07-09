# localai.nz — cut two

Marketing site for Local AI, built with [Astro](https://astro.build). Ships plain, fast HTML — every page is fully visible to Google and AI search crawlers with no JavaScript required.

## Commands

```sh
npm install       # first time only
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into dist/
```

## Making changes

The design lives in components and styles; the *content* lives in small, editable files. Day-to-day changes should rarely touch HTML.

| I want to… | Edit |
|---|---|
| Publish a blog post | Add a Markdown file in `src/content/blog/` (see `example-post.md` for the format). Blog index, RSS, sitemap, and the nav link all update automatically. |
| Add or edit an FAQ | `src/data/faq.ts` — the accordion *and* the Google FAQ schema both update from this one file. |
| Change a service card | `src/data/services.ts` |
| Add a client review | `src/data/reviews.ts` — the reviews section appears on the home page automatically once the first review is added. |
| Add a case study | `src/content/case-studies/` (template inside). Pages get wired up when the first real one is ready. |
| Change ticker phrases or the tools list | `src/data/services.ts` |
| Edit page copy or layout | `src/pages/index.astro`, `src/pages/faq.astro` |
| Change shared nav/footer | `src/components/Nav.astro`, `src/components/Footer.astro` |
| Change titles/meta/social tags | Props passed to `BaseLayout` at the top of each page |

## Forms

The CTA form posts to Formspree endpoint `https://formspree.io/f/xeedlwnw` (same account as cut one). Submissions arrive with a `source` field of `Website CTA`.

## Deploying

The site deploys to Vercel as a standard Astro project (auto-detected, no config needed).

1. Push this folder to the GitHub repo Vercel already watches (replacing the cut-one files), **or** create a fresh repo and point the Vercel project at it.
2. Vercel builds with `npm run build` and serves `dist/` — defaults are correct.
3. After the first deploy: check `https://localai.nz/sitemap-index.xml` resolves, then submit it in Google Search Console.

## Copy rules (client-established, do not break)

- No em dashes in visible copy.
- Plain, human, NZ-English tone. No AI-sounding buzzwords.
- No prices anywhere except the footer paragraph ("under the $5,000 mark").
- Bio wording is deliberate ("I've spent years recruiting…", "a small team of AI engineers") — do not edit.
- Stats keep their source citations inline.
- Only publish reviews and case studies with the client's permission.
