import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv } from "./env";
import type { Database } from "./types";

/**
 * Client Supabase côté navigateur (composants `"use client"`).
 * La session est gérée par cookies, partageable entre sous-domaines via COOKIE_DOMAIN.
 */
export function createClient() {
  const { url, anonKey, cookieDomain } = getSupabaseEnv();

  return createBrowserClient<Database>(url, anonKey, {
    cookieOptions: cookieDomain ? { domain: cookieDomain } : undefined,
  });
}
