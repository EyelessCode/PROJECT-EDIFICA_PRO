import { IServiceTask } from "../../domain/interface/repository/task.interface.service";
import { TaskModel } from "../../domain/model/task.model";
import { TaskNotFoundError } from "../../domain/util/handleError.util";
import { TaskDeadline } from "../../domain/validation/deadline.attribute";
import { TaskDescription } from "../../domain/validation/description.attribute";
import { TaskId } from "../../domain/validation/id.attribute";
import { TaskTitle } from "../../domain/validation/title.attribute";

export class UpdateServiceTask{
    constructor(private service:IServiceTask){}

    async updateTask(id:number,title:string,description:string,
        deadline:Date
    ):Promise<void>{
        const taskFound=new TaskModel(
            new TaskId(id),
            new TaskTitle(title),
            new TaskDescription(description),
            new TaskDeadline(deadline)
        )

        return await this.service.updateTask(taskFound)
    }
}