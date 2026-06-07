/**
 * Types de la base Supabase.
 *
 * Placeholder à régénérer dès que le schéma du CRM existera :
 *   pnpm dlx supabase gen types typescript --project-id <id> > src/types.ts
 *
 * En attendant, on expose une forme `Database` minimale pour typer le client.
 */
export type Database = {
  public: {
    Tables: Record<string, never>;
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
