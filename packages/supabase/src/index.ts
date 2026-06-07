/**
 * Entrée « neutre » du package (sûre côté client comme serveur) :
 * uniquement les types et la lecture d'environnement.
 *
 * Pour un client, importer explicitement :
 *   - `@solayia/supabase/client`     (navigateur)
 *   - `@solayia/supabase/server`     (Server Components / Actions)
 *   - `@solayia/supabase/middleware` (middleware Next)
 */
export type { Database } from "./types";
export { getSupabaseEnv, type SupabaseEnv } from "./env";
