import { IServiceTask } from "../../../domain/interface/repository/task.interface.service"
import { TaskModel } from "../../../domain/model/task.model"
import { TaskId } from "../../../domain/validation/id.attribute"


export class TaskRepository implements IServiceTask {
    //? This repository is in memory activity. It's just a test
    private tasks: TaskModel[] = []

    async createTask(task: TaskModel): Promise<void> {
        //// throw new Error("Method not implemented.");
        this.tasks.push(task)
    }

    async getTask(id: TaskId): Promise<TaskModel | null> {
        //// throw new Error("Method not implemented.");
        return this.tasks.find((taskFound) => taskFound.id.value === id.value) || null
    }

    async getAll(): Promise<TaskModel[]> {
        //// throw new Error("Method not implemented.");
        return this.tasks
    }

    async updateTask(task: TaskModel): Promise<void> {
        //// throw new Error("Method not implemented.");
        const index = this.tasks.findIndex((taskFound) => taskFound.id.value === task.id.value)
        this.tasks[index] = task
    }

    async deleteTask(id: TaskId): Promise<void> {
        //// throw new Error("Method not implemented.");
        this.tasks.filter((taskFound) => taskFound.id.value !== id.value)
    }

}
