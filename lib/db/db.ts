import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

if (!process.env.DATABASE_URL) throw new Error("missing database uri");

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql);
export default db;
