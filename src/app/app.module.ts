import { ButtonModule } from 'primeng/button';
import { MedicosModule } from './medicos/medicos.module';
import { MedicosCadastroComponent } from './medicos/medicos-cadastro/medicos-cadastro.component';
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
  {path: 'medicos', component: MedicosCadastroComponent}
  ];

@NgModule({
  declarations: [
    AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MedicosModule,
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
