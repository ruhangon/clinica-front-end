import { MessageService, ConfirmationService } from 'primeng/api';
import { PacientesService } from './../pacientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes-pesquisa',
  templateUrl: './pacientes-pesquisa.component.html',
  styleUrls: ['./pacientes-pesquisa.component.css']
})
export class PacientesPesquisaComponent implements OnInit {

  pacientes = [];
  filtro: string;

  constructor(
    private service: PacientesService,
    private msgService: MessageService,
    private conf: ConfirmationService
  ) { }

  ngOnInit() {
    this.pesquisar();
  }

  pesquisar(){
    this.service.pesquisar({nome:this.filtro})
    .then((dados)=>{
      this.pacientes=dados;
    });
  }

  confirmarExclusao(paciente:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+paciente.nome+'?',
      accept: () => {
        this.excluir(paciente);
      }
    });
  }

  excluir(paciente: any){
    this.service.excluir(paciente.id)
    .then(()=>{
      this.pesquisar();
      this.msgService.add({severity:'success', summary:'Exclusão', detail:'Paciente excluído com sucesso'});
    });
  }




}
