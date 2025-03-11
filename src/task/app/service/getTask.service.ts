import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { TaskId } from "../../domain/validation/id.attribute";

export class GetOneServiceTask {
    constructor(private readonly service: IServiceTask) { }

    async getOneTask(id: number): Promise<TaskModel | null> {
        return await this.service.getTask(new TaskId(id));
    }
}
