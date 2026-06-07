import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@solayia/supabase/middleware";

/**
 * Rafraîchit la session Supabase et garde l'accès au hub :
 * non connecté → /login ; déjà connecté sur /login → accueil.
 */
export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(request);
  const isAuthRoute = request.nextUrl.pathname.startsWith("/login");

  if (!user && !isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isAuthRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    // Tout sauf les assets statiques et fichiers images.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
