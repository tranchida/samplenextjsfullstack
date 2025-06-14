import { Person, NewPerson, PersonUpdate } from '@/lib/types'
import { db } from '@/lib/database'

export async function getPersons(): Promise<Person[]> {
    const persons = await db.selectFrom('person').selectAll().orderBy('lastname', 'asc').orderBy('firstname', 'asc').limit(100).execute()
    return persons
}

export async function getPerson(id: number): Promise<Person | undefined> {
    const person = await db.selectFrom('person').selectAll().where('id', '=', id).executeTakeFirst()
    return person
}


export async function getManagers(): Promise<Person[]> {
    const managers = await db.selectFrom('person').selectAll().where('employed', '=', 'Manager').orderBy('lastname', 'asc').orderBy('firstname', 'asc').execute()
    return managers
}

    export async function getDevelopers(): Promise<Person[]> {
    const developers = await db.selectFrom('person').selectAll().where('employed', '=', 'Developer').orderBy('lastname', 'asc').orderBy('firstname', 'asc').execute()
    return developers
} 
