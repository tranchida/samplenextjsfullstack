"use server";

import { revalidateTag } from "next/cache";
import db from "./client";
import { usersTable } from "./schema";
import { eq } from "drizzle-orm";

export async function setUserSwitchInactive(id: number): Promise<void> {
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, id))
    .limit(1);
  if (user.length === 0) {
    throw new Error("User not found");
  }
  await db
    .update(usersTable)
    .set({ active: !user[0].active, updatedAt: new Date() })
    .where(eq(usersTable.id, id));

  revalidateTag("users");
}
