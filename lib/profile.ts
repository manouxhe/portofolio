"use server";
import { redirect } from "next/navigation";
/* ========= TYPE ========= */
export type Profile = {
  id: number;
  name: string;
  role: string;
};
/* ========= STOCKAGE (serveur uniquement) ========= */
let profiles: Profile[] = [];
let nextId = 1;
/* ========= CREATE ========= */
export async function createProfile(form: FormData) {
  const name = String(form.get("name"));
  const role = String(form.get("role"));

  profiles.push({
    id: nextId++,
    name,
    role,
  });
  redirect("/about");
}
/* ========= READ ========= */
export async function getProfiles(): Promise<Profile[]> {
  return profiles;
}
/* ========= UPDATE ========= */
export async function updateProfile(id: number, form: FormData) {
  const name = String(form.get("name"));
  const role = String(form.get("role"));

  const profile = profiles.find((p) => p.id === id);
  if (!profile) return;
  profile.name = name;
  profile.role = role;
  redirect("/about");
}
/* ========= DELETE ========= */
export async function deleteProfile(id: number) {
  profiles = profiles.filter((p) => p.id !== id);
  redirect("/about");
}
