import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MedicamentosService } from './../medicamentos.service';
import { Medicamento } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-medicamentos-cadastro',
  templateUrl: './medicamentos-cadastro.component.html',
  styleUrls: ['./medicamentos-cadastro.component.css']
})
export class MedicamentosCadastroComponent implements OnInit {

  medicamento = new Medicamento();

  constructor(
    private service: MedicamentosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
  ) { }

    ngOnInit() {
    const codigoMedicamento = this.rota.snapshot.params['id'];
    if(codigoMedicamento){
      this.carregarMedicamento(codigoMedicamento);
    }
  }

  carregarMedicamento(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.medicamento = data;
      }
    );
  }
  
  salvar(form: FormControl) {
    this.service.adicionar(this.medicamento)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Medicamento cadastrado'});
      form.reset();
    });
  }

}
