import { PrismaClient } from "@prisma/client";
import { TaskModel } from "../../domain/model/task.model";
import { TaskNotCreated } from "../../domain/util/handleError.util";
import { TaskMapper } from "./mapper/taskModel.mapper";

export class CreateRepositoryTask{
    constructor(private prisma:PrismaClient){}

    async createTask(task: TaskModel): Promise<TaskModel> {
        //// throw new Error("Method not implemented.");
        try {
            const object=TaskMapper.toPersistence(task)
            const taskToCreate=await this.prisma.task.create({
                data:object
                });

                return TaskMapper.toDomain(taskToCreate)
        } catch (error) {
            throw new TaskNotCreated(`Error creating task`);
        }
    }
}
