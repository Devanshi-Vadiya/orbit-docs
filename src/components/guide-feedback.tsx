"use client";

import { useState } from "react";

export default function GuideFeedback() {
  const [response, setResponse] = useState<string | null>(null);

  return (
    <div className="guide-feedback-box">
      <span className="guide-feedback-question">Was this guide helpful?</span>
      <div className="guide-feedback-actions">
        {response ? (
          <span className="guide-feedback-thankyou">Thank you for your feedback!</span>
        ) : (
          <>
            <button
              type="button"
              className="feedback-btn feedback-positive"
              onClick={() => setResponse("positive")}
            >
              Yes, thanks!
            </button>
            <button
              type="button"
              className="feedback-btn feedback-neutral"
              onClick={() => setResponse("neutral")}
            >
              Could be better
            </button>
          </>
        )}
      </div>
    </div>
  );
}
