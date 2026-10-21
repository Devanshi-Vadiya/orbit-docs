import Breadcrumbs from "@/components/breadcrumbs";
import Callout from "@/components/callout";

export default function AboutPage() {
  return (
    <main className="main-content">
      <Breadcrumbs
        items={[
          { label: "Orbit Docs", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="page-intro">
        <h1 className="page-title">About Orbit Docs</h1>
        <p className="page-description">
          Orbit Docs is a clean, developer-focused technical documentation and guides platform built using Next.js 16 and React 19.
        </p>
      </section>

      <div className="about-content-sections">
        <section className="article-section">
          <h2 className="section-heading">Project Goals & Overview</h2>
          <p className="article-paragraph">
            This project was developed as a college assignment demonstrating core Next.js App Router capabilities, including server-side rendering, dynamic route handling, shared layouts, and custom fallback boundaries.
          </p>
          <p className="article-paragraph">
            The architecture prioritizes code simplicity, maintainability, and clean UI engineering over complex enterprise abstractions.
          </p>
        </section>

        <Callout type="info" title="Student-First Design:">
          All code is structured with simple components, clean TypeScript interfaces, and native CSS to ensure high explainability during academic review.
        </Callout>

        <section className="article-section">
          <h2 className="section-heading">Technology Stack</h2>
          <ul className="about-tech-list">
            <li><strong>Next.js 16 (App Router):</strong> Leverages React Server Components, file-system routing, and dynamic catch-all segments.</li>
            <li><strong>React 19:</strong> Modern hooks, fast component rendering, and zero client hydration overhead for static docs.</li>
            <li><strong>TypeScript:</strong> Type-safe data models and component props.</li>
            <li><strong>Tailwind CSS &amp; Clean CSS:</strong> Responsive layout, crisp borders, and accessible color tokens.</li>
          </ul>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-left">
          <span className="footer-status-dot">●</span>
          <span>Orbit framework v1.0.4 stable release</span>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Devanshi-Vadiya/orbit-docs" target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        </div>
      </footer>
    </main>
  );
}
