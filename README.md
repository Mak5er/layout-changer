# Layout Changer

Small tool for one very specific problem: you type something in the wrong keyboard layout, paste it here, and get the normal version back right away.

It converts text between English `QWERTY` and Ukrainian `ЙЦУКЕН` прямо в браузері, so nothing gets sent anywhere.

## What it does

- Converts text both ways: `QWERTY -> ЙЦУКЕН` and back
- Works instantly while you type
- Keeps everything local in the browser
- Looks clean on desktop and mobile

## Stack

- React
- TypeScript
- Vite

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Domain setup

Site metadata is driven by `VITE_SITE_URL`.

1. Copy `.env.example` to `.env`
2. Put your domain there
3. Run the app or build it

Example:

```env
VITE_SITE_URL=https://layout.mak5er.com
```

`robots.txt` and `sitemap.xml` are generated automatically from that value.
