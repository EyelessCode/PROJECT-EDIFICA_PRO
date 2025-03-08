export class TaskDeadline{
    value:Date

    constructor(value:Date){
        this.value = value
        this.deadlineValidation()
    }

    private deadlineValidation(){
        if (this.value<new Date) {
            throw new Error("Deadline cannot be in the past")
        }
    }
}