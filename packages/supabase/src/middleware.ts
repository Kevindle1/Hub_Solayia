import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { User } from "@supabase/supabase-js";
import { getSupabaseEnv } from "./env";
import type { Database } from "./types";

type CookieToSet = { name: string; value: string; options: CookieOptions };

export interface SessionResult {
  /** Réponse à renvoyer depuis le middleware (cookies rafraîchis). */
  response: NextResponse;
  /** Utilisateur connecté, ou `null`. */
  user: User | null;
}

/**
 * Rafraîchit la session Supabase à chaque requête et expose l'utilisateur courant.
 * À appeler depuis le `middleware.ts` de chaque app du hub.
 */
export async function updateSession(request: NextRequest): Promise<SessionResult> {
  let response = NextResponse.next({ request });
  const { url, anonKey, cookieDomain } = getSupabaseEnv();

  const supabase = createServerClient<Database>(url, anonKey, {
    cookieOptions: cookieDomain ? { domain: cookieDomain } : undefined,
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: CookieToSet[]) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  // IMPORTANT : ne rien exécuter entre createServerClient et getUser
  // (sinon risque de déconnexions aléatoires — cf. doc @supabase/ssr).
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { response, user };
}
