import { PrismaClient } from "@prisma/client";
import { TaskModel } from "../../domain/model/task.model";
import { TaskNotCreated } from "../../domain/util/handleError.util";

export class CreateRepositoryTask{
    constructor(private prisma:PrismaClient){}

    async createTask(task: TaskModel): Promise<void> {
        //// throw new Error("Method not implemented.");
        try {
            const object={
                title:task.title.value,
                description:task.description.value,
                state:task.state.value,
                deadline:task.deadline.value
            }

            const taskToCreate=await this.prisma.task.create({
                data:object
                });
        } catch (error) {
            throw new TaskNotCreated(`Error creating task`);
        }
    }

}
