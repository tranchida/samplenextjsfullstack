import { getUsers } from "@/lib/models"
import { updateUserActive } from "@/lib/actions"
import UserTable from "../components/UserTable"

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