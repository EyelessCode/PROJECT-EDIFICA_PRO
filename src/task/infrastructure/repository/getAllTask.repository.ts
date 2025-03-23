import { PrismaClient } from "@prisma/client";
import { TaskModel } from "../../domain/model/task.model";
import { TaskNotFoundError } from "../../domain/util/handleError.util";
import { TaskMapper } from "./mapper/taskModel.mapper";

export class GetAllRepositoryTasks{
    constructor(private prisma:PrismaClient){}

    async getAllTasks():Promise<TaskModel[]>{
        try {
            const tasks=await this.prisma.task.findMany()
            return tasks.map((task)=>TaskMapper.toDomain(task))
        } catch (error) {
                throw new TaskNotFoundError("There's no exist tasks!")
        }
    }
}
