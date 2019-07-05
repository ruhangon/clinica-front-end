import { ButtonModule } from 'primeng/button';
import { MedicosModule } from './medicos/medicos.module';
import { MedicosCadastroComponent } from './medicos/medicos-cadastro/medicos-cadastro.component';
import { MedicamentosModule } from './medicamentos/medicamentos.module';
import { MedicamentosCadastroComponent } from './medicamentos/medicamentos-cadastro/medicamentos-cadastro.component';
import { PacientesModule } from './pacientes/pacientes.module';
import { PacientesCadastroComponent } from './pacientes/pacientes-cadastro/pacientes-cadastro.component';
import { PacientesPesquisaComponent } from './pacientes/pacientes-pesquisa/pacientes-pesquisa.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {Routes, RouterModule} from '@angular/router';

const rotas: Routes = [
  {path: '', redirectTo:'pacientes', pathMatch:'full'},
  {path: 'medicos', component: MedicosCadastroComponent},
  {path: 'medicamentos', component: MedicamentosCadastroComponent},
  {path: 'pacientes', component: PacientesPesquisaComponent},
    {path: 'pacientes/novo', component: PacientesCadastroComponent},
  {path: 'pacientes/:id', component: PacientesCadastroComponent}
  ];

@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MedicosModule,
    MedicamentosModule,
    PacientesModule,
    HttpClientModule,
    ToastModule,    
SidebarModule,
    ButtonModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [
  MessageService,
  ConfirmationService
  ],
bootstrap: [AppComponent]
})

export class AppModule { }
