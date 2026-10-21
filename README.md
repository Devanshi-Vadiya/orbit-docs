# Orbit Docs — Technical Documentation & Developer Guides

Orbit Docs is a modern, clean, and beginner-friendly developer documentation website built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

Developed as a college assignment, the project prioritizes readable code, simple component architecture, and intuitive file-system routing over complex external dependencies.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS & Vanilla CSS (Clean, modular classes)
- **State & Data:** Native React Server Components & local TypeScript data modules (zero external databases or state libraries)

---

## 📦 Getting Started

### 1. Prerequisites

Ensure you have Node.js (version 18.17 or later) installed on your machine:
```bash
node -v
npm -v
```

### 2. Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/Devanshi-Vadiya/orbit-docs.git
cd orbit-docs
npm install
```

### 3. Run Development Server

Start the local Next.js development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

To test the production build:
```bash
npm run build
npm run start
```

---

## 🗺️ Application Routes

| Route | Description | Template Reference |
| :--- | :--- | :--- |
| `/` | Documentation Overview Homepage | Matches Screenshot 3 (Cards, Quick Setup Terminal, Overview) |
| `/docs/routing` | Routing Documentation | Matches Screenshot 1 (Overview, Catch-all code, Path table, Route groups, Right-hand TOC) |
| `/docs/introduction` | Getting Started: Introduction | Documentation article layout |
| `/docs/installation` | Getting Started: Installation | Documentation article layout |
| `/docs/project-setup` | Getting Started: Project Setup | Documentation article layout |
| `/docs/layouts` | Core Concepts: Layouts | Documentation article layout |
| `/docs/data-fetching` | Core Concepts: Data Fetching | Documentation article layout |
| `/docs/configuration` | Reference: Configuration | Documentation article layout |
| `/docs/cli` | Reference: CLI Commands | Documentation article layout |
| `/guides` | Developer Guides (Dynamic Routes) | Matches Screenshot 2 (Numbered steps, tables, warning banner, feedback widget) |
| `/about` | Project About & Architecture info | Project overview and background |
| `/docs/invalid-path` | Custom 404 Fallback Boundary | Matches Screenshot 4 (`STATUS: 404_PAGE_NOT_FOUND`, lookup, suggestions, diagnostic log) |

---

## 📁 Project Structure

```text
orbit-docs/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout wrapping all pages in DocsLayoutShell
│   │   ├── globals.css             # Design system, typography, dark code blocks, responsive styles
│   │   ├── page.tsx                # Documentation homepage (Screenshot 3)
│   │   ├── not-found.tsx           # Custom 404 fallback page (Screenshot 4)
│   │   ├── about/
│   │   │   └── page.tsx            # About page
│   │   ├── docs/
│   │   │   ├── page.tsx            # Redirects /docs to /docs/introduction
│   │   │   └── [...slug]/
│   │   │       └── page.tsx        # Catch-all dynamic route for documentation articles (Screenshot 1)
│   │   └── guides/
│   │       ├── page.tsx            # Developer guides overview (Screenshot 2)
│   │       └── [...slug]/
│   │           └── page.tsx        # Dynamic guides viewer
│   ├── components/
│   │   ├── site-header.tsx         # Top navigation bar with active route highlighting
│   │   ├── docs-sidebar.tsx        # Left sidebar with Core Docs and Guides context modes
│   │   ├── docs-layout-shell.tsx   # Responsive shell connecting header, sidebar, and mobile drawer
│   │   ├── breadcrumbs.tsx         # Reusable navigation breadcrumbs
│   │   ├── code-block.tsx          # Dark code container with interactive copy-to-clipboard button
│   │   ├── callout.tsx             # Info and warning callout banners
│   │   └── guide-feedback.tsx      # "Was this guide helpful?" interactive feedback buttons
│   └── data/
│       └── docs.ts                 # Local dummy data for documentation articles, guides, and navigation
├── package.json
└── README.md
```

---

## 💡 Key Next.js Routing Concepts Explained

### 1. App Router File-System Routing
Directories in `src/app` map directly to URL routes. For example:
- `src/app/page.tsx` maps to `/`
- `src/app/about/page.tsx` maps to `/about`

### 2. Dynamic Catch-All Routes (`[...slug]`)
By placing a folder named `[...slug]` inside `src/app/docs/`:
- It matches single or nested sub-paths like `/docs/routing`, `/docs/installation`, and `/docs/core/routing`.
- The slug is accessible via `params.slug` as an array of strings.
- If the requested article is not found in our data dictionary, the page calls Next.js `notFound()`.

### 3. Custom 404 Fallback (`not-found.tsx`)
Whenever `notFound()` is invoked or an unknown URL is accessed, Next.js automatically displays `src/app/not-found.tsx`. This custom view features diagnostic traces, a quick path lookup, and suggested links.

### 4. Shared Persistent Layouts
`src/app/layout.tsx` renders the top navbar and responsive sidebar once. As users navigate between documentation pages, only the main content re-renders, providing instant transitions while preserving sidebar scroll position.

---

## 👩‍💻 Student Author

- **Author:** Devanshi Vadiya
- **Repository:** [https://github.com/Devanshi-Vadiya/orbit-docs](https://github.com/Devanshi-Vadiya/orbit-docs)
- **License:** MIT
