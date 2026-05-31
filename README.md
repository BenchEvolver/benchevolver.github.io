# BenchEvolver — Project Page

Source for **https://benchevolver.github.io/**

> BenchEvolver: Frontier Task Synthesis via Solution-Centric Evolution
> UC Berkeley & Tsinghua IIIS, 2026

## Structure
```
index.html              # single-page site
static/css/style.css    # styles (dark, responsive)
static/js/main.js       # scroll reveal, count-ups, leaderboard, copy-bibtex
static/images/          # rasterized paper figures (PNG)
.nojekyll               # tells GitHub Pages to serve static/ verbatim
```

## Deploy (org root page)
This repo must be named **`benchevolver.github.io`** under the `BenchEvolver` org.

```bash
git init
git add -A
git commit -m "BenchEvolver project page"
git branch -M main
git remote add origin git@github.com:BenchEvolver/benchevolver.github.io.git
git push -u origin main
```
GitHub Pages: Settings → Pages → Source = `main` / root. Live within ~1 min.

## Preview locally
```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## TODO before launch
- Update the **Paper** / **arXiv** buttons in `index.html` with the real arXiv URL once posted.
- Confirm the Hugging Face dataset URL (`huggingface.co/BenchEvolver`).
