// Elementos importados de Angular
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces2/cdz.interfaces2';

@Component
(
  {
    // Nombre del componente
    selector: 'app-agregar2',
    // Documento HTML asociado a este componente
    templateUrl: './agregar2.component.html'
  }
)
export class Agregar2Component
{
  // Esta variable de tipo "Personaje" es una entrada emitida por el componente padre: "MainPage2Component"
  @Input() nuevo: Personaje =
  {
    nombre: "",
    poder: undefined
  };

  // Declaración de un evento de salida: Envía información de tipo "Personaje" al componente padre: "MainPage2Component"
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  agregar(): void
  {
    // Validación: Si el nombre en el formulario se encuentra vacío
    if (this.nuevo.nombre.trim().length == 0) {return;}

    // Disparo del evento "onNuevoPersonaje": Envío de la propiedad "nuevo" (enlazada al formulario)
    this.onNuevoPersonaje.emit(this.nuevo);

    // Blanqueo de la propiedad "nuevo" (enlazada al formulario)
    this.nuevo =
    {
      nombre: "",
      poder: undefined
    };
  }
}
