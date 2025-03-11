import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";

export class CreateServiceTask{
    constructor(private readonly service:IServiceTask) {
        
    }

    async create(task:TaskModel):Promise<void>{
        return await this.service.createTask(task)
    }
}
