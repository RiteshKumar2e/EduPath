import { db } from "../db/index.js";
import { users } from "../schema/schema.js";
import { eq } from "drizzle-orm";

export const findUserByEmail = async (email) => {
  return await db.select().from(users).where(eq(users.email, email)).get();
};

export const createUser = async (userData) => {
  return await db.insert(users).values(userData).returning();
};
