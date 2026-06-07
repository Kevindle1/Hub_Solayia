import { Card } from "@solayia/ui";
import { IconDiamond } from "../../components/icons";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Connexion — Hub Solayia",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm animate-fade-up">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-field bg-navy text-gold">
            <IconDiamond />
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-ink">Hub Solayia</h1>
          <p className="mt-1.5 text-sm text-ink-2">
            Connectez-vous pour accéder à votre espace.
          </p>
        </div>

        <Card className="p-7">
          <LoginForm />
        </Card>
      </div>
    </main>
  );
}
