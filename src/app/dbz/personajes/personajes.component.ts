// Elementos importados de Angular
import { Component, Input } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component
(
  {
    // Nombre del componente
    selector: 'app-personajes',
    // Documento HTML asociado a este componente
    templateUrl: './personajes.component.html'
  }
)
export class PersonajesComponent
{
  // Propiedades de la clase
  get personajes(): Personaje[]
  {
    return this.dbzService.personajes;
  }

  // Inyección de dependencias a través del constructor
  constructor(private dbzService: DbzService)
  {}

}
