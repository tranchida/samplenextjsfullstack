'use server'

import { revalidateTag } from "next/cache";
import { db } from "./database";

export async function setUserSwitchInactive(id: number): Promise<void> {
    const user = await db.selectFrom('person').selectAll().where('id', '=', id).executeTakeFirst()
    if (!user) {
        throw new Error('User not found')
    }
    await db.updateTable('person').set({
        active: !user.active,
        updatedAt: new Date(),
    }).where('id', '=', id).execute()

    revalidateTag('persons')
}