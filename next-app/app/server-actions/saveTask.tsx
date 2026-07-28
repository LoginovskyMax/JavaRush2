// Файл: /app/actions.js
"use server"

import { Tasks } from "../db/db"
import { revalidatePath } from 'next/cache';

// Пример: Server Action для создания задачи
export async function createTask(formData: FormData) {
  // formData — это объект FormData с данными из формы
  const name = formData.get('name');
  const isDone = formData.get('isDone');

  const newtask = {
    id: Date.now(),
    name: name as unknown as string,
    isDone: isDone as unknown as boolean
  }

  Tasks.push(newtask)

  // Очищаем кеш для страницы задач, чтобы список обновился
  revalidatePath('/task');
}