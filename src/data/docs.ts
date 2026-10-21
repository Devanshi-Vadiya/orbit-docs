// src/data/docs.ts
// Local dummy data for Orbit Docs documentation, guides, and navigation

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
  subItems?: { title: string; href: string }[];
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface DocSection {
  heading: string;
  content: string[];
  codeBlock?: {
    filename: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: { pattern: string; url: string; params: string }[];
  };
  note?: {
    type: "info" | "warning";
    title: string;
    text: string;
  };
}

export interface DocArticle {
  slug: string;
  title: string;
  category: string;
  description: string;
  readTime?: string;
  badge?: string;
  sections: DocSection[];
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  onThisPage?: { id: string; title: string }[];
}

// Sidebar navigation items
export const docNavigation: NavSection[] = [
  {
    title: "GETTING STARTED",
    items: [
      { title: "Introduction", href: "/docs/introduction", icon: "↳" },
      { title: "Installation", href: "/docs/installation", icon: "↓" },
      { title: "Project Setup", href: "/docs/project-setup", icon: "▱" },
    ],
  },
  {
    title: "CORE CONCEPTS",
    items: [
      {
        title: "Routing",
        href: "/docs/routing",
        icon: "⑂",
        subItems: [
          { title: "Defining Routes", href: "/docs/routing" },
          { title: "Dynamic Routes", href: "/guides/nextjs/app-router/dynamic-routes" },
          { title: "Parallel & Intercepting", href: "/docs/routing" },
        ],
      },
      { title: "Layouts", href: "/docs/layouts", icon: "▣" },
      { title: "Data Fetching", href: "/docs/data-fetching", icon: "↻" },
    ],
  },
  {
    title: "REFERENCE",
    items: [
      { title: "Configuration", href: "/docs/configuration", icon: "⚙" },
      { title: "CLI Commands", href: "/docs/cli", icon: "▣" },
    ],
  },
];

