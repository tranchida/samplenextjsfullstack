import db from "../lib/client";
import { usersTable } from "../lib/schema";
import { asc, eq } from "drizzle-orm";

export async function getUsers() {
    const users = await db.select().from(usersTable).orderBy(asc(usersTable.lastname), asc(usersTable.firstname)).limit(100);
    return users
}

export async function getUser(id: number) {
    const user = await db.select().from(usersTable).where(eq(usersTable.id, id));
    return user;
}


export async function getManagers() {
    const managers = await db.select().from(usersTable).where(eq(usersTable.employed, "Manager")).orderBy(asc(usersTable.lastname), asc(usersTable.firstname));
    return managers
}

export async function getDevelopers() {
    const developers = await db.select().from(usersTable).where(eq(usersTable.employed, "Developer")).orderBy(asc(usersTable.lastname), asc(usersTable.firstname));
    return developers
} 
