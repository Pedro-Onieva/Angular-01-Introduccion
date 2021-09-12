// Elementos importados de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Elementos propios
import { HeroesModule } from './heroes/heroes.module';
import { AcumuladorModule } from './acumulador/acumulador.module';
import { DbzModule } from './dbz/dbz.module';
import { AppComponent } from './app.component';
import { CdzModule } from './cdz/cdz.module';

@NgModule
(
  {
    // Listado de componentes y canalizaciones que conforman el módulo
    declarations: 
    [
      AppComponent,
    ],
    // Listado de módulos importados por este módulo
    imports: 
    [
      BrowserModule,
      HeroesModule,
      AcumuladorModule,
      DbzModule,
      CdzModule
    ],
    // Listado de servicios disponibles en el módulo
    providers: [],
    bootstrap: [AppComponent]
  }
)
export class AppModule { }
