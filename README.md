# Nagendra Polu — Personal Website

A fast, static personal site built with [Astro](https://astro.build). It showcases
your professional experience and includes a blog you can update just by adding
markdown files.

This README is written for someone who is **not** a professional developer. Take it
one section at a time.

---

## What's where (the only folders you'll touch)

| I want to... | Edit this |
| --- | --- |
| Change my name, title, summary, experience, skills, education | `src/data/site.ts` |
| Add or edit a blog post | files in `src/content/blog/` |
| Replace my CV download | put your PDF at `public/cv.pdf` |

Everything else is the website's machinery — you can ignore it.

---

## 1. Preview the site on your computer

You only need to do the install step **once**.

1. Install [Node.js](https://nodejs.org) (the "LTS" version) if you don't have it.
2. Open a terminal in this folder and run:

   ```bash
   npm install
   ```

3. Start the live preview:

   ```bash
   npm run dev
   ```

4. Open the address it prints (usually `http://localhost:4321`) in your browser.
   Leave this running — the page updates automatically as you edit files.

Press `Ctrl + C` in the terminal to stop the preview.

---

## 2. Update your CV details

Open `src/data/site.ts` in any text editor. It's organized into clearly labelled
sections: your name and contact info, the About paragraphs, Experience, Skills,
Education, and Certifications. Change the text between the quotes and save. The
preview updates instantly.

To update the downloadable CV, save your PDF as `cv.pdf` and drop it into the
`public/` folder, replacing the placeholder.

---

## 3. Add a new blog post

1. Go to `src/content/blog/`.
2. Make a copy of `welcome.md` and rename it, e.g. `my-first-post.md`
   (the file name becomes the web address, so keep it lowercase with dashes).
3. Edit the section at the top between the `---` lines:

   ```
   ---
   title: 'Your headline here'
   description: 'One sentence shown in the blog list.'
   pubDate: 2026-06-01
   tags: ['data integrity', 'csv']
   draft: false
   ---
   ```

4. Write your article below it using normal text (Markdown — see `welcome.md` for
   a cheat sheet).
5. Save. That's it — the post appears automatically, newest first.

> Tip: set `draft: true` to keep a post hidden while you work on it, then change it
> to `false` when you're ready to publish.

---

## 4. Put it online (deploy)

The easiest route is **Netlify** (free). You do this once.

1. Create the repository on GitHub: go to <https://github.com/new>, name it
   (e.g. `website`), and create it **empty** (don't add a README).
2. Push this project to it — see "Pushing to GitHub" below.
3. Go to <https://app.netlify.com> → **Add new site** → **Import an existing
   project** → connect GitHub → pick your repo.
4. Netlify reads the included `netlify.toml` automatically (build command
   `npm run build`, publish folder `dist`). Click **Deploy**.
5. Your site goes live at a `*.netlify.app` address. You can add a custom domain
   later in Netlify's settings.

(Vercel works the same way and a `vercel.json` is included if you prefer it.)

---

## 5. Update the live site after a change

Once deployed, updating is just three commands. Every push rebuilds and
republishes automatically — no manual upload.

```bash
git add .
git commit -m "Add new blog post"
git push
```

Wait about a minute and your change is live.

---

## Pushing to GitHub (first time)

Run these in a terminal in this folder, replacing the URL if your repo name
differs:

```bash
git remote add origin https://github.com/npolu/website.git
git branch -M main
git push -u origin main
```

After that, the three commands in section 5 are all you'll ever need.

---

Built with Astro · No tracking · Loads fast on any device.
