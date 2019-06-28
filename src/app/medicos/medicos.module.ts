import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MedicosService } from './medicos.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosCadastroComponent } from './medicos-cadastro/medicos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [MedicosCadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    InputTextModule,  
    ButtonModule
  ],
  providers: [
    MedicosService
  ],
  exports:[
    MedicosCadastroComponent
  ]
})
export class MedicosModule { }
