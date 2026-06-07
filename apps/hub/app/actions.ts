"use server";

import { redirect } from "next/navigation";
import { createClient } from "@solayia/supabase/server";

/** Déconnexion : termine la session Supabase et renvoie vers /login. */
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}
