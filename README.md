# Field Ledger

AI-powered impact & sustainability media intelligence platform built with Next.js, Cloudinary, and optional Claude vision analysis.

## Features

- Field photo/video upload to Cloudinary
- Project and location organization
- Searchable media evidence dashboard
- AI captions, tags, activity and condition notes
- Before/after evidence comparison
- Project-level reports with print/PDF support
- Source traceability through Cloudinary public IDs
- JSON metadata store with a clean path to a real database

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment

Copy `.env.example` to `.env.local` and configure Cloudinary. Claude analysis is optional.

## Demo data

```bash
npm run seed
```

The seed command requires Cloudinary credentials.

## Stack

Next.js 14 · React 18 · TypeScript · Cloudinary · optional Anthropic API
