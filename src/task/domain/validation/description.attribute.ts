export class TaskDescription {
    value: string

    constructor(value: string) {
        this.value = value;
        this.descriptionValidation()
    }

    private descriptionValidation() {
        let word = this.value.split(" ")
        if (word.length > 100) {
            throw new Error("Description must be at least 100 words long");
        }
    }
}
