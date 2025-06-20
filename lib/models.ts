import prisma from '@/lib/client'
import { comments, users } from '@prisma/client'
import { revalidateTag } from 'next/cache'

export type UserWithComments = users & {
    comments: comments[]
}

export async function getUsers(): Promise<UserWithComments[]> {

    const users = await prisma.users.findMany({
        include: {
            comments: true
        },
        orderBy: [
            { lastname: "asc" },
            { firstname: "asc" }
        ],
        take: 100
    })

    return users as UserWithComments[]
}

export async function getUser(id: number): Promise<UserWithComments | undefined> {
    const user = await prisma.users.findUnique({
        where: { id },
        include: {
            comments: true
        }
    })
    return user as UserWithComments | undefined
}


export async function commentByUser(userId: number): Promise<comments[]> {
    const comments = await prisma.comments.findMany({
        where: {
            userId: userId
        }
    })
    return comments as comments[]
}

export async function switchUserActive(id: number): Promise<void> {
    const user = await prisma.users.findUniqueOrThrow({
        where: { id },
    })
    await prisma.users.update({
        where: { id },
        data: { active: !user.active, updatedAt: new Date() }
    })
    revalidateTag('users')
}