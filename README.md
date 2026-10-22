# Michael Xiao — academic homepage

A responsive, accessible academic website for GitHub Pages, plus a matching GitHub profile introduction. Plain HTML, CSS and a small optional script; no build step or package installation.

## Preview locally

From this folder, run `python3 -m http.server 8000 --bind 127.0.0.1`, then open <http://127.0.0.1:8000>. Stop the server with Ctrl+C. You can also open `index.html` directly; citation copying may fall back to a download when opened as a file.

## Publish the website

1. Create a **public** repository owned by `MichaelXiao-GIS` named **`michaelxiao-gis.github.io`**.
2. Add `index.html`, `styles.css`, `script.js`, the `assets/` folder and the empty `.nojekyll` file to the repository’s `main` branch. This README and `.gitignore` may also be included. The `profile-readme/` folder belongs to the separate profile repository described below.
3. In the repository, choose **Settings → Pages → Build and deployment → Source → Deploy from a branch**.
4. Choose **main** and **/(root)**, then **Save**.
5. The intended address is <https://michaelxiao-gis.github.io/>. Check the Pages settings for the actual publication status; the address is not live until deployment succeeds.

Official instructions: [Create a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [Configure the publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Set up the GitHub profile introduction

1. Create a second **public** repository named **`MichaelXiao-GIS`**, owned by `MichaelXiao-GIS`.
2. Put the contents of `profile-readme/README.md` in its root `README.md`. GitHub displays this special repository’s README on your profile.
3. The academic website link in that introduction should point to the successfully published website.

Official instructions: [Manage your profile README](https://docs.github.com/en/account-and-profile/how-tos/profile-customization/managing-your-profile-readme).

## Update your content

- **Biography, research, experience, education and contact:** edit the labelled sections in `index.html`.
- **Publication:** edit the publication card in `index.html`, and update both `assets/publication.bib` and the citation in `script.js` so the download and copy button match.
- **Colours and typography:** edit the variables at the beginning of `styles.css`.
- **GitHub introduction:** edit the README in the separate profile repository after publishing it. The local source is `profile-readme/README.md`.
- **CV or portrait:** add your actual files before creating links or images. No placeholder CV, photograph or invented publication is included.

The site works without JavaScript. JavaScript adds citation copying and updates the footer year; without it, a BibTeX download link is available. Google Fonts is optional, with system and Georgia fallbacks. There are no analytics, cookies or API keys. The geographic hero is a decorative illustration, not a map of research results.

## Content sources

Checked on 22 October 2026:

- [UCL biography, appointments, education, research fields, email and ORCID](https://profiles.ucl.ac.uk/96557-michael-xiao/about)
- [UCL publication list](https://profiles.ucl.ac.uk/96557-michael-xiao/publications)
- [Publication record, authors, abstract and DOI](https://discovery.ucl.ac.uk/id/eprint/10224466/)
- [Public GitHub profile](https://github.com/MichaelXiao-GIS)
- [Geographic Data Service affiliation](https://geods.ac.uk/our-team/)

The UK Statistics Authority position is shown as a past appointment, with the July–October 2026 dates from the UCL profile. No unlisted dates, supervisors, awards or research outputs have been inferred. The repository showcase has been removed at the owner’s request. The affiliation strip identifies Social and Geographic Data Science at UCL and links to the Geographic Data Service (GeoDS).
