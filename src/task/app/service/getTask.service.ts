import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { TaskNotFoundError } from "../../domain/util/handleError.util";
import { TaskId } from "../../domain/validation/id.attribute";

export class GetOneServiceTask {
    constructor(private readonly service: IServiceTask) { }

    async getOneTask(id: number): Promise<TaskModel | null> {
        const task = await this.service.getTask(new TaskId(id));

        if (!task) {
            throw new TaskNotFoundError(`Task not found!`);
        }

        return task;
    }
}
