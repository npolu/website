---
title: 'How to add a new blog post (start here)'
description: 'A quick template you can copy. Adding a post is as simple as creating one markdown file in this folder.'
pubDate: 2026-05-01
tags: ['guide']
draft: false
---

Welcome to your blog. This post exists to show you how easy publishing is.

## Adding a new post

To publish a new article, create a new file in `src/content/blog/` ending in
`.md` — for example `my-new-post.md`. Copy the block at the top of this file (the
part between the `---` lines) and change the values:

- **title** — the headline of your post
- **description** — a one-sentence summary (shown in the list and previews)
- **pubDate** — the date, written as `YYYY-MM-DD`
- **tags** — any labels you like, in square brackets
- **draft** — set to `true` to hide a post while you work on it; `false` to publish

Everything below the second `---` is your article, written in Markdown.

## Markdown basics

You can write normally, and use simple formatting:

- **Bold** with `**double asterisks**`
- *Italics* with `*single asterisks*`
- Lists like this one
- [Links](https://example.com) with `[text](url)`

### Subheadings

Use `##` for a section heading and `###` for a smaller one.

> Use a `>` at the start of a line to create a quote like this.

That's it. Save the file, commit it to GitHub, and your site rebuilds and
publishes the new post automatically.