// Documentation articles
export const docsArticles: Record<string, DocArticle> = {
  routing: {
    slug: "routing",
    title: "Routing",
    category: "Core Concepts",
    description:
      "Orbit uses a file-system based routing mechanism with support for static paths, nested segments, and catch-all routes.",
    prev: { title: "Project Setup", href: "/docs/project-setup" },
    next: { title: "Layouts", href: "/docs/layouts" },
    onThisPage: [
      { id: "overview", title: "Overview" },
      { id: "catch-all-routes", title: "Catch-all Routes" },
      { id: "route-groups", title: "Route Groups" },
    ],
    sections: [
      {
        heading: "Overview",
        content: [
          "Every directory inside the app directory maps directly to a matching URL path segment. When an incoming request reaches your edge cluster, Orbit analyzes the matching segment tree and evaluates each layout node before rendering leaf page handlers.",
          "Route resolution runs deterministically with zero runtime regex overhead. Leaf pages defined via page.tsx or route.ts automatically export their execution strategy to either static edge renderers or dynamic compute clusters.",
        ],
        note: {
          type: "info",
          title: "Convention Note",
          text: "Orbit reserves system file identifiers including layout.tsx, loading.tsx, and error.tsx to isolate distinct lifecycle tiers.",
        },
      },
      {
        heading: "Catch-all Routes",
        content: [
          "Dynamic segments can be extended to catch all subsequent URL segments by prepending an ellipsis inside square brackets: [...slug]. The matched parameters are parsed into an array of path parts.",
        ],
        codeBlock: {
          filename: "app/[...slug]/page.tsx",
          code: `// app/[...slug]/page.tsx
export default function Page({ params }: { params: { slug: string[] } }) {
  return <div>Path: {params.slug.join('/')}</div>;
}`,
        },
        table: {
          headers: ["ROUTE PATH PATTERN", "EXAMPLE URL", "PARAMS OBJECT"],
          rows: [
            {
              pattern: "app/shop/[...slug]/page.tsx",
              url: "/shop/clothes",
              params: "{ slug: ['clothes'] }",
            },
            {
              pattern: "app/shop/[...slug]/page.tsx",
              url: "/shop/clothes/tops",
              params: "{ slug: ['clothes', 'tops'] }",
            },
          ],
        },
      },
      {
        heading: "Route Groups",
        content: [
          "Folders wrapped with parentheses, such as (marketing) or (dashboard), serve purely as organizational conventions and are omitted from the final URL path resolution. Refer to the nested layout hierarchy or explore multi-root application strategies for complex multi-tenant projects.",
        ],
      },
    ],
  },
  introduction: {
    slug: "introduction",
    title: "Introduction",
    category: "Getting Started",
    description:
      "Welcome to Orbit Docs. Orbit is a minimal, developer-friendly documentation architecture built on top of Next.js App Router.",
    prev: { title: "Overview", href: "/" },
    next: { title: "Installation", href: "/docs/installation" },
    onThisPage: [
      { id: "what-is-orbit", title: "What is Orbit" },
      { id: "key-features", title: "Key Features" },
    ],
    sections: [
      {
        heading: "What is Orbit",
        content: [
          "Orbit Docs provides a structured, modern layout for developer guides and technical specifications. It leverages React Server Components, file-system routing, and simple TypeScript types to deliver lightning-fast page transitions.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        ],
        note: {
          type: "info",
          title: "Architecture Philosophy",
          text: "Orbit keeps code understandable, modular, and beginner-accessible without heavy third-party state managers or unnecessary dependencies.",
        },
      },
      {
        heading: "Key Features",
        content: [
          "Built-in App Router support with static generation and dynamic routes.",
          "Lightweight styling with responsive layouts, accessible typography, and dark-themed code blocks.",
          "Custom fallback handling with dedicated 404 status screens and path lookup suggestions.",
        ],
      },
    ],
  },
  installation: {
    slug: "installation",
    title: "Installation",
    category: "Getting Started",
    description:
      "Get up and running with Orbit Docs in just a few simple steps using your preferred package manager.",
    prev: { title: "Introduction", href: "/docs/introduction" },
    next: { title: "Project Setup", href: "/docs/project-setup" },
    onThisPage: [
      { id: "prerequisites", title: "Prerequisites" },
      { id: "quickstart-command", title: "Quickstart Command" },
    ],
    sections: [
      {
        heading: "Prerequisites",
        content: [
          "Before installing Orbit Docs, make sure you have Node.js 18.17 or higher installed on your system. You can verify your version by running node -v in your terminal.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.",
        ],
      },
      {
        heading: "Quickstart Command",
        content: [
          "Create a new Orbit application using npx. The template prepares all default routes, configuration files, and theme styles automatically.",
        ],
        codeBlock: {
          filename: "Terminal — Setup",
          code: `$ npx orbit-cli create my-app --template standard
$ cd my-app
$ npm run dev`,
        },
      },
    ],
  },
  "project-setup": {
    slug: "project-setup",
    title: "Project Setup",
    category: "Getting Started",
    description:
      "Understand the directory structure, configuration conventions, and file placement inside Orbit.",
    prev: { title: "Installation", href: "/docs/installation" },
    next: { title: "Routing", href: "/docs/routing" },
    onThisPage: [
      { id: "folder-structure", title: "Folder Structure" },
      { id: "configuration-files", title: "Configuration Files" },
    ],
    sections: [
      {
        heading: "Folder Structure",
        content: [
          "The project is structured under the src directory following standard Next.js App Router guidelines. Pages, layouts, and route handlers reside in src/app, while reusable UI elements live in src/components.",
        ],
        codeBlock: {
          filename: "Directory Tree",
          code: `src/
├── app/
│   ├── docs/
│   │   └── [...slug]/page.tsx
│   ├── guides/
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── site-header.tsx
│   ├── docs-sidebar.tsx
│   ├── breadcrumbs.tsx
│   └── code-block.tsx
└── data/
    └── docs.ts`,
        },
      },
    ],
  },
  layouts: {
    slug: "layouts",
    title: "Layouts",
    category: "Core Concepts",
    description:
      "A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render.",
    prev: { title: "Routing", href: "/docs/routing" },
    next: { title: "Data Fetching", href: "/docs/data-fetching" },
    onThisPage: [
      { id: "root-layout", title: "Root Layout" },
      { id: "nested-layouts", title: "Nested Layouts" },
    ],
    sections: [
      {
        heading: "Root Layout",
        content: [
          "The root layout is defined at the top level of the app directory and applies to all routes. It must define html and body tags.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue.",
        ],
        codeBlock: {
          filename: "app/layout.tsx",
          code: `export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}`,
        },
      },
      {
        heading: "Nested Layouts",
        content: [
          "Layouts defined inside a folder (e.g. app/docs/layout.tsx) apply to specific route segments and render when those segments are active.",
        ],
      },
    ],
  },
  "data-fetching": {
    slug: "data-fetching",
    title: "Data Fetching",
    category: "Core Concepts",
    description:
      "Data fetching in Orbit Docs is simple, modular, and built on native React Server Components and async functions.",
    prev: { title: "Layouts", href: "/docs/layouts" },
    next: { title: "Configuration", href: "/docs/configuration" },
    onThisPage: [
      { id: "server-side-fetching", title: "Server-side Fetching" },
      { id: "local-data-stores", title: "Local Data Stores" },
    ],
    sections: [
      {
        heading: "Server-side Fetching",
        content: [
          "By using Server Components, data can be fetched directly on the server without client-side waterfalls, spinners, or extra state managers.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        ],
        codeBlock: {
          filename: "app/docs/[...slug]/page.tsx",
          code: `export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const article = getDocBySlug(slug.join('/'));
  return <article>{article.title}</article>;
}`,
        },
      },
    ],
  },
  configuration: {
    slug: "configuration",
    title: "Configuration",
    category: "Reference",
    description:
      "Configure global runtime settings, meta tags, and build flags using orbit.config.ts.",
    prev: { title: "Data Fetching", href: "/docs/data-fetching" },
    next: { title: "CLI Commands", href: "/docs/cli" },
    onThisPage: [
      { id: "config-overview", title: "Config Overview" },
      { id: "sample-settings", title: "Sample Settings" },
    ],
    sections: [
      {
        heading: "Config Overview",
        content: [
          "Orbit allows configuring global metadata, branding attributes, and route behavior from a single centralized TypeScript file.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
        codeBlock: {
          filename: "orbit.config.ts",
          code: `export const orbitConfig = {
  title: "Orbit Docs",
  version: "1.0.0",
  docsPath: "/docs",
  theme: "light",
  repository: "https://github.com/Devanshi-Vadiya/orbit-docs",
};`,
        },
      },
    ],
  },
  cli: {
    slug: "cli",
    title: "CLI Commands",
    category: "Reference",
    description:
      "Inspect, sync, build, and verify documentation routes with the Orbit CLI utility.",
    prev: { title: "Configuration", href: "/docs/configuration" },
    next: { title: "Overview", href: "/" },
    onThisPage: [
      { id: "available-commands", title: "Available Commands" },
      { id: "verification", title: "Verification" },
    ],
    sections: [
      {
        heading: "Available Commands",
        content: [
          "The Orbit CLI comes with built-in commands for checking route trees, validating slugs, and testing fallback boundaries.",
        ],
        codeBlock: {
          filename: "Terminal — CLI Commands",
          code: `$ orbit-cli verify --path "/docs/routing"
$ orbit-cli sync --manifest
$ orbit-cli build --static`,
        },
      },
    ],
  },
};

// Guide article data (Screenshot 2)
export interface GuideStep {
  number: number;
  title: string;
  description: string;
  codeBlock?: {
    filename: string;
    code: string;
  };
  table?: {
    headers: string[];
    rows: { pattern: string; url: string; resolved: string }[];
  };
  warning?: {
    title: string;
    text: string;
  };
}

export interface GuideArticle {
  title: string;
  badge: string;
  readTime: string;
  category: string;
  description: string;
  prerequisite: string;
  steps: GuideStep[];
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
}

export const dynamicRoutesGuide: GuideArticle = {
  title: "Dynamic Routes",
  badge: "GUIDE",
  readTime: "Estimated read: 4 min",
  category: "Guides / Next.js / App Router / Dynamic Routes",
  description:
    "Learn how to define dynamic route segments and handle catch-all parameters in nested application architectures.",
  prerequisite:
    "Prerequisite Knowledge: In the App Router, dynamic segments allow segments of your URL path to be variable without relying on query parameters. Dynamic segments are evaluated at request time or pre-rendered at build time with generateStaticParams().",
  steps: [
    {
      number: 1,
      title: "Creating the segment folder",
      description:
        "A Dynamic Segment can be created by wrapping a folder's name in square brackets: [id] or [slug]. For example, to handle an arbitrary project ID within Orbit, organize your app directory structure as follows:",
      codeBlock: {
        filename: "app/projects/[id]/page.tsx",
        code: `export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <section className="project-container">
      <h1>Active Project ID: {params.id}</h1>
    </section>
  );
}`,
      },
    },
    {
      number: 2,
      title: "Accessing route parameters",
      description:
        "Dynamic segment values are passed as the params object inside the page, layout, and metadata generator functions. In asynchronous environments, you resolve or destructure this object directly from your component arguments.",
      table: {
        headers: ["ROUTE PATTERN", "EXAMPLE URL", "RESOLVED PARAMS"],
        rows: [
          {
            pattern: "app/blog/[slug]/page.js",
            url: "/blog/hello-world",
            resolved: "{ slug: 'hello-world' }",
          },
          {
            pattern: "app/shop/[category]/[item]/page.js",
            url: "/shop/shoes/boots",
            resolved: "{ category: 'shoes', item: 'boots' }",
          },
        ],
      },
    },
    {
      number: 3,
      title: "Handling optional catch-all segments",
      description:
        "When building docs systems or multi-level CMS trees, paths can vary in depth. Use double brackets [[...slug]] to make catch-all segments optional, matching both the root parent path and arbitrarily nested sub-paths.",
      codeBlock: {
        filename: "app/docs/[[...slug]]/page.tsx",
        code: `type Props = {
  params: { slug?: string[] }
};

export default function DocsReader({ params }: Props) {
  const currentPath = params.slug ? params.slug.join('/') : 'index';
  return <article>Displaying documentation tree: {currentPath}</article>;
}`,
      },
    },
    {
      number: 4,
      title: "Providing fallback behavior",
      description:
        "When dynamic segments fail to resolve to a known record in your backend database or content source, trigger the standard notFound() boundary to render your application's customized not-found.tsx view immediately.",
      warning: {
        title: "Safety Tip:",
        text: "Never serve un-sanitized dynamic route parameters directly into raw HTML or arbitrary queries. Always validate incoming params using schemas like Zod or Orbit Schema Validator before performing IO operations.",
      },
    },
  ],
  prev: { title: "Defining Routes", href: "/docs/routing" },
  next: { title: "Parallel & Intercepting", href: "/docs/routing" },
};
