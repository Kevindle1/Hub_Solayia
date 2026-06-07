import { Tile } from "@solayia/ui";
import { getCurrentUser } from "@solayia/supabase/server";
import { Header } from "../components/header";
import { Collaborators } from "../components/collaborators";
import { IconSparkles, IconContacts, IconCode } from "../components/icons";

export const metadata = {
  title: "Hub Solayia — Accueil",
};

function prenom(email: string): string {
  const raw = email.split("@")[0]?.split(/[.\-_]/)[0] ?? "";
  return raw ? raw.charAt(0).toUpperCase() + raw.slice(1) : "";
}

export default async function HomePage() {
  // Le middleware garantit une session ; ceci sécurise le rendu côté serveur.
  const user = await getCurrentUser();
  const email = user?.email ?? "";
  const nom = prenom(email);

  const urlIa = process.env.NEXT_PUBLIC_URL_IA_SOLAYIA ?? "#";
  const urlCrm = process.env.NEXT_PUBLIC_URL_CRM ?? "#";

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-8">
      <Header email={email} />

      <section className="mt-16 animate-fade-up">
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
          {nom ? `Bonjour ${nom}, par où on commence ?` : "Par où on commence ?"}
        </h1>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-ink-2">
          Votre espace de travail Solayia, réuni au même endroit. Choisissez un module
          pour démarrer.
        </p>
        <div className="mt-6">
          <Collaborators />
        </div>
      </section>

      <section className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Tile
          href={urlIa}
          icon={<IconSparkles />}
          title="IA Solayia"
          description="Décrivez votre besoin, l'équipe d'agents s'en occupe."
        />
        <Tile
          href={urlCrm}
          icon={<IconContacts />}
          title="CRM"
          description="Clients, prospects et contrats, centralisés."
        />
        <Tile
          soon
          icon={<IconCode />}
          title="Plateforme de développement"
          description="Vos projets et environnements de dev. Bientôt disponible."
        />
      </section>

      <footer className="mt-16 border-t border-line pt-6">
        <p className="flex items-center gap-2 text-sm text-ink-2">
          <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-gold" />
          Toutes vos données clients sont centralisées et partagées via le CRM.
        </p>
      </footer>
    </main>
  );
}
