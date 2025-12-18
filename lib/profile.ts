"use server";

import { db } from "@/db";
import { profilesTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

/* ===== READ ===== */
export async function getProfiles() {
  return await db
    .select()
    .from(profilesTable)
   
}

/* ===== CREATE ===== */
export async function createProfile(form: FormData) {
  const name = String(form.get("name"));
  const telefon = String(form.get("telefon"));
  const number = String(form.get("number"));
  const time = String(form.get("time"));

  await db.insert(profilesTable).values({ name, telefon, number, time });

  redirect((await headers()).get("referer") ?? "/");
}

/* ===== UPDATE ===== */
export async function updateProfile(form: FormData) {
  const id = String(form.get("id"));
  const name = String(form.get("name"));
  const telefon = String(form.get("telefon"));
  const number = String(form.get("number"));
  const time = String(form.get("time"));

  await db
    .update(profilesTable)
    .set({ name, telefon, number, time })
    .where(eq(profilesTable.id, id));

  redirect((await headers()).get("referer") ?? "/");
}

/* ===== DELETE ===== */
export async function deleteProfile(form: FormData) {
  const id = String(form.get("id"));

  await db
    .delete(profilesTable)
    .where(eq(profilesTable.id, id));

  redirect((await headers()).get("referer") ?? "/");
}
