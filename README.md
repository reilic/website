# Sweet Atelier — Static Next.js cake business website

A responsive, single-page cake business website built with Next.js App Router and TypeScript. It is configured for static export so it can be hosted on GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the static site

```bash
npm run build
```

Next.js exports the static website to the `out/` directory.

## Deploy to GitHub Pages

1. Create a GitHub repository (for example, `sweet-atelier`).
2. Push this project to the repository's `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **GitHub Actions**.
5. Add the workflow below as `.github/workflows/deploy.yml`.
6. Commit and push. GitHub Actions will build and publish the site.

```yaml
name: Deploy Next.js static site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

### Important: repository name / project path

For a GitHub Pages project site at `https://USERNAME.github.io/REPOSITORY/`, set `basePath` and `assetPrefix` in `next.config.ts` to `'/REPOSITORY'` before building. For a user/organisation site at `https://USERNAME.github.io/`, no base path is needed. A custom domain also generally uses no project base path.

## Customise before publishing

- Replace **Sweet Atelier** with your business name in `app/page.tsx` and `app/layout.tsx`.
- Replace `hello@example.com` in the contact button with your real enquiry email.
- Update the cake descriptions, occasions, social links and contact details.
- Replace the CSS cake illustrations with your own cake photography when ready.
- The current site intentionally does not display prices because custom cake pricing depends on size, design and serving requirements.

## Notes

- This is a static marketing website. It does not include online checkout, customer accounts, a database or an order-management system.
- The contact button opens the visitor's email app. A hosted form service can be connected later if you want web-based enquiries.
- Google Fonts are loaded externally; the site uses system font fallbacks if they are unavailable.
