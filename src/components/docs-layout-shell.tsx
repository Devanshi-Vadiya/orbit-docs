import SiteHeader from "@/components/site-header";
import DocsSidebar from "@/components/docs-sidebar";

interface DocsLayoutShellProps {
  children: React.ReactNode;
}

export default function DocsLayoutShell({ children }: DocsLayoutShellProps) {
  return (
    <div className="docs-app">
      <SiteHeader />
      <div className="docs-body">
        <DocsSidebar />
        <div className="main-content-wrapper">{children}</div>
      </div>
    </div>
  );
}
