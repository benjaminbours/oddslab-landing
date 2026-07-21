"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initAnalytics, track, trackPageview } from "@/lib/analytics";

function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const qs = searchParams?.toString();
    const url = window.origin + pathname + (qs ? `?${qs}` : "");
    trackPageview(url);
  }, [pathname, searchParams]);

  return null;
}

/** Boots PostHog and tracks pageviews. Renders nothing. No-op without a key. */
export default function PostHogProvider() {
  useEffect(() => {
    initAnalytics();

    // Delegated CTA tracking: any click on a link to app.oddslab.gg is a
    // conversion intent. Done here so we don't have to turn static server
    // components into client components just to add onClick handlers.
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest("a");
      const href = anchor?.getAttribute("href") ?? "";
      if (href.includes("app.oddslab.gg")) {
        track("cta_clicked", {
          href,
          text: anchor?.textContent?.trim().slice(0, 80),
          destination: "app",
        });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <Suspense fallback={null}>
      <PageviewTracker />
    </Suspense>
  );
}
