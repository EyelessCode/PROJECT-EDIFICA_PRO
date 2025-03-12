import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskNotFoundError } from "../../domain/util/handleError.util";
import { TaskId } from "../../domain/validation/id.attribute";

export class DeleteServiceTask {
    constructor(private service: IServiceTask) { }

    async deleteTask(id: number): Promise<void> {
        return await this.service.deleteTask(new TaskId(id))
    }
}
