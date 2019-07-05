import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from './../pacientes.service';
import { Paciente } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pacientes-cadastro',
  templateUrl: './pacientes-cadastro.component.html',
  styleUrls: ['./pacientes-cadastro.component.css']
})
export class PacientesCadastroComponent implements OnInit {

  paciente = new Paciente();
  medicamentos = [];
  medicos = [];

  constructor(
    private service: PacientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute
  ) { }

  
  ngOnInit() {
    this.pesquisarMedicos();
    this.pesquisarMedicamentos();
    const codigoPaciente = this.rota.snapshot.params['id'];
    if(codigoPaciente){
      this.carregarPaciente(codigoPaciente);
    }
  }

  carregarPaciente(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.paciente = data;
      }
    );
  }
  
  inserir(form: FormControl) {
    this.service.adicionar(this.paciente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Paciente cadastrado'});
      form.reset();
    });
  }

  alterar(form: FormControl) {
    this.service.alterar(this.paciente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Paciente alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.paciente.id);
  }

  pesquisarMedicos(){
    this.service.listarMedicos()
    .then((dados)=>{
      this.medicos=dados
      .map(m => ({ label: m.nome, value: m.id }));
    });
  }

  pesquisarMedicamentos(){
    this.service.listarMedicamentos()
    .then((dados)=>{
      this.medicamentos=dados
      .map(m => ({ label: m.nome, value: m.id }));
    });
  }
  
  
}
