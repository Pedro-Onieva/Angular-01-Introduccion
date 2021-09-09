// Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';
import { AcumuladorModule } from './acumulador/acumulador.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  // Listado de componentes y canalizaciones que conforman el módulo
  declarations: [
    AppComponent,
  ],
  // Listado de módulos importados por este módulo
  imports: [
    BrowserModule,
    HeroesModule,
    AcumuladorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
