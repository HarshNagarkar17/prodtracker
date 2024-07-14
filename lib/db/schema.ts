import { pgTable, text } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  email: text("email").notNull().primaryKey(),
});
