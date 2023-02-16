import { Medicamento } from "src/app/medicamentos/medicamento";

export class RegistroBusca {
    medicamento: Medicamento;
    data: string;
    hora: string;
    observacao: string;

    constructor() { 
        this.medicamento = new Medicamento();
        this.data = "";
        this.hora = "";
        this.observacao = "";
    }
}