export class TaskNotFoundError extends Error{
    statusCode:number
    
    constructor(message:string){
        super(message)
        this.name="TaskNotFoundError"
        this.statusCode=404
        Object.setPrototypeOf(this,TaskNotFoundError.prototype)
    }
}

export class TaskNotCreated extends Error{
    statusCode:number

    constructor(message:string){
        super(message)
        this.name="TaskNotCreated"
        this.statusCode=404
        Object.setPrototypeOf(this,TaskNotCreated.prototype)
    }
}
