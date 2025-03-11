import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";

export class GetAllServiceTasks {
    constructor(private service: IServiceTask) { }

    async getAllTasks(): Promise<TaskModel[]> {
        return this.service.getAll()
    }
}
