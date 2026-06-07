/**
 * Lecture et validation des variables d'environnement Supabase.
 * Aucune valeur en dur : tout vient de `.env` (cf. `.env.example`).
 */
export interface SupabaseEnv {
  url: string;
  anonKey: string;
  /** Domaine parent pour le cookie de session (SSO multi-sous-domaines). */
  cookieDomain: string | undefined;
}

export function getSupabaseEnv(): SupabaseEnv {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    throw new Error(
      "Variables Supabase manquantes : renseignez NEXT_PUBLIC_SUPABASE_URL et " +
        "NEXT_PUBLIC_SUPABASE_ANON_KEY dans votre fichier .env (voir .env.example).",
    );
  }

  const cookieDomain = process.env.COOKIE_DOMAIN?.trim();

  return {
    url,
    anonKey,
    cookieDomain: cookieDomain ? cookieDomain : undefined,
  };
}
