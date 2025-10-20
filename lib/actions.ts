'use server'

import { switchUserActive } from "./models"

export async function updateUserActive(id: number): Promise<void> {
    await switchUserActive(id)
}
