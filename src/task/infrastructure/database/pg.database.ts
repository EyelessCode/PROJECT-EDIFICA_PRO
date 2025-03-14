import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { TaskId } from "../../domain/validation/id.attribute";

export class PostgreSQLUserRepository implements IServiceTask{
    async createTask(Task: TaskModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async getTask(id: TaskId): Promise<TaskModel | null> {
        throw new Error("Method not implemented.");
    }

    async getAll(): Promise<TaskModel[]> {
        throw new Error("Method not implemented.");
    }

    async updateTask(task: TaskModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async deleteTask(id: TaskId): Promise<void> {
        throw new Error("Method not implemented.");
    }


}
