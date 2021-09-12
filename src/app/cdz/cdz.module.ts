// Elementos importados de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Elementos propios
import { MainPage2Component } from './main-page2/main-page2.component';
import { Personajes2Component } from './personajes2/personajes2.component';
import { Agregar2Component } from './agregar2/agregar2.component';

@NgModule
(
  {
    // Listado de componentes y canalizaciones que conforman el módulo
    declarations:
    [
      MainPage2Component,
      Personajes2Component,
      Agregar2Component
    ],
    // Listado de componentes y canalizaciones que podrán utilizar los módulos que importen este módulo
    exports:
    [
      MainPage2Component
    ],
     // Listado de módulos importados por este módulo
    imports:
    [
      CommonModule,
      FormsModule
    ]
  }
)
export class CdzModule { }
