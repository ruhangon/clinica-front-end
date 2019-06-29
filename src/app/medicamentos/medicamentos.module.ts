import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MedicamentosService } from './medicamentos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicamentosCadastroComponent } from './medicamentos-cadastro/medicamentos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [MedicamentosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,  
    ButtonModule
  ],
  providers: [
    MedicamentosService
  ],
  exports:[
    MedicamentosCadastroComponent
  ]
})
export class MedicamentosModule { }
