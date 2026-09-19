# Luca Moresca — academic portfolio

This repository contains Luca Moresca's academic and technical portfolio,
built with the official HugoBlox Academic CV template and published at
<https://lucamoresca.github.io/>.

The site content is intentionally maintained in Markdown, YAML, and local
assets. Claims about projects, research, publications, and experience should
be backed by a source; incomplete records use explicit `TODO` markers.

## Local development

The project uses Hugo Extended and the repository's pinned pnpm lockfile.
Install the JavaScript dependencies with:

```sh
npx --yes pnpm@10.14.0 install --frozen-lockfile
```

Start a local preview:

```sh
hugo server -D
```

Create the production output:

```sh
hugo --minify
```

The GitHub Actions workflow in `.github/workflows/` builds and deploys the
site to GitHub Pages. Do not commit credentials, private CV data, or local
environment files.
