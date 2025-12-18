import { pgTable, text, uuid,  } from "drizzle-orm/pg-core";


/* ===== PROFILES ===== */
export const profilesTable = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  telefon: text("telefon").notNull(),
  number: text("number").notNull(),
  time: text("time").notNull(),
});