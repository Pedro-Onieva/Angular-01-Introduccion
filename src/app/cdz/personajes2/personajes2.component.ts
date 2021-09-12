// Elementos importados de Angular
import { Component, Input } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces2/cdz.interfaces2';

@Component
(
  {
    // Nombre del componente
    selector: 'app-personajes2',
    // Documento HTML asociado a este componente
    templateUrl: './personajes2.component.html'
  }
)
export class Personajes2Component
{
  // Este arreglo de tipo "Personaje" es una entrada emitida por el componente padre: "MainPage2Component"
  @Input() personajes: Personaje[] = [];
}
