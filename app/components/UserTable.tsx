"use client"

import { UserWithComments } from "@/lib/models"
import CommentTable from "./CommentTable"
import { PiUserSwitch } from "react-icons/pi";
import { useRouter } from "next/navigation";


export default function UserTable({ title, users , action}: { title: string, users: UserWithComments[], action: (id: number) => Promise<void> }) {

    const router = useRouter()

    return (    

        <div>
            <h1 className="text-3xl font-bold text-black dark:text-white text-center pb-2">{title}</h1>
            <div className="w-1/2 mx-auto">
                <table className="w-full table-auto">
                    <thead className="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-100   ">
                        <tr>
                            <th className="p-3 text-start font-medium">
                                ID
                            </th>
                            <th className="p-3 text-start font-medium">
                                First Name
                            </th>
                            <th className="p-3 text-start font-medium">
                                Last Name
                            </th>
                            <th className="p-3 text-start font-medium">
                                Employed
                            </th>
                            <th className="p-3 text-start font-medium">
                                Date
                            </th>
                            <th className="p-3 text-start font-medium">
                                Comments count
                            </th>
                            <th className="p-3 text-start font-medium">
                                Active
                            </th>
                            <th className="p-3 text-start font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" text-slate-800 dark:text-white">
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-slate-200 last:border-0">
                                <td className="p-3">{user.id}</td>
                                <td className="p-3">{user.firstname}</td>
                                <td className="p-3">{user.lastname}</td>
                                <td className="p-3">{user.employed}</td>
                                <td className="p-3">{user.date}</td>
                                <td className="p-3" >
                                    <CommentTable comments={user.comments} />
                                </td>
                                <td className={`p-3 transition-colors duration-300 ${user.active ? "text-green-500" : "text-red-500"}`}>{user.active ? "Yes" : "No"}</td>
                                <td className="p-3">
                                    <button className="bg-gray-500 text-white px-4 py-1 rounded-md hover:bg-indigo-600 hover:cursor-pointer"
                                            onClick={() => { action(user.id); router.refresh() }}>
                                        <PiUserSwitch color="black" size={20}/>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )   
}