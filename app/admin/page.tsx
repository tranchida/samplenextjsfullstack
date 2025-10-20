import UserTable from "../components/UserTable"
import { getUsers } from "@/lib/models"
import { updateUserActive } from "@/lib/actions"

export default async function Admin() {
    const users = await getUsers()

    return (
        <>
            <UserTable title="Users" users={users} action={updateUserActive} />
        </>
    )
}