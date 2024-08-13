import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { users, NewUser } from "./schema";
import * as schema from "./schema";

// const pool = new Pool({
// 	connectionString: process.env.DATABASE_URL,
// });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: +(process.env.DB_PORT || 5432),
});

// TODO: logger true
export const db = drizzle(pool, { schema });

export type DB = typeof db;

export const insertUser = async (user: NewUser) => {
  return db.insert(users).values(user).returning();
};
