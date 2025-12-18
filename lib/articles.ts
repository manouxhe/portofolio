"use server";

import { db } from "@/db";
import { articlesTable } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

/* ===== READ ===== */
export async function getArticles() {
  return await db
    .select()
    .from(articlesTable)
    .orderBy(desc(articlesTable.createdAt));
}

/* ===== CREATE ===== */
export async function createArticle(form: FormData) {
  const title = String(form.get("title"));
  const content = String(form.get("content"));

  await db.insert(articlesTable).values({ title, content });

  redirect((await headers()).get("referer") ?? "/wikipedia");
}

/* ===== UPDATE ===== */
export async function updateArticle(form: FormData) {
  const id = String(form.get("id"));
  const title = String(form.get("title"));
  const content = String(form.get("content"));

  await db
    .update(articlesTable)
    .set({ title, content })
    .where(eq(articlesTable.id, id));

  redirect((await headers()).get("referer") ?? "/wikipedia");
}

/* ===== DELETE ===== */
export async function deleteArticle(form: FormData) {
  const id = String(form.get("id"));

  await db
    .delete(articlesTable)
    .where(eq(articlesTable.id, id));

  redirect((await headers()).get("referer") ?? "/wikipedia");
}
