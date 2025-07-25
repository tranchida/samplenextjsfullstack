import UserTable from "../components/UserTable"
import { getUsers, switchUserActive } from "@/lib/models"

export const revalidate = 0

async function updateUserActive(id: number): Promise<void> {
    'use server'
    await switchUserActive(id)
}

export default async function Admin() {
    const users = await getUsers()

    return (
        <>
            <UserTable title="Users" users={users} action={updateUserActive} />
        </>
    )
}