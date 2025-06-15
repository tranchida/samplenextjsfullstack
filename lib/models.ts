import prisma from '@/lib/client'
import { Comments, Users } from '@prisma/client'

export type UserWithComments = Users & {
    comments: Comments[]
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


export async function getManagers(): Promise<UserWithComments[]> {
    const managers = await prisma.users.findMany({
        where: { employed: "Manager" },
        orderBy: [
            { lastname: "asc" },
            { firstname: "asc" }
        ],
        include: {
            comments: true
        }
    })
    return managers as UserWithComments[]
}

export async function getDevelopers(): Promise<UserWithComments[]> {
    const developers = await prisma.users.findMany({
        where: { employed: "Developer" },
        orderBy: [
            { lastname: "asc" },
            { firstname: "asc" }
        ],
        include: {
            comments: true
        }
    })
    return developers as UserWithComments[]
} 

export async function commentByUser(userId: number): Promise<Comments[]> {
    const comments = await prisma.comments.findMany({
        where: {
            userId: userId
        }
    })
    return comments as Comments[]
}