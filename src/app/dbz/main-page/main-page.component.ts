// Elementos importados de Angular
import { Component } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces/dbz.interfaces';

@Component
(
  {
    // Nombre del componente
    selector: 'app-main-page',
    // Documento HTML asociado a este componente
    templateUrl: './main-page.component.html'
  }
)
export class MainPageComponent
{
  // Propiedades de la clase
  nuevo: Personaje =
  {
    nombre: "Trunks",
    poder: 11000
  };

  // Constructor de la clase
  constructor()
  {}
}