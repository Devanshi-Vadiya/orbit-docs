"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docNavigation } from "@/data/docs";

export default function DocsSidebar() {
  const pathname = usePathname();
  const isGuidesMode = pathname.startsWith("/guides");

  return (
    <aside className="sidebar">
      {/* Context header */}
      <div className="sidebar-header-box">
        {isGuidesMode ? (
          <>
            <span className="sidebar-context-badge">GUIDES CONTEXT</span>
            <div className="sidebar-title">Next.js App Router</div>
            <p className="sidebar-subtitle">v1.0 Architecture Guide</p>
          </>
        ) : (
          <>
            <div className="sidebar-title">Core Documentation</div>
            <p className="sidebar-subtitle">v1.0 Architecture Guide</p>
          </>
        )}
      </div>

      <div className="sidebar-divider" />

      {/* Navigation sections */}
      <div className="sidebar-nav-scroll">
        {docNavigation.map((section) => (
          <div className="sidebar-group" key={section.title}>
            <p className="sidebar-heading">{section.title}</p>
            {section.items.map((item) => {
              const isItemActive =
                pathname === item.href ||
                (item.href === "/docs/introduction" && pathname === "/") ||
                (item.href === "/docs/routing" && pathname === "/docs/routing");

              return (
                <div key={item.title} className="sidebar-item-wrapper">
                  <Link
                    href={item.href}
                    className={`sidebar-link ${isItemActive && !isGuidesMode ? "active" : ""}`}
                  >
                    <span className="sidebar-item-icon">{item.icon}</span>
                    <span className="sidebar-item-title">{item.title}</span>
                  </Link>

                  {/* Sub-items only appear in Guides mode matching Screenshot 2 */}
                  {item.subItems && isGuidesMode && (
                    <div className="sidebar-subitems">
                      {item.subItems.map((sub) => {
                        const isSubActive =
                          pathname === sub.href ||
                          (sub.title === "Dynamic Routes" && pathname.startsWith("/guides"));

                        return (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            className={`sidebar-sublink ${isSubActive ? "active" : ""}`}
                          >
                            {sub.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Bottom links */}
      <div className="sidebar-bottom">
        <a
          href="https://github.com/Devanshi-Vadiya/orbit-docs"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-bottom-link"
        >
          <span className="sidebar-bottom-icon">&lt; &gt;</span>
          <span>GitHub Repo</span>
        </a>
        <Link href="/docs/configuration" className="sidebar-bottom-link">
          <span className="sidebar-bottom-icon">▤</span>
          <span>API Reference</span>
        </Link>
      </div>
    </aside>
  );
}
