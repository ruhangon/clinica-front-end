import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedicosService } from './../medicos.service';
import { Medico } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-medicos-cadastro',
  templateUrl: './medicos-cadastro.component.html',
  styleUrls: ['./medicos-cadastro.component.css']
})
export class MedicosCadastroComponent implements OnInit {

  medico = new Medico();

  constructor(
    private service: MedicosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

    ngOnInit() {
    const codigoMedico = this.rota.snapshot.params['id'];
    if(codigoMedico){
      this.carregarMedico(codigoMedico);
    }
  }

  carregarMedico(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.medico = data;
      }
    );
  }
  
  salvar(form: FormControl) {
    this.service.adicionar(this.medico)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Médico cadastrado'});
      form.reset();
    });
  }

}
