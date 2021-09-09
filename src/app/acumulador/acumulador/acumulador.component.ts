import { Component } from "@angular/core";

@Component
(
    {
        // Nombre del componente
        selector: "app-acumulador",
        // Código HTML asociado a este componente
        template: 
        `
        <!-- En este fragmento HTML disponemos de una instancia de la clase "AcumuladorComponent" -->
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>{{base}}</strong></h3>
        <div>    
            <button (click) = "acumular(-base);">-{{base}}</button>
            <span>{{numero}}</span>
            <button (click) = "acumular(base);">+{{base}}</button>
        </div>
        `
    }
)
export class AcumuladorComponent
{
  // Propiedades de la clase
  public titulo: string = 'Acumulador';
  public numero: number = 10;
  public base: number = 5;
  
  // Métodos de la clase
  acumular(valor: number)
  {
    this.numero += valor;
  }
}