import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import { SectionComponent } from './components/layout/section/section.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';

import { ShowPersonaComponent } from './components/teamBEA_persona/show-persona/show-persona.component';
import { DeleteMultaComponent } from './components/teamBEA_multa/delete-multa/delete-multa.component';
import { ActualizarMultaComponent } from './components/teamBEA_multa/actualizar-multa/actualizar-multa.component';
import { TableModule } from 'primeng/table';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    SectionComponent,
    FooterComponent,

    ShowPersonaComponent,
     DeleteMultaComponent,
     ActualizarMultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
