# Japanese N5 & N4 – 3 Month Planner

A small React app to structure **90 days of Japanese study** from **JLPT N5 to early N4**.  
Each day has a button; click it to see **grammar**, **vocabulary**, and **example sentences** for that day.

This project was created manually in a Vite-style structure so you can install dependencies and run it yourself.

## Getting started

In your terminal:

```bash
cd /Users/jiapengyuan/Desktop/Project/japanese-jlpt-planner
npm install
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Project structure

- `src/App.jsx` – main UI with:
  - list of **Day 1–90** buttons
  - right-hand panel showing the selected day
- `src/data/lessons.js` – the **3‑month plan**:
  - first week has detailed N5 content (grammar, vocab, example sentences)
  - `fullPlan` automatically extends this into 90 days with review/custom days

You can edit `src/data/lessons.js` to:

- add more **detailed days** (copy Day 1–7 style)
- customise **N5 vs N4** split
- change notes / example sentences to match how you like to study

## Deploying to Vercel

1. **Commit & push to GitHub**

   ```bash
   cd /Users/jiapengyuan/Desktop/Project/japanese-jlpt-planner
   git init
   git add .
   git commit -m "Initial Japanese planner version"
   git branch -M main
   git remote add origin https://github.com/<your-username>/japanese-jlpt-planner.git
   git push -u origin main
   ```

2. **Create a Vercel project**

   - Go to `https://vercel.com` and log in with GitHub.
   - Click **New Project** → select your `japanese-jlpt-planner` repo.
   - Framework preset: **Vite** or **Other**.
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click **Deploy**.

Vercel will give you a URL (for example `https://japanese-jlpt-planner.vercel.app`) that you can use anywhere.


