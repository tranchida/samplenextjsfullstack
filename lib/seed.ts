import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { eq } from "drizzle-orm";
import { usersTable } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const users = await db.select().from(usersTable);
  for (const u of users) {
    await db.delete(usersTable).where(eq(usersTable.id, u.id));
  }

  const user: (typeof usersTable.$inferInsert)[] = [
    {
      firstname: "Giampaolo",
      lastname: "Cattaneo",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "John",
      lastname: "Doe",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Alice",
      lastname: "Smith",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Bob",
      lastname: "Johnson",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Charlie",
      lastname: "Brown",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "David",
      lastname: "Wilson",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Eve",
      lastname: "Davis",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Frank",
      lastname: "Miller",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Grace",
      lastname: "Garcia",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Hank",
      lastname: "Martinez",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Ivy",
      lastname: "Rodriguez",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Jack",
      lastname: "Martinez",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Karen",
      lastname: "Hernandez",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Leo",
      lastname: "Lopez",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Mona",
      lastname: "Gonzalez",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Nina",
      lastname: "Perez",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Oscar",
      lastname: "Sanchez",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Paul",
      lastname: "Clark",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Quinn",
      lastname: "Ramirez",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Rita",
      lastname: "Lewis",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Sam",
      lastname: "Lee",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Tina",
      lastname: "Walker",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Uma",
      lastname: "Hall",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Victor",
      lastname: "Allen",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Wendy",
      lastname: "Young",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Xander",
      lastname: "King",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Yara",
      lastname: "Wright",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Zane",
      lastname: "Scott",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Amy",
      lastname: "Green",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Brian",
      lastname: "Adams",
      employed: "Developer",
      active: true,
    },
    {
      firstname: "Cathy",
      lastname: "Baker",
      employed: "Manager",
      active: true,
    },
    {
      firstname: "Derek",
      lastname: "Nelson",
      employed: "Developer",
      active: true,
    },
  ];

  for (const u of user) {
    await db.insert(usersTable).values(u);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
