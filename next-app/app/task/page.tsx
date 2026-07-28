import { getTasks } from "../server-actions/getTasks"
import TaskList from "./TasksList"

export default async function TaskPage() {
    const tasks = await getTasks()
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <p>Tasks Page</p>
            <TaskList list={tasks}/>
            {/* <NewTaskForm /> */}
        </div>
    )
}