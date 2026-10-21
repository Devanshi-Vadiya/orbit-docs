import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import Callout from "@/components/callout";
import CodeBlock from "@/components/code-block";

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
    description: "Deep dive into nested routing patterns, catch-all paths, and data loading.",
    link: "Explore concepts",
    href: "/docs/routing",
    icon: "⑂",
  },
  {
    title: "Reference",
    description: "Detailed configuration parameters, flags, and CLI commands.",
    link: "View reference",
    href: "/docs/configuration",
    icon: "⚙",
  },
];

export default function HomePage() {
  const terminalCode = `$ npx orbit-cli create my-app --template standard
$ cd my-app && npm run dev`;

  return (
    <main className="main-content">
      {/* Breadcrumbs matching Screenshot 3 */}
      <Breadcrumbs
        items={[
          { label: "Orbit Docs", href: "/" },
          { label: "Overview" },
        ]}
      />

      {/* Page Title & Intro */}
      <section className="page-intro">
        <h1 className="page-title">Documentation</h1>
        <p className="page-description">
          Welcome to Orbit Docs. Explore the core architecture, installation guides, and complete API references for building scalable modern web applications.
        </p>
      </section>

      {/* 3 Section Cards */}
      <section className="section-list">
        {sections.map((section) => (
          <article className="section-card" key={section.title}>
            <h2 className="section-card-title">
              <span className="section-card-icon">{section.icon}</span>
              <span>{section.title}</span>
            </h2>
            <p className="section-card-desc">{section.description}</p>
            <div className="section-card-footer">
              <Link href={section.href} className="section-card-link">
                <span>{section.link}</span>
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Architecture Alignment Notice */}
      <Callout type="info" title="Architecture Alignment">
        Orbit 1.0 utilizes unified server-driven component composition with strict compile-time static checks. Ensure you review the configuration parameters before migration.
      </Callout>

      {/* Quick Setup Terminal Box with interactive Copy button */}
      <div className="homepage-terminal-wrapper">
        <CodeBlock
          filename="Terminal — Quick Setup"
          code={terminalCode}
        />
      </div>

      {/* Site Footer */}
      <footer className="site-footer">
        <div className="footer-left">
          <span className="footer-status-dot">●</span>
          <span>Orbit framework v1.0.4 stable release</span>
        </div>
        <div className="footer-links">
          <Link href="/license">Documentation License</Link>
          <Link href="/changelog">Changelog</Link>
        </div>
      </footer>
    </main>
  );
}
