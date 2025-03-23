export class TaskNotFoundError extends Error{
    constructor(message:string){
        super(message)
        this.name="TaskNotFoundError"
        Object.setPrototypeOf(this,TaskNotFoundError.prototype)
    }
}

export class TaskNotCreated extends Error{
    constructor(message:string){
        super(message)
        this.name="TaskNotCreated"
        Object.setPrototypeOf(this,TaskNotCreated.prototype)
    }
}
