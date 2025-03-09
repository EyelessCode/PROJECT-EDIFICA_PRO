import { TaskModel } from "../../model/task.model";
import { TaskId } from "../../validation/task/id.attribute";

export interface ITaskRepository {
    createTask(Task: TaskModel): Promise<void>
    getTask(id: TaskId): Promise<TaskModel | null>
    getAll(): Promise<TaskModel[]>
    updateTask(task: TaskModel, id: TaskId): Promise<void>
    deleteTask(id: TaskId): Promise<void>
}
