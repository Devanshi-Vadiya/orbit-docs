import Link from "next/link";
import Breadcrumbs from "@/components/breadcrumbs";
import CodeBlock from "@/components/code-block";
import Callout from "@/components/callout";
import GuideFeedback from "@/components/guide-feedback";
import { dynamicRoutesGuide } from "@/data/docs";

export default function GuidesPage() {
  const guide = dynamicRoutesGuide;

  return (
    <main className="main-content guide-content">
      {/* Breadcrumbs matching Screenshot 2 */}
      <Breadcrumbs
        items={[
          { label: "Guides", href: "/guides" },
          { label: "Next.js" },
          { label: "App Router" },
          { label: "Dynamic Routes" },
        ]}
      />

      {/* Guide Meta Badge + Read time */}
      <div className="guide-meta-row">
        <span className="guide-badge">{guide.badge}</span>
        <span className="guide-read-time">{guide.readTime}</span>
      </div>

      {/* Title & Description */}
      <section className="page-intro guide-intro">
        <h1 className="page-title">{guide.title}</h1>
        <p className="page-description">{guide.description}</p>
      </section>

      {/* Prerequisite Callout */}
      <Callout type="info" title="Prerequisite Knowledge:">
        In the App Router, dynamic segments allow segments of your URL path to be variable without relying on query parameters. Dynamic segments are evaluated at request time or pre-rendered at build time with <code>generateStaticParams()</code>.
      </Callout>

      {/* Numbered Steps */}
      <div className="guide-steps-list">
        {guide.steps.map((step) => (
          <div key={step.number} className="guide-step-item">
            <h2 className="guide-step-title">
              <span className="step-number-badge">{step.number}</span>
              <span>{step.title}</span>
            </h2>
            <p className="article-paragraph">{step.description}</p>

            {step.codeBlock && (
              <div className="article-code-wrapper">
                <CodeBlock
                  filename={step.codeBlock.filename}
                  code={step.codeBlock.code}
                />
              </div>
            )}

            {step.table && (
              <div className="article-table-container">
                <table className="article-table">
                  <thead>
                    <tr>
                      {step.table.headers.map((head) => (
                        <th key={head}>{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {step.table.rows.map((row, idx) => (
                      <tr key={idx}>
                        <td>
                          <span className="table-link-code">{row.pattern}</span>
                        </td>
                        <td>{row.url}</td>
                        <td>
                          <code className="code-accent">{row.resolved}</code>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {step.warning && (
              <Callout type="warning" title={step.warning.title}>
                {step.warning.text}
              </Callout>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Pagination */}
      <div className="article-pagination">
        {guide.prev ? (
          <Link href={guide.prev.href} className="pagination-btn prev-btn">
            <span className="pagination-label">Previous</span>
            <span className="pagination-title">← {guide.prev.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {guide.next && (
          <Link href={guide.next.href} className="pagination-btn next-btn">
            <span className="pagination-label">Next</span>
            <span className="pagination-title">{guide.next.title} →</span>
          </Link>
        )}
      </div>

      {/* Guide Feedback Box matching Screenshot 2 */}
      <GuideFeedback />
    </main>
  );
}
