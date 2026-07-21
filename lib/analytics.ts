/**
 * Product analytics for the marketing site (oddslab.gg) — thin wrapper over
 * PostHog, cookieless / EU cloud, mirrors the app's `@/lib/analytics`.
 *
 * The landing page has no auth, so this only boots PostHog, emits pageviews and
 * CTA clicks. When a visitor later signs up on app.oddslab.gg, the app calls
 * identify() — cross-domain anonymous history is NOT stitched here (cookieless,
 * localStorage is per-origin), which is the deliberate privacy-first tradeoff.
 *
 * No key → every call is a silent no-op. GA4 keeps running in parallel.
 */
import posthog from "posthog-js";

export type LandingEvent = "cta_clicked";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

let started = false;

export function initAnalytics(): void {
  if (started || typeof window === "undefined" || !KEY) return;
  started = true;
  posthog.init(KEY, {
    api_host: HOST,
    person_profiles: "identified_only",
    persistence: "localStorage",
    cross_subdomain_cookie: false,
    capture_pageview: false,
    autocapture: false,
    session_recording: { maskAllInputs: true },
    advanced_disable_feature_flags_on_first_load: true,
  });
}

export function track(event: LandingEvent, props?: Record<string, unknown>): void {
  if (typeof window === "undefined" || !KEY) return;
  posthog.capture(event, props);
}

export function trackPageview(url: string): void {
  if (typeof window === "undefined" || !KEY) return;
  posthog.capture("$pageview", { $current_url: url });
}
