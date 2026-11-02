"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";

/**
 * The Cloudflare Turnstile widget, rendered explicitly.
 *
 * Explicit rendering (`?render=explicit`) rather than the `cf-turnstile` class
 * scan: the implicit mode only sweeps the DOM once at script load, which does
 * not survive a client-side navigation into /contact.
 */
const SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** One widget per page, so a fixed id is enough to hand Cloudflare. */
const CONTAINER_ID = "sa-turnstile";

type RenderOptions = {
  sitekey: string;
  theme?: "auto" | "light" | "dark";
  size?: "normal" | "flexible" | "compact";
  appearance?: "always" | "execute" | "interaction-only";
  "response-field"?: boolean;
  callback?: (token: string) => void;
  "error-callback"?: () => void;
  "expired-callback"?: () => void;
  "timeout-callback"?: () => void;
};

type TurnstileApi = {
  render: (
    container: string | HTMLElement,
    options: RenderOptions,
  ) => string | undefined;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type Props = {
  siteKey: string;
  /** Called with a token when the challenge passes, and `""` when it lapses. */
  onToken: (token: string) => void;
  /** Bump to reset the widget — tokens are single-use, so a failed submit needs a fresh one. */
  resetSignal?: number;
  /** api.js never loaded — blocked, offline, or Cloudflare down. */
  onScriptError?: () => void;
  className?: string;
};

export function Turnstile({
  siteKey,
  onToken,
  resetSignal = 0,
  onScriptError,
  className,
}: Props) {
  const widgetId = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  const handledReset = useRef(resetSignal);

  useEffect(() => {
    onTokenRef.current = onToken;
  }, [onToken]);

  const mount = useCallback(() => {
    if (widgetId.current || !window.turnstile) return;
    widgetId.current =
      window.turnstile.render(`#${CONTAINER_ID}`, {
        sitekey: siteKey,
        theme: "light",
        size: "flexible",
        appearance: "always",
        // We post JSON, so the widget's hidden input would never be read.
        "response-field": false,
        callback: (token: string) => onTokenRef.current(token),
        "error-callback": () => onTokenRef.current(""),
        "expired-callback": () => onTokenRef.current(""),
        "timeout-callback": () => onTokenRef.current(""),
      }) ?? null;
  }, [siteKey]);

  // Covers the second visit, when api.js is already in the document and
  // <Script onReady> is the only thing that fires.
  useEffect(() => {
    mount();
    return () => {
      if (widgetId.current) {
        window.turnstile?.remove(widgetId.current);
        widgetId.current = null;
      }
    };
  }, [mount]);

  useEffect(() => {
    if (resetSignal === handledReset.current) return;
    handledReset.current = resetSignal;
    if (widgetId.current) window.turnstile?.reset(widgetId.current);
  }, [resetSignal]);

  return (
    <>
      <Script
        src={SCRIPT_URL}
        strategy="afterInteractive"
        onReady={mount}
        onError={() => onScriptError?.()}
      />
      <div id={CONTAINER_ID} className={className} />
    </>
  );
}
