import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { TaskId } from "../../domain/validation/id.attribute";

export class TaskRepository implements IServiceTask {
    createTask(Task: TaskModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getTask(id: TaskId): Promise<TaskModel | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<TaskModel[]> {
        throw new Error("Method not implemented.");
    }
    updateTask(task: TaskModel): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteTask(id: TaskId): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
