# Portfolio and static MDX blog

The site uses Astro to build HTML pages. No application server is needed.
The home page is a portfolio. The post list is at `/blog/`.
The dark layout and table of contents are shared by all pages.

## Local commands

Use Node.js 26:

```sh
source "$HOME/.nvm/nvm.sh"
nvm use 26
vp install
vp run dev
```

Use `vp run dev`, `vp run build`, and `vp run preview` to run the Astro scripts.
The built-in `vp dev` and `vp build` commands do not run these scripts.

## Add a post

Create `blog/my-post.mdx`:

```mdx
---
title: "My new post"
description: "A short description."
date: 2026-09-20
---

Write your post here.

## First section

Use Markdown, code blocks, JSX, and MDX expressions.
```

The page is available at `/blog/my-post/`. Nested paths work too:
`blog/notes/my-post.mdx` becomes `/blog/notes/my-post/`.
Use lowercase file and folder names with hyphens. Keep each path unique.

Posts appear at `/blog/` in date order, newest first. The home page shows the
three most recent posts. Add `draft: true`
to exclude a post from both the list and the generated pages.
The required fields are `title`, `description`, and `date`. Invalid fields
stop the build. Use `##` and deeper headings for the table of contents.

MDX files can import `.astro` components and use them in the post.
Put static images in `public/` and link to them with `/image-name.png`.

Edit `src/pages/index.astro` to change the portfolio. Edit
`src/layouts/BlogLayout.astro` to change the shared title and navigation.
The file `blog/hello-world.mdx` is a sample post. Replace or delete it.

## Build and check

```sh
vp check
vp run build
vp run preview
```

The build runs `astro check`, then creates static pages in `docs/`.
Rebuild after source or content changes. Commit the generated `docs/` files
with those changes so GitHub Pages can publish them.
The site uses root-relative URLs for a root-domain site.

In the repository settings, open **Pages** and select **Deploy from a branch**.
Select the branch that contains the built files and `/docs` as the folder.
The build copies `public/.nojekyll` to `docs/.nojekyll` to disable Jekyll.

See the [Astro MDX documentation](https://docs.astro.build/en/guides/integrations-guide/mdx/)
for MDX syntax and component imports.
