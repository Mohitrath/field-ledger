<div align="center">

# 🌱 Field Ledger

### **Turn field media into structured, searchable impact evidence.**

An AI-powered **impact & sustainability media intelligence platform** for collecting field photos and videos, organizing evidence by project and location, extracting AI insights, comparing before/after outcomes, and generating polished reports.

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Media%20Cloud-3448C5?style=for-the-badge&logo=cloudinary)](https://cloudinary.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](#license)

<br/>

**📸 Capture → 🧠 Analyze → 🔎 Search → 🔄 Compare → 📄 Report**

<br/>

<a href="https://github.com/Mohitrath/field-ledger">
  <strong>⭐ View Repository</strong>
</a>

</div>

---

## ✨ What is Field Ledger?

Field Ledger turns scattered field media into a structured **evidence ledger**.

Instead of keeping photos buried in folders, teams can upload media, associate it with a project and location, enrich it with AI-generated observations, connect **before/after evidence**, and produce a project report from the same source of truth.

### 🎯 Built for

- 🌳 Sustainability & environmental programs
- 🏗️ Infrastructure and development projects
- 🤝 NGO / social-impact organizations
- 🌊 Disaster response & recovery
- 🌾 Agriculture & rural development
- 📊 Impact measurement and reporting
- 🧪 Field research & evidence collection

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| 📤 **Field Media Upload** | Upload photos and videos directly to Cloudinary |
| 🗂️ **Project Organization** | Group evidence by project and location |
| 🔎 **Smart Search** | Search captions, tags, locations, activities and notes |
| 🧠 **AI Analysis** | Generate captions, tags, activity descriptions and condition notes |
| 🔄 **Before / After** | Link field assets into evidence pairs and compare outcomes |
| 🖼️ **Media Intelligence** | Open detailed media records with metadata and AI insights |
| 📝 **Field Notes** | Add human observations and manual tags |
| 📄 **Impact Reports** | Generate print-ready project reports and save them as PDF |
| ☁️ **Cloudinary Native** | Store and transform media efficiently through Cloudinary |
| 🔗 **Source Traceability** | Keep the original Cloudinary asset URL/public ID attached to evidence |

---

## 🖥️ Interface

### Dashboard

The central evidence workspace provides:

- Project navigation
- Media grid
- Search
- AI-analysis status
- Project statistics
- One-click media inspection
- Field-media upload

> 📸 **Add your dashboard screenshot here**
>
> `/docs/screenshots/dashboard.png`

### Media Intelligence

Each media record can expose:

- Original Cloudinary asset
- Project
- Location
- Capture date
- AI caption
- AI tags
- Observed activity
- Condition notes
- Manual field notes

> 📸 **Add your media-detail screenshot here**
>
> `/docs/screenshots/media-detail.png`

### Before / After

Compare evidence from different points in time using an interactive slider.

> 📸 **Add your before/after screenshot here**
>
> `/docs/screenshots/before-after.png`

### Impact Report

Generate a clean project report containing:

- Project overview
- Evidence statistics
- Before/after documentation
- Evidence gallery
- Captions and observations
- Print / PDF support

> 📸 **Add your report screenshot here**
>
> `/docs/screenshots/report.png`

---

## 🏗️ Architecture

```text
                         ┌──────────────────────┐
                         │     Field Ledger     │
                         │      Next.js UI      │
                         └──────────┬───────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
       ┌───────────┐         ┌────────────┐         ┌─────────────┐
       │ Cloudinary│         │  Next.js   │         │   Claude    │
       │   Media   │◄────────│ API Routes │────────►│ Vision AI   │
       └───────────┘         └─────┬──────┘         └─────────────┘
                                   │
                                   ▼
                            ┌──────────────┐
                            │ Evidence     │
                            │ Metadata     │
                            │ Store        │
                            └──────────────┘
```

### Data flow

```text
Upload
  │
  ▼
Cloudinary
  │
  ├── Media URL
  ├── Public ID
  ├── Dimensions
  └── Metadata
        │
        ▼
   Field Ledger
        │
        ├── Project
        ├── Location
        ├── Capture Date
        ├── Before / After Pair
        │
        ▼
     AI Analysis
        │
        ├── Caption
        ├── Tags
        ├── Activity
        └── Condition
        │
        ▼
   Search / Compare / Report
```

---

## 🧰 Tech Stack

### Frontend

- **Next.js 14**
- **React 18**
- **TypeScript**
- CSS Modules
- Responsive UI

### Backend

- Next.js App Router
- Route Handlers
- TypeScript APIs
- Local JSON evidence store

### Media

- **Cloudinary**
- Automatic image transformations
- Responsive thumbnails
- Original asset traceability

### AI

- **Anthropic Claude Vision API** — optional
- Cloudinary automatic tagging fallback

### Reporting

- Server-rendered project reports
- Browser print / Save as PDF

---

## 📁 Project Structure

```text
field-ledger/
│
├── app/
│   ├── api/
│   │   ├── analyze/
│   │   ├── compare/
│   │   ├── media/
│   │   └── projects/
│   │
│   ├── projects/
│   │   └── [project]/
│   │
│   ├── report/
│   │   └── [project]/
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BeforeAfterSlider.tsx
│   ├── DashboardClient.tsx
│   ├── FilterBar.tsx
│   ├── MediaCard.tsx
│   ├── MediaDetailModal.tsx
│   ├── MediaGrid.tsx
│   ├── ProjectClient.tsx
│   ├── Sidebar.tsx
│   └── UploadModal.tsx
│
├── lib/
│   ├── ai.ts
│   ├── cloudinary.ts
│   ├── cloudinaryClient.ts
│   ├── store.ts
│   └── types.ts
│
├── data/
│   └── media.json
│
├── scripts/
│   ├── load-env.mjs
│   └── seed-demo.mjs
│
├── .env.example
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## ⚡ Getting Started

### 1. Clone

```bash
git clone https://github.com/Mohitrath/field-ledger.git
cd field-ledger
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a local environment file:

```bash
cp .env.example .env.local
```

Then configure:

```env
# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=field_ledger_unsigned

# Optional AI analysis
ANTHROPIC_API_KEY=your-anthropic-api-key
```

> ⚠️ Never commit `.env.local` or production API secrets to GitHub.

### 4. Start development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧪 Demo Data

If you have configured Cloudinary credentials, you can seed sample field evidence:

```bash
npm run seed
```

This creates demonstration media for projects such as:

- **Riverbank Reforestation**
- **Community Well — Sector 4**
- **Flood Response — Northern District**

The generated records demonstrate project organization, AI metadata, and before/after evidence.

---

## 🔐 Environment Variables

| Variable | Required | Purpose |
|---|:---:|---|
| `CLOUDINARY_CLOUD_NAME` | ✅ | Cloudinary server configuration |
| `CLOUDINARY_API_KEY` | ✅ | Cloudinary API authentication |
| `CLOUDINARY_API_SECRET` | ✅ | Cloudinary server secret |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | ✅ | Client-side Cloudinary uploads |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | ✅ | Unsigned upload preset |
| `ANTHROPIC_API_KEY` | Optional | Claude-powered visual analysis |

---

## 🔄 Before / After Evidence

Field Ledger supports explicit evidence pairing.

Each asset can be assigned:

```text
Role
├── standalone
├── before
└── after
```

Assets belonging to the same transformation can share a:

```text
Pair ID
```

Example:

```text
Project: Riverbank Reforestation
Location: Sector 4

Pair ID: riverbank-sector4

BEFORE ──────────────── AFTER
Bare soil                Young saplings
Erosion                  Ground cover
Baseline                 Follow-up
```

This creates a visual evidence trail instead of treating photographs as isolated files.

---

## 📊 Impact Reporting

Every project can produce a report containing:

### Project summary

- Total evidence assets
- Number of locations
- Number of before/after pairs

### Visual evidence

- Before / after comparisons
- Evidence gallery
- AI-generated captions

### Output

Use the browser's:

**Print → Save as PDF**

to create a shareable report.

---

## 🧠 AI Analysis

When an Anthropic API key is configured, image analysis can produce structured observations such as:

```json
{
  "caption": "Young native saplings established along the riverbank.",
  "tags": [
    "riverbank",
    "reforestation",
    "saplings"
  ],
  "activity": "growth monitoring",
  "conditionNotes": "Visible canopy growth and reduced bare soil."
}
```

If AI analysis is unavailable, Cloudinary automatic tagging can provide a fallback enrichment path.

---

## ☁️ Cloudinary Integration

Field Ledger uses Cloudinary for:

- Media storage
- Secure URLs
- Image transformations
- Responsive thumbnails
- Original asset references
- Automatic tagging
- Upload handling

Images are transformed dynamically for different UI contexts rather than storing multiple resized copies.

---

## 🚀 Deployment

### Vercel

The application is designed for deployment on Vercel.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Configure the environment variables.
4. Deploy.

For production, configure the same variables listed in the **Environment Variables** section.

### Important

The included JSON store is suitable for development/demo usage. For a multi-user production deployment, replace it with a persistent database such as:

- PostgreSQL
- Supabase
- Neon
- PlanetScale
- MongoDB

A production database should also handle concurrent writes, authentication, permissions, and audit history.

---

## 🗺️ Roadmap

- [x] Field media upload
- [x] Cloudinary integration
- [x] Project organization
- [x] Search and filtering
- [x] AI metadata extraction
- [x] Before / after pairing
- [x] Interactive comparison
- [x] Project reports
- [x] Print / PDF output
- [ ] Authentication & role-based access
- [ ] PostgreSQL persistence
- [ ] Multi-user workspaces
- [ ] Evidence approval workflow
- [ ] Timeline visualization
- [ ] Map-based evidence explorer
- [ ] Advanced impact dashboards
- [ ] Export to CSV / JSON
- [ ] Audit trail

---

## 🤝 Contributing

Contributions are welcome.

```bash
# Fork the repository

git clone https://github.com/Mohitrath/field-ledger.git

cd field-ledger

npm install

npm run dev
```

Create a feature branch:

```bash
git checkout -b feature/your-feature
```

Commit your changes:

```bash
git add .
git commit -m "feat: add your feature"
```

Push:

```bash
git push origin feature/your-feature
```

Then open a Pull Request.

---

## 🛡️ Security

Please do **not** commit:

- API keys
- Cloudinary secrets
- `.env.local`
- Database credentials
- Private field evidence that should not be public

For security issues, please open a private report through GitHub where appropriate.

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

### 🌱 Field Ledger

**Evidence should be searchable.  
Impact should be measurable.  
Stories should be backed by sources.**

<br/>

Built with ❤️ using **Next.js + Cloudinary + AI**

<br/>

⭐ **If you find this project useful, consider giving it a star!**

</div>
