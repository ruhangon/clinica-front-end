import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PacientesService } from './pacientes.service';
import { PacientesPesquisaComponent } from './pacientes-pesquisa/pacientes-pesquisa.component';
import { PacientesCadastroComponent } from './pacientes-cadastro/pacientes-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PacientesPesquisaComponent, PacientesCadastroComponent],
  imports: [
    CommonModule,
    DropdownModule,
    ToastModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    TooltipModule,
    ConfirmDialogModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    PacientesService
  ],
  exports:[
    PacientesPesquisaComponent,
    PacientesCadastroComponent
  ]
})
export class PacientesModule { }
