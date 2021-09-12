// Elementos importados de Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component
(
  {
    // Nombre del componente
    selector: 'app-agregar',
    // Documento HTML asociado a este componente
    templateUrl: './agregar.component.html'
  }
)
export class AgregarComponent
{
  // Esta variable de tipo "Personaje" es una entrada emitida por el componente padre: "MainPageComponent"
  @Input() nuevo: Personaje =
  {
    nombre: "",
    poder: undefined
  };

  // Inyección de dependencias a través del constructor
  constructor(private dbzService: DbzService)
  {}

  agregar(): void
  {
    // Validación: Si el nombre en el formulario se encuentra vacío
    if (this.nuevo.nombre.trim().length == 0) {return;}

    // Invocación del método "agregarPersonajes" disponible en el servicio inyectado en esta clase
    this.dbzService.agregarPersonajes(this.nuevo);

    // Blanqueo de la propiedad "nuevo" (enlazada al formulario)
    this.nuevo =
    {
      nombre: "",
      poder: undefined
    };
  }
}
