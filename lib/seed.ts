import { db } from "./database"

export async function main() {
    await db.insertInto('person').values([
        { firstname: 'John', lastname: 'Doe', employed: 'Manager', date: '2021-01-01', active: true, createdAt: new Date(), updatedAt: new Date() },
        { firstname: 'Jane', lastname: 'Doe', employed: 'Developer', date: '2021-01-01', active: true, createdAt: new Date(), updatedAt: new Date() },
    ]).execute().catch((error) => {
        console.error(error)
    })
}

main().then(() => {
    console.log('Seed completed')
}).catch((error) => {
    console.error(error)
})