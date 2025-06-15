import { getDevelopers, getManagers } from "../../lib/models"
import UserTable from "../components/UserTable"
import { setUserSwitchInactive } from "@/lib/actions"

next: {
    tags: ['users']
}

export default async function About() {

    const managers = await getManagers()
    const developers = await getDevelopers()

    return (
        <>
            <UserTable title="Managers" users={managers} action={setUserSwitchInactive}/>
            <UserTable title="Developers" users={developers} action={setUserSwitchInactive}/>
        </>
    )
 }