# Zack Stack Portfolio — Cloudflare Pages + GitHub

This is a Vite React site prepared for Cloudflare Pages.

## Local setup

```bash
npm install
npm run dev
```

## Cloudflare Pages setup via GitHub

1. Create a new GitHub repository.
2. Upload/push this project folder to that repo.
3. In Cloudflare, go to **Workers & Pages**.
4. Click **Create application** → **Pages**.
5. Choose **Connect to Git**.
6. Select your GitHub repo.
7. Use these build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
8. Deploy.

## Custom domain

After the first deployment, go to the Cloudflare Pages project:

**Custom domains** → **Set up a custom domain** → choose your domain/subdomain.

## Editing projects

Project data currently lives at the top of `src/main.jsx` inside the `rawProjects` TSV block.
Each row follows this order:

```text
Title    Type    Status    Link    Role    Company    Year    Thumbnail    Selected    Description
```

Separate fields are tab-separated.
Multiple media links can be placed in the Link field separated by spaces.

## Notes

- YouTube and Vimeo links are converted to embeds.
- IMDb and other non-embeddable links open as external links.
- The site uses plain CSS and React only; no Tailwind/shadcn dependency is required.
