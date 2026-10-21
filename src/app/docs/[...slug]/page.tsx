import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CodeBlock from "@/components/code-block";
import Callout from "@/components/callout";
import { docsArticles } from "@/data/docs";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || [];

  // Match single-segment or multi-segment docs
  const slugKey = slugArray.join("/");
  const article = docsArticles[slugKey] || docsArticles[slugArray[0]];

  // If the article does not exist, trigger 404
  if (!article) {
    notFound();
  }

  return (
    <div className="article-layout">
      {/* Main article content column */}
      <main className="article-main">
        {/* Breadcrumbs matching Screenshot 1 */}
        <Breadcrumbs
          items={[
            { label: "Documentation", href: "/" },
            { label: article.category },
            { label: article.title },
          ]}
        />

        {/* Article Header */}
        <header className="article-header">
          <h1 className="article-title">{article.title}</h1>
          <p className="article-lead">{article.description}</p>
        </header>

        <hr className="article-divider" />

        {/* Render sections */}
        <div className="article-sections">
          {article.sections.map((section) => (
            <section
              key={section.heading}
              id={section.heading.toLowerCase().replace(/\s+/g, "-")}
              className="article-section"
            >
              <h2 className="section-heading">{section.heading}</h2>

              {section.content.map((paragraph, idx) => (
                <p key={idx} className="article-paragraph">
                  {paragraph}
                </p>
              ))}

              {section.note && (
                <Callout type={section.note.type} title={section.note.title}>
                  {section.note.text}
                </Callout>
              )}

              {section.codeBlock && (
                <div className="article-code-wrapper">
                  <CodeBlock
                    filename={section.codeBlock.filename}
                    code={section.codeBlock.code}
                  />
                </div>
              )}

              {section.table && (
                <div className="article-table-container">
                  <table className="article-table">
                    <thead>
                      <tr>
                        {section.table.headers.map((head) => (
                          <th key={head}>{head}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, idx) => (
                        <tr key={idx}>
                          <td>
                            <code>{row.pattern}</code>
                          </td>
                          <td>{row.url}</td>
                          <td>
                            <code className="code-accent">{row.params}</code>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Bottom Pagination Links */}
        <div className="article-pagination">
          {article.prev ? (
            <Link href={article.prev.href} className="pagination-btn prev-btn">
              <span className="pagination-label">Previous</span>
              <span className="pagination-title">← {article.prev.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {article.next && (
            <Link href={article.next.href} className="pagination-btn next-btn">
              <span className="pagination-label">Next</span>
              <span className="pagination-title">{article.next.title} →</span>
            </Link>
          )}
        </div>
      </main>

      {/* Right Sidebar: Table of Contents (On this page) matching Screenshot 1 */}
      {article.onThisPage && article.onThisPage.length > 0 && (
        <aside className="toc-sidebar">
          <div className="toc-title">ON THIS PAGE</div>
          <nav className="toc-nav">
            {article.onThisPage.map((item, index) => {
              // Highlight Catch-all Routes as in Screenshot 1
              const isHighlight = item.id === "catch-all-routes";
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`toc-link ${isHighlight ? "active" : ""}`}
                >
                  {item.title}
                </a>
              );
            })}
          </nav>

          <div className="toc-footer">
            <a
              href="https://github.com/Devanshi-Vadiya/orbit-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="toc-github-edit"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span>Edit this page on GitHub</span>
            </a>
          </div>
        </aside>
      )}
    </div>
  );
}
