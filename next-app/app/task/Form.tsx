import { createTask } from "../server-actions/saveTask";

export default function NewTaskForm() {
  return (
    <form action={createTask}>
      <input type="text" name="name" placeholder="Введите новую задачу" />
      <label htmlFor='isDone'>Выполенена ли задача</label>
      <input type="checkbox" id='isDone' name="isDone" placeholder="Введите новую задачу" />
      <button type="submit">Добавить</button>
    </form>
  );
}