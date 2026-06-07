import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseEnv } from "./env";
import type { Database } from "./types";

type CookieToSet = { name: string; value: string; options: CookieOptions };

/**
 * Client Supabase côté serveur (Server Components, Route Handlers, Server Actions).
 * Next 15 : `cookies()` est asynchrone.
 */
export async function createClient() {
  const cookieStore = await cookies();
  const { url, anonKey, cookieDomain } = getSupabaseEnv();

  return createServerClient<Database>(url, anonKey, {
    cookieOptions: cookieDomain ? { domain: cookieDomain } : undefined,
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Appelé depuis un Server Component : l'écriture de cookies y est interdite.
          // Le middleware (updateSession) se charge de rafraîchir la session.
        }
      },
    },
  });
}

/** Renvoie l'utilisateur connecté (ou `null`), vérifié côté serveur. */
export async function getCurrentUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}
