"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  // Determine active section based on URL
  const isGuides = pathname.startsWith("/guides");
  const isAbout = pathname === "/about";
  const isDocs = !isGuides && !isAbout;

  return (
    <header className="topbar">
      <div className="topbar-left">
        {/* Brand Logo and Name */}
        <Link href="/" className="brand">
          <span className="brand-mark">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="#4f46e5" />
              <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
            </svg>
          </span>
          <span className="brand-text">Orbit Docs</span>
        </Link>

        {/* Flat navigation links - No dropdown menus */}
        <nav className="topbar-nav">
          <Link href="/" className={isDocs ? "active" : ""}>
            Documentation
          </Link>
          <Link href="/guides" className={isGuides ? "active" : ""}>
            Guides
          </Link>
          <Link href="/about" className={isAbout ? "active" : ""}>
            About
          </Link>
        </nav>
      </div>

      {/* Right-side search bar, version label, and terminal icon */}
      <div className="topbar-actions">
        <div className="header-search-wrapper">
          <svg
            className="search-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            className="header-search"
            type="search"
            placeholder={isGuides ? "Search guides, APIs, conf..." : "Search documentation..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search documentation"
          />
          <kbd className="search-shortcut">⌘K</kbd>
        </div>

        <span className="topbar-divider" />

        {/* Version label matching screenshot */}
        <span className="version-badge">Version 1.0</span>

        {/* Small terminal icon matching screenshot */}
        <Link
          href="/docs/cli"
          className="header-terminal-btn"
          aria-label="Orbit CLI Commands"
          title="CLI Commands"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m7 10 3 2-3 2" />
            <line x1="12" y1="16" x2="17" y2="16" />
          </svg>
        </Link>
      </div>
    </header>
  );
}
