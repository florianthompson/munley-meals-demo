"use client";

import { useMemo } from "react";

export default function Home() {
  const src = useMemo(() => "/munley-source.html", []);

  return (
    <main style={{ width: "100%", height: "100vh", margin: 0, padding: 0, background: "#faf9f6" }}>
      <iframe
        src={src}
        title="Munley Made Meals Demo"
        style={{ width: "100%", height: "100%", border: 0 }}
        loading="eager"
        referrerPolicy="no-referrer"
      />
    </main>
  );
}
