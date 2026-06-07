"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@solayia/ui";
import { createClient } from "@solayia/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError("Identifiants incorrects. Réessayez.");
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      setError("Connexion impossible pour le moment. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Adresse e-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 w-full rounded-field border border-line bg-surface px-3.5 text-[15px] text-ink placeholder:text-faint focus:border-gold"
          placeholder="vous@solayia.fr"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="password" className="block text-sm font-medium text-ink">
          Mot de passe
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 w-full rounded-field border border-line bg-surface px-3.5 text-[15px] text-ink placeholder:text-faint focus:border-gold"
          placeholder="••••••••"
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-gold-d">
          {error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? "Connexion…" : "Se connecter"}
      </Button>
    </form>
  );
}
