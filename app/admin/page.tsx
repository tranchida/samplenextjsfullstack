import { setUserSwitchInactive } from "@/lib/actions"
import UserTable from "../components/UserTable"
import { getUsers } from "../models"

next: {
    tags: ['users']
}

export default async function Admin() {

    const users = await getUsers()

    return (
        <>
            <UserTable title="Users" users={users} action={setUserSwitchInactive} />
        </>
    )
}