// validation/state.attribute.ts
export class TaskState {
    value: "Pending" | "In_progress" | "Done";

    constructor(value: "Pending" | "In_progress" | "Done") {
        this.value = value;
        this.validate();
    }

    private validate() {
        if (!["Pending", "In_progress", "Done"].includes(this.value)) {
            throw new Error("Estado de tarea inválido");
        }
    }
}