import { PrismaClient } from "@prisma/client";
import { TaskId } from "../../domain/validation/id.attribute";
import { TaskModel } from "../../domain/model/task.model";
import { TaskMapper } from "./mapper/taskModel.mapper";

export class GetOneRepositoryTask{
    constructor(private prisma:PrismaClient){}

    async getTask(id: TaskId): Promise<TaskModel | null> {
        //// throw new Error("Method not implemented.");
        const task= await this.prisma.task.findUnique({
            where:{
                id:id.value
            }
        })

        if (!task) {
            return null
        }

        return TaskMapper.toDomain(task);
    }
}
