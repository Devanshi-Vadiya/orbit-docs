
const sections = [
  {
    title: "Getting Started",
    description: "Quickstart guides, prerequisites, and initial project configuration.",
    link: "Start reading",
    href: "/docs/introduction",
    icon: "↳",
  },
  {
    title: "Core Concepts",
    description: "Deep dive into nested routing patterns, layouts, and data loading.",
    link: "Explore concepts",
    href: "/docs/routing",
    icon: "⑂",
  },
  {
    title: "Reference",
    description: "Configuration options, project settings, and CLI commands.",
    link: "View reference",
    href: "/docs/configuration",
    icon: "⚙",
  },
];

export default function Home() {
  return (
    <div className="docs-app">
      <header className="topbar">
        <a href="/" className="brand">
          <span className="brand-mark">O</span>
          Orbit Docs
        </a>

        <nav className="topbar-nav">
          <a className="active" href="/">Documentation</a>
          <a href="/guides">Guides</a>
          <a href="/about">About</a>
        </nav>

        <div className="topbar-actions">
          <input
            className="header-search"
            type="search"
            placeholder="Search documentation..."
            aria-label="Search documentation"
          />
          <span className="version">v1.0</span>
        </div>
      </header>

      <div className="docs-body">
        <aside className="sidebar">
          <div className="sidebar-title">Core Documentation</div>
          <p className="sidebar-subtitle">v1.0 Architecture Guide</p>

          <div className="sidebar-group">
            <p className="sidebar-heading">GETTING STARTED</p>
            <a className="sidebar-link active" href="/docs/introduction">
              ↳ &nbsp; Introduction
            </a>
            <a className="sidebar-link" href="/docs/installation">
              ↓ &nbsp; Installation
            </a>
            <a className="sidebar-link" href="/docs/project-setup">
              ▱ &nbsp; Project Setup
            </a>
          </div>

          <div className="sidebar-group">
            <p className="sidebar-heading">CORE CONCEPTS</p>
            <a className="sidebar-link" href="/docs/routing">
              ⑂ &nbsp; Routing
            </a>
            <a className="sidebar-link" href="/docs/layouts">
              ▣ &nbsp; Layouts
            </a>
            <a className="sidebar-link" href="/docs/data-fetching">
              ↻ &nbsp; Data Fetching
            </a>
          </div>

          <div className="sidebar-group">
            <p className="sidebar-heading">REFERENCE</p>
            <a className="sidebar-link" href="/docs/configuration">
              ⚙ &nbsp; Configuration
            </a>
            <a className="sidebar-link" href="/docs/cli">
              ▣ &nbsp; CLI Commands
            </a>
          </div>

          <div className="sidebar-bottom">
            <a href="https://github.com/Devanshi-Vadiya/orbit-docs">
              ↗ &nbsp; GitHub Repository
            </a>
            <a href="/api-reference">▤ &nbsp; API Reference</a>
          </div>
        </aside>

        <main className="main-content">
          <div className="breadcrumbs">
            <span>Orbit Docs</span>
            <span>/</span>
            <strong>Overview</strong>
          </div>

          <section className="page-intro">
            <h1>Documentation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Explore the architecture, setup guides, and references
              for building modern web applications.
            </p>
          </section>

          <section className="section-list">
            {sections.map((section) => (
              <article className="section-card" key={section.title}>
                <h2>
                  <span className="section-icon">{section.icon}</span>
                  {section.title}
                </h2>
                <p>{section.description}</p>
                <a href={section.href}>
                  {section.link} <span>→</span>
                </a>
              </article>
            ))}
          </section>

          <section className="info-panel">
            <h3>ⓘ &nbsp; Architecture Alignment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Review the project structure and configuration before
              getting started.
            </p>
          </section>

          <section className="terminal">
            <div className="terminal-heading">
              Terminal – Quick Setup
              <span>⌘ Copy</span>
            </div>
            <pre>{`$ npx create-next-app@latest my-app
$ cd my-app && npm run dev`}</pre>
          </section>

          <footer className="site-footer">
            <span>● &nbsp; Orbit Docs v1.0</span>
            <div>
              <a href="/license">Documentation License</a>
              <a href="/changelog">Changelog</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
