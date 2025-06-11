interface User {
    id: number;
    name: string;
    employed: string;
    date: string;
}


const users: User[] = [
    { id: 1, name: "John Michael", employed: "Manager", date: "23/04/18" },
    { id: 2, name: "Alexa Liras", employed: "Developer", date: "23/04/18" },
    { id: 3, name: "Laurent Perrier", employed: "Executive", date: "19/09/17" },
    { id: 4, name: "Michael Levi", employed: "Developer", date: "24/12/08" },
    { id: 5, name: "Richard Gran", employed: "Manager", date: "04/10/21" }
];

export default function About() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black dark:text-white text-center">About</h1>
            <div className="w-1/2 mx-auto mt-10">
                <table className="w-full table-auto">
                    <thead className="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-100   ">
                        <tr>
                            <th className="p-3 text-start font-medium">
                                ID
                            </th>
                            <th className="p-3 text-start font-medium">
                                Name
                            </th>
                            <th className="p-3 text-start font-medium">
                                Employed
                            </th>
                            <th className="p-3 text-start font-medium">
                                Date
                            </th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody className=" text-slate-800 dark:text-white">
                        {users.map((user) => (
                            <tr className="border-b border-slate-200 last:border-0">
                                <td className="p-3">{user.id}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.employed}</td>
                                <td className="p-3">{user.date}</td>
                                <td className="flex gap-10 p-3">    
                                    <a href="#" className="text-slate-800 dark:text-white hover:text-slate-600">
                                        Edit
                                    </a>
                                    <a href="#" className="text-slate-800 dark:text-white hover:text-slate-600">
                                        Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}