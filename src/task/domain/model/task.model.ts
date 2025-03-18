import { TaskDeadline } from "../validation/deadline.attribute";
import { TaskDescription } from "../validation/description.attribute";
import { TaskId } from "../validation/id.attribute";
import { TaskState } from "../validation/state.attribute";
import { TaskTitle } from "../validation/title.attribute";

export class TaskModel {
    id: TaskId;
    title: TaskTitle;
    description: TaskDescription;
    state:TaskState
    deadline: TaskDeadline;

    constructor(id: TaskId, title: TaskTitle, description: TaskDescription,
        state:TaskState, deadline: TaskDeadline
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.state=state
    }

    public toString() {
        return `Task ID: ${this.id}, Title: ${this.title}, Description: ${this
            .description}, State: ${this.state}, Deadline: ${this.deadline}`
    }

    public titlePlusDeadline() {
        return `Title: ${this.title} - State: ${this.state} and its time will end: ${this.deadline}`
    }
}
