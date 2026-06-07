const urlHub = process.env.NEXT_PUBLIC_URL_HUB ?? "http://localhost:3000";

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-md animate-fade-up text-center">
        <span className="inline-flex items-center rounded-full bg-gold-bg px-3.5 py-1 text-xs font-semibold text-gold-d">
          En construction
        </span>
        <h1 className="mt-5 text-3xl font-semibold text-ink">CRM</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
          Le socle de données partagé — clients, prospects et contrats — arrive
          bientôt.
        </p>
        <a
          href={urlHub}
          className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-navy-d"
        >
          ← Retour au Hub
        </a>
      </div>
    </main>
  );
}
