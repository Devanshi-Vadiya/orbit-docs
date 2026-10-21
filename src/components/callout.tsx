interface CalloutProps {
  type?: "info" | "warning";
  title: string;
  children: React.ReactNode;
}

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const isWarning = type === "warning";

  return (
    <div className={`callout-box ${isWarning ? "callout-warning" : "callout-info"}`}>
      <div className="callout-icon-col">
        {isWarning ? (
          <span className="callout-icon warning-icon">⚠</span>
        ) : (
          <span className="callout-icon info-icon">ⓘ</span>
        )}
      </div>
      <div className="callout-content">
        <strong className="callout-title">{title}</strong>{" "}
        <span className="callout-text">{children}</span>
      </div>
    </div>
  );
}
