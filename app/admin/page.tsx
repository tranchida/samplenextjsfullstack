import { setUserSwitchInactive } from "@/lib/actions"
import { getPersons } from "../../lib/models"
import PersonsTable from "../components/PersonsTable"

next: {
    tags: ['persons']
}

export default async function Admin() {

    const users = await getPersons()

    return (
        <>
            <PersonsTable title="Persons" persons={users} action={setUserSwitchInactive} />
        </>
    )
}