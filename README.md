# Ochiagha Nkiruka Favour — FASA Excel Global Enterprise

Responsive React + Vite personal-brand and business website with a FASA AI Assistant, supplied business photos, personal/journey photos, gallery, product catalogue, contact form and downloadable CV/life-story document.

## Important source rule
The site uses the supplied photos and keeps business/professional claims conservative. It does not invent prices, awards, testimonials, statistics, certifications, addresses or additional employment.

## Run locally
1. Install Node.js.
2. Run `npm install`.
3. Run `npm run dev` for the website.
4. Optional AI mode: copy `.env.example` to `.env`, set `OPENAI_API_KEY`, then run `npm run server` in another terminal. The browser will proxy `/api` to port 8787.
5. Never upload `.env` to GitHub.

## Photos
Website images are in `public/images/`. The newly supplied personal/journey photos were added as:
- `graduation-memories.jpg`
- `life-learning.jpg`
- `community-journey.jpg`
- `nysc-journey.jpg`
- `college-photo.jpg`

Business photos:
- `blocks.jpg`
- `cement.jpg`
- `provision-store.jpg`

## CV
The supplied CV/life-story document is available at `public/docs/Ochiagha-Nkiruka-Favour-CV-and-Life-Story.docx`.

## Chatbot
The floating FASA AI Assistant has a safe built-in fallback. For AI mode, use a server-side OpenAI API key. Do not place the key in React code, HTML or any public repository.
Website deployment setup.
