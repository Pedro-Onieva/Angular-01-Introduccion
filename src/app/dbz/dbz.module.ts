// Elementos importados de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Elementos propios
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule
(
  {
    // Listado de componentes y canalizaciones que conforman el módulo
    declarations:
    [
      MainPageComponent,
      PersonajesComponent,
      AgregarComponent,
    ],
    // Listado de componentes y canalizaciones que podrán utilizar los módulos que importen este módulo
    exports:
    [
      MainPageComponent
    ],
    // Listado de módulos importados por este módulo
    imports:
    [
      CommonModule,
      FormsModule
    ],
    // Listado de servicios disponibles en el módulo
    providers:
    [
      DbzService
    ]
  }
)
export class DbzModule { }
