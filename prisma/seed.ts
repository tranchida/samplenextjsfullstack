import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const users = [
        { firstname: "John", lastname: "Smith", employed: "Manager", date: "15/01/22" },
        { firstname: "Emma", lastname: "Wilson", employed: "Developer", date: "03/06/21" },
        { firstname: "Thomas", lastname: "Anderson", employed: "Manager", date: "22/09/20" },
        { firstname: "Sarah", lastname: "Davis", employed: "Developer", date: "11/03/21" },
        { firstname: "James", lastname: "Taylor", employed: "Executive", date: "30/07/19" },
        { firstname: "Lisa", lastname: "Brown", employed: "Developer", date: "25/04/22" },
        { firstname: "Michael", lastname: "Chen", employed: "Manager", date: "18/11/20" },
        { firstname: "Jessica", lastname: "Lee", employed: "Developer", date: "07/02/21" },
        { firstname: "David", lastname: "Miller", employed: "Executive", date: "13/08/19" },
        { firstname: "Rachel", lastname: "White", employed: "Developer", date: "29/05/22" },
        { firstname: "Daniel", lastname: "Jones", employed: "Manager", date: "04/12/20" },
        { firstname: "Emily", lastname: "Clark", employed: "Developer", date: "21/09/21" },
        { firstname: "Christopher", lastname: "Martin", employed: "Manager", date: "16/03/20" },
        { firstname: "Amanda", lastname: "Walker", employed: "Developer", date: "08/07/21" },
        { firstname: "Robert", lastname: "Thompson", employed: "Executive", date: "02/10/19" },
        { firstname: "Michelle", lastname: "Garcia", employed: "Developer", date: "14/01/22" },
        { firstname: "Kevin", lastname: "Rodriguez", employed: "Manager", date: "27/06/20" },
        { firstname: "Jennifer", lastname: "Martinez", employed: "Developer", date: "19/11/21" },
        { firstname: "William", lastname: "Anderson", employed: "Manager", date: "05/04/20" },
        { firstname: "Elizabeth", lastname: "Thomas", employed: "Developer", date: "23/08/21" },
        { firstname: "Brian", lastname: "Jackson", employed: "Executive", date: "10/12/19" },
        { firstname: "Nicole", lastname: "Harris", employed: "Developer", date: "28/02/22" },
        { firstname: "Steven", lastname: "Lewis", employed: "Manager", date: "17/07/20" },
        { firstname: "Rebecca", lastname: "Moore", employed: "Developer", date: "09/10/21" },
        { firstname: "Joseph", lastname: "Wilson", employed: "Manager", date: "31/03/20" },
        { firstname: "Melissa", lastname: "King", employed: "Developer", date: "20/05/21" },
        { firstname: "Timothy", lastname: "Wright", employed: "Executive", date: "12/09/19" },
        { firstname: "Laura", lastname: "Scott", employed: "Developer", date: "01/01/22" },
        { firstname: "Andrew", lastname: "Young", employed: "Manager", date: "24/06/20" },
        { firstname: "Katherine", lastname: "Adams", employed: "Developer", date: "15/11/21", 
            comments: {
                create: [
                    { comment: "Comment 1" },
                    { comment: "Comment 2" },
                    { comment: "Comment 3" }
                ]
            }
        },
    ]

    const userToDelete = await prisma.users.findMany()
    for (const user of userToDelete) {
        await prisma.users.delete({
            where: {
                id: user.id
            }
        })
    }

    for (const user of users) {
        await prisma.users.create({
            data: user
        })
    }

}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    }) 