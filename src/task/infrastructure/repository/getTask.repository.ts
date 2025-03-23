import { PrismaClient } from "@prisma/client";
import { TaskId } from "../../domain/validation/id.attribute";
import { TaskModel } from "../../domain/model/task.model";
import { TaskMapper } from "./mapper/taskModel.mapper";
import { TaskNotFoundError } from '../../domain/util/handleError.util';

export class GetOneRepositoryTask{
    constructor(private prisma:PrismaClient){}

    async getTask(id: TaskId): Promise<TaskModel | null> {
        //// throw new Error("Method not implemented.");
        try {
            const task= await this.prisma.task.findUnique({
                where:{
                    id:id.value
                }
            })
    
            if (!task) {
                throw new TaskNotFoundError(`Task with id ${id.value} not found`);
            }
    
            return TaskMapper.toDomain(task);
        } catch (error) {
            if (error instanceof TaskNotFoundError) {
                console.error(error.message);
            }

            throw null
        }
    }
}
