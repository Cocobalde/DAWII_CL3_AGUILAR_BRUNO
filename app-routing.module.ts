import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component'; // Importa el componente de estacionamiento

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'estacionamiento', component: EstacionamientoComponent },
   { path: 'notas', component: NotasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
