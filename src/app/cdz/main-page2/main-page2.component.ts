// Elementos importados de Angular
import { Component } from '@angular/core';

// Elementos propios
import { Personaje } from '../interfaces2/cdz.interfaces2';

@Component
(
  {
    // Nombre del componente
    selector: 'app-main-page2',
    // Documento HTML asociado a este componente
    templateUrl: './main-page2.component.html'
  }
)
export class MainPage2Component
{
  // Propiedades de la clase
  personajes: Personaje[] = 
  [
    {
      nombre: "Seiya",
      poder: 16000
    },
    {
      nombre: "Shaka",
      poder: 20000
    }
  ];

  nuevo: Personaje =
  {
    nombre: "Camus",
    poder: 11000
  };

  // Métodos de la clase
  agregarNuevoPersonaje(personajeFormulario: Personaje)
  {
    // La siguiente instrucción establece un punto de ruptura a fin de llevar a cabo un proceso de depuración
    debugger;
    // Se añade a la propiedad de tipo arreglo "personajes" el elemento recibido desde el componente hijo: "Agregar2Component"
    this.personajes.push(personajeFormulario);
  }
}