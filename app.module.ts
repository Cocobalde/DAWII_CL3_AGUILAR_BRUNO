import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotasComponent } from './notas/notas.component';
import { EpisodiosComponent } from './episodios/episodios.component';

@NgModule({
  declarations: [
    AppComponent,
    EstacionamientoComponent,
    InicioComponent,
    NotasComponent,
    EpisodiosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
