import { User } from "@prisma/client"
import { getDevelopers, getManagers } from "../models"
import UserTable from "../components/UserTable"
import { setUserSwitchInactive } from "@/lib/actions"

next: {
    tags: ['users']
}

export default async function About() {

    const managers: User[] = await getManagers()
    const developers: User[] = await getDevelopers()

    return (
        <>
            <UserTable title="Managers" users={managers} action={setUserSwitchInactive}/>
            <UserTable title="Developers" users={developers} action={setUserSwitchInactive}/>
        </>
    )
 }