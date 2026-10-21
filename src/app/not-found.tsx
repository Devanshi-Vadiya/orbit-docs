"use client";

import Link from "next/link";
import { useState } from "react";
import Breadcrumbs from "@/components/breadcrumbs";

export default function NotFound() {
  const [lookupPath, setLookupPath] = useState("/docs/routing/catch-all-param");

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    if (lookupPath.trim()) {
      window.location.href = lookupPath.startsWith("/") ? lookupPath : `/${lookupPath}`;
    }
  };

  const suggestions = [
    {
      icon: "↓",
      title: "Quickstart & Installation",
      description:
        "Step-by-step setup guide to initialize your Orbit project scaffolding, package requirements, and environment flags.",
      href: "/docs/installation",
    },
    {
      icon: "⑂",
      title: "Routing and Catch-All Rules",
      description:
        "Comprehensive overview of file-based routing protocols, dynamic segment syntax, and custom 404 fallback handlers.",
      href: "/docs/routing",
    },
    {
      icon: "⚙",
      title: "Configuration Reference",
      description: "Schema definitions, runtime parameters, and full schema dictionary for",
      codeTag: "orbit.config.ts",
      href: "/docs/configuration",
    },
  ];

  return (
    <main className="main-content not-found-page">
      {/* Breadcrumb Navigation matching screenshot */}
      <Breadcrumbs
        items={[
          { label: "Documentation", href: "/" },
          { label: "404 Not Found" },
        ]}
      />

      {/* Small Status Badge */}
      <div className="not-found-badge-wrapper">
        <span className="not-found-status-badge">STATUS: 404_PAGE_NOT_FOUND</span>
      </div>

      {/* Main 404 Heading & Description */}
      <section className="not-found-header">
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-lead">
          The documentation page you requested could not be located. The path may have changed or the slug identifier might be invalid.
        </p>
        <Link href="/" className="back-docs-link">
          ← Back to Documentation
        </Link>
      </section>

      {/* Horizontal Divider Line matching screenshot */}
      <hr className="not-found-divider" />

      {/* Quick Path Lookup Card */}
      <div className="lookup-card">
        <div className="lookup-header">
          <span className="lookup-header-title">QUICK PATH LOOKUP</span>
          <span className="lookup-header-meta">Search query cache</span>
        </div>
        <form onSubmit={handleLookup} className="lookup-body">
          <div className="lookup-input-wrapper">
            <svg
              className="lookup-search-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="lookup-input"
              value={lookupPath}
              onChange={(e) => setLookupPath(e.target.value)}
              placeholder="/docs/..."
              aria-label="Quick path lookup"
            />
          </div>
          <button type="submit" className="lookup-submit-btn">
            Search
          </button>
        </form>
      </div>

      {/* Suggested Articles Section */}
      <section className="suggested-section">
        <div className="suggested-header">
          <h2 className="suggested-title">Suggested articles</h2>
          <span className="suggested-subtitle">Frequently accessed resources</span>
        </div>

        <div className="suggested-list">
          {suggestions.map((item) => (
            <Link key={item.title} href={item.href} className="suggested-card">
              <div className="suggested-card-icon-box">
                <span className="suggested-card-icon">{item.icon}</span>
              </div>
              <div className="suggested-card-content">
                <h3 className="suggested-card-title">{item.title}</h3>
                <p className="suggested-card-desc">
                  {item.description}{" "}
                  {item.codeTag && (
                    <code className="suggested-code-tag">{item.codeTag}</code>
                  )}
                </p>
              </div>
              <span className="suggested-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Static Diagnostic Section matching screenshot */}
      <div className="diagnostic-log-block">
        <div className="diagnostic-header">
          <div className="diagnostic-header-left">
            <span className="diagnostic-dot">•</span>
            <span>orbit-diagnostic.log</span>
          </div>
          <span className="diagnostic-badge">HTTP 404</span>
        </div>
        <pre className="diagnostic-code">{`# Diagnostic router trace
$ orbit-cli verify --path "${lookupPath}"
ERR_ROUTER_SLUG_UNMATCHED: No route matching slug segment in manifest tree.
-> Suggested resolution: run orbit sync --manifest or inspect orbit.routes.json`}</pre>
      </div>

      {/* Footer matching screenshot */}
      <footer className="not-found-footer">
        <span className="footer-query-text">
          Looking for something specific that should be here?
        </span>
        <div className="not-found-footer-links">
          <a
            href="https://github.com/Devanshi-Vadiya/orbit-docs/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-item"
          >
            <span className="footer-icon">ⓘ</span> Report broken link
          </a>
          <span className="footer-dot-sep">·</span>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link-item"
          >
            <span className="footer-icon">💬</span> Community Discord
          </a>
        </div>
      </footer>
    </main>
  );
}
