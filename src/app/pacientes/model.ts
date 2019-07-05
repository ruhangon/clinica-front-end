export class Medicamento{
  id: number;
  nome: string;
  apresentacao: string;
  valor: number;
}

export class Medico{
  id: number;
  nome: string;
  especialidade: string;
}

export class Paciente{
  id: number;
  nome: string;
  sexo: string;
  medicamento = new Medicamento();
  medico = new Medico();
}
