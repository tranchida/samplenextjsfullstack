'use server'

import { revalidateTag } from "next/cache";
import { prisma } from "./prisma";

export async function setUserSwitchInactive(id: number): Promise<void> {
    const user = await prisma.user.findUniqueOrThrow({
        where: { id },
    })
    await prisma.user.update({
        where: { id },
        data: {
            active: !user.active,
            updatedAt: new Date(),
        }
    })

    revalidateTag('users')
}