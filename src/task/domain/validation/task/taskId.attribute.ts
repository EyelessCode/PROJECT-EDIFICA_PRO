export class TaskId{
    value:number

    constructor(value:number){
        this.value=value
    }

    public isNumber():boolean{
        return typeof this.value === 'number'
    }
}