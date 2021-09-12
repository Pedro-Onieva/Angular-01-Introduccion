import { Component } from '@angular/core';

@Component
(
  {
    // Nombre del componente
    selector: 'app-listado',
    // Documento HTML asociado a este componente
    templateUrl: './listado.component.html'
  }
)
export class ListadoComponent {
  // Propiedades de la clase
  heroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Capitán América"];
  heroeEliminado?: string;

  // Métodos de la clase
  eliminarHeroe(): void
  {
    this.heroeEliminado = this.heroes.pop();
  }
}
