import { PrismaClient } from "@prisma/client";
import { TaskId } from "../../domain/validation/id.attribute";
import { TaskNotFoundError } from "../../domain/util/handleError.util";

export class UpdateRepositoryTask{
    constructor(private prisma:PrismaClient){}

    async updateTask(id:TaskId):Promise<void>{
        try {
            const task=await this.prisma.task.findUnique({
                where:{
                    id:id.value
                }
            })

            if (!task) {
                throw new TaskNotFoundError(`Task with id ${id.value} not found`);
            }

        } catch (error) {
            
        }
    }
}