import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDocumentosComponent } from './components/teamBEA_documento/show-documentos/show-documentos.component';
import { ShowVehiculosComponent } from './components/teamBEA_vehiculo/show-vehiculos/show-vehiculos.component';
import { ShowInvolucrarComponent } from './components/teamBEA_involucrar/show-involucrar/show-involucrar.component';
import { ShowMultaComponent } from './components/teamBEA_multa/show-multa/show-multa.component';
import { ShowPersonaComponent } from './components/teamBEA_persona/show-persona/show-persona.component';
import { AddPersonaComponent } from './components/teamBEA_persona/add-persona/add-persona.component';
import { DeletePersonaComponent } from './components/teamBEA_persona/delete-persona/delete-persona.component';
import { ActualizarPersonaComponent } from './components/teamBEA_persona/actualizar-persona/actualizar-persona.component';
import { AddDocumentosComponent } from './components/teamBEA_documento/add-documentos/add-documentos.component';
import { DeleteDocumentosComponent } from './components/teamBEA_documento/delete-documentos/delete-documentos.component';
import { ActualizarDocumentosComponent } from './components/teamBEA_documento/actualizar-documentos/actualizar-documentos.component';
import { AddVehiculosComponent } from './components/teamBEA_vehiculo/add-vehiculos/add-vehiculos.component';
import { DeleteVehiculosComponent } from './components/teamBEA_vehiculo/delete-vehiculos/delete-vehiculos.component';
import { ActualizarVehiculosComponent } from './components/teamBEA_vehiculo/actualizar-vehiculos/actualizar-vehiculos.component';
import { AddInvolucrarComponent } from './components/teamBEA_involucrar/add-involucrar/add-involucrar.component';
import { DeleteInvolucrarComponent } from './components/teamBEA_involucrar/delete-involucrar/delete-involucrar.component';
import { ActualizarInvolucrarComponent } from './components/teamBEA_involucrar/actualizar-involucrar/actualizar-involucrar.component';
import { AddMultaComponent } from './components/teamBEA_multa/add-multa/add-multa.component';
import { DeleteMultaComponent } from './components/teamBEA_multa/delete-multa/delete-multa.component';
import { ActualizarMultaComponent } from './components/teamBEA_multa/actualizar-multa/actualizar-multa.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },


  {
    path: 'personas',
    component: ShowPersonaComponent

  },
  {
    path: 'personas/add',
    component:  AddPersonaComponent

  },
  {
    path: 'personas/delete',
    component:  DeletePersonaComponent

  },
  {
    path: 'personas/actualizar',
    component:  ActualizarPersonaComponent

  },
  {
    path: 'documentos',
    component: ShowDocumentosComponent
  },
  {
    path: 'documentos/add',
    component: AddDocumentosComponent
  },
  {
    path: 'documentos/delete',
    component: DeleteDocumentosComponent
  },
  {
    path: 'documentos/actualizar',
    component: ActualizarDocumentosComponent
  },
  {
    path: 'vehiculos',
    component: ShowVehiculosComponent
  },
  {
    path: 'vehiculos/add',
    component: AddVehiculosComponent
  },
  {
    path: 'vehiculos/delete',
    component: DeleteVehiculosComponent
  },
  {
    path: 'vehiculos/actualizar',
    component: ActualizarVehiculosComponent
  },

  {
    path: 'involucrar',
    component: ShowInvolucrarComponent
  },
  {
    path: 'involucrar/add',
    component: AddInvolucrarComponent
  },
  {
    path: 'involucrar/delete',
    component: DeleteInvolucrarComponent
  },
  {
    path: 'involucrar/actualizar',
    component: ActualizarInvolucrarComponent
  },

  {
    path: 'multas',
    component: ShowMultaComponent
  },
  {
    path: 'multas/add',
    component: AddMultaComponent
  },
  {
    path: 'multas/delete',
    component: DeleteMultaComponent
  },
  {
    path: 'multas/actualizar',
    component: ActualizarMultaComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

