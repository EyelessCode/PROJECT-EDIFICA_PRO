import { TaskModel } from "../../../domain/model/task.model";
import { TaskDeadline } from "../../../domain/validation/deadline.attribute";
import { TaskDescription } from "../../../domain/validation/description.attribute";
import { TaskId } from "../../../domain/validation/id.attribute";
import { TaskState } from "../../../domain/validation/state.attribute";
import { TaskTitle } from "../../../domain/validation/title.attribute";

export class TaskMapper {
    static toDomain(task: any): TaskModel {
        return new TaskModel(
            new TaskId(task.id),
            new TaskTitle(task.title),
            new TaskDescription(task.description)||"",
            new TaskState(task.state),
            new TaskDeadline(task.deadline)
        );
    }

    static toPersistence(task: TaskModel): any {
        return {
            id: task.id.value,
            title: task.title.value,
            description: task.description.value,
            state: task.state.value,
            deadline: task.deadline.value
        };
    }
}
