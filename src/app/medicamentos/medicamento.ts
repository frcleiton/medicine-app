export class Medicamento {
    id: number;
    descricao: string;
    dataCadastro!: string;
    forma!: string;
    intensidade!: string;
    unidade!: string;
    frequencia!: string;
    horario!: string;
    observacao!: string;
    dataInicio!: string;

    constructor(){
        this.id = 0;
        this.descricao = "";
        this.dataCadastro = "";
        this.forma = "";
        this.intensidade = "";
        this.unidade = "";
        this.frequencia = "";
        this.horario = "";
        this.observacao = "";
        this.dataInicio = "";
    }
}