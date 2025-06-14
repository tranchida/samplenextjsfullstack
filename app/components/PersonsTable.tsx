"use client"

import { Person } from "@/lib/types"

export default function PersonsTable({ title, persons , action}: { title: string, persons: Person[], action: (id: number) => Promise<void> }) {

    return (    

        <div>
            <h1 className="text-3xl font-bold text-black dark:text-white text-center">{title}</h1>
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
                                Active
                            </th>
                            <th className="p-3 text-start font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" text-slate-800 dark:text-white">
                        {persons.map((person) => (
                            <tr key={person.id} className="border-b border-slate-200 last:border-0">
                                <td className="p-3">{person.id}</td>
                                <td className="p-3">{person.firstname}</td>
                                <td className="p-3">{person.lastname}</td>
                                <td className="p-3">{person.employed}</td>
                                <td className="p-3">{person.date}</td>
                                <td className="p-3">{person.active ? "Yes" : "No"}</td>
                                <td className="p-3">
                                    <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer"

                                            onClick={() => action(person.id)}>
                                        &#128259; active
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