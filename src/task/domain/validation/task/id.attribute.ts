export class TaskId{
    value:number

    constructor(value:number){
        this.value=value
        this.isNumber()
    }

    public isNumber(){
        if(typeof this.value !== 'number'){
            throw new Error('TaskId must be a number')
        }
    }
}