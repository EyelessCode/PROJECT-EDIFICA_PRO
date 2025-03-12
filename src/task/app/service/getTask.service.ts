import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { HandleError } from "../../domain/util/handleError.util";
import { TaskId } from "../../domain/validation/id.attribute";

export class GetOneServiceTask {
    constructor(private readonly service: IServiceTask) { }

    async getOneTask(id: number): Promise<TaskModel> {
        const task = await this.service.getTask(new TaskId(id));

        if (!task) {
            throw new HandleError(`Task not found!`);
        }

        return task;
    }
}
