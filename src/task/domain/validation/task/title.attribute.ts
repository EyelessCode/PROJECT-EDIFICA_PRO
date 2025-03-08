export class TaskTitle{
    value:string

    constructor(value:string){
        this.value=value
    }

    public isEmpty(){
        if(this.value===''){
            throw new Error(`TaskTitle can't be empty`)
        }
    }
}