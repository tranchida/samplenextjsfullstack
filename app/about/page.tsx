
import { getDevelopers, getManagers } from "../../lib/models"
import PersonsTable from "../components/PersonsTable"
import { setUserSwitchInactive } from "@/lib/actions"
import { Person } from "@/lib/types"

next: {
    tags: ['persons']
}

export default async function About() {

    const managers: Person[] = await getManagers()
    const developers: Person[] = await getDevelopers()

    return (
        <>
            <PersonsTable title="Managers" persons={managers} action={setUserSwitchInactive}/>
            <PersonsTable title="Developers" persons={developers} action={setUserSwitchInactive}/>
        </>
    )
 }