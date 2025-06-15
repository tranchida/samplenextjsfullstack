'use server'

import { revalidateTag } from "next/cache";
import prisma from '@/lib/client'

export async function setUserSwitchInactive(id: number): Promise<void> {
    const user = await prisma.users.findUniqueOrThrow({
        where: { id },
    })
    await prisma.users.update({
        where: { id },
        data: {
            active: !user.active,
            updatedAt: new Date(),
        }
    })

    revalidateTag('users')
}