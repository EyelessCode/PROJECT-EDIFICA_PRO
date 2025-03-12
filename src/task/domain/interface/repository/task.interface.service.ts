import { TaskModel } from "../../model/task.model";
import { TaskId } from "../../validation/id.attribute";

export interface IServiceTask {
    createTask(Task: TaskModel): Promise<void>
    getTask(id: TaskId): Promise<TaskModel | null>
    getAll(): Promise<TaskModel[]>
    updateTask(task: TaskModel): Promise<void>
    deleteTask(id: TaskId): Promise<void>
}
