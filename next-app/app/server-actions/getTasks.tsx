'use server'
import { Tasks } from "../db/db"

export const getTasks = async () => {
    await new Promise((res) => setTimeout(res, 1000))

    return Tasks
}