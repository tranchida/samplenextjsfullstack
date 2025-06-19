import { getUsers, switchUserActive } from "../../lib/models"
import UserTable from "../components/UserTable"
import { revalidateTag } from "next/cache"

next: {
    tags: ['users']
}

async function updateUserActive(id: number): Promise<void> {
    'use server'
    await switchUserActive(id)
    revalidateTag('users')
}

export default async function About() {

    const managers = await getUsers().then(users => users.filter(user => user.employed === "Manager"))
    const developers = await getUsers().then(users => users.filter(user => user.employed === "Developer"))

    return (
        <>
            <UserTable title="Managers" users={managers} action={updateUserActive}/>
            <UserTable title="Developers" users={developers} action={updateUserActive}/>
        </>
    )
 }