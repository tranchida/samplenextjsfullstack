import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'


export async function getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany({
        orderBy: {
            lastname: "asc",
        },
        take: 100
    })
    return users
}

export async function getUser(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return user
}


export async function getManagers(): Promise<User[]> {
    const managers = await prisma.user.findMany({
        where: { employed: "Manager" },
        orderBy: {
            firstname: "asc"
        }
    })
    return managers
}

export async function getDevelopers(): Promise<User[]> {
    const developers = await prisma.user.findMany({
        where: { employed: "Developer" },
        orderBy: {
            firstname: "asc"
        }
    })
    return developers
} 
