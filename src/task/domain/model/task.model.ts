import { TaskDeadline } from "../validation/task/deadline.attribute";
import { TaskDescription } from "../validation/task/description.attribute";
import { TaskId } from "../validation/task/id.attribute";
import { TaskTitle } from "../validation/task/title.attribute";

export class TaskModel {
    id: TaskId;
    title: TaskTitle;
    description: TaskDescription;
    deadline: TaskDeadline;

    constructor(id: TaskId, title: TaskTitle, description: TaskDescription,
        deadline: TaskDeadline
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
    }

    public toString() {
        return `Task ID: ${this.id}, Title: ${this.title}, Description: ${this
            .description}, Deadline: ${this.deadline}`
    }

    public titlePlusDeadline() {
        return `Title: ${this.title} and its time will end: ${this.deadline}`
    }
}
