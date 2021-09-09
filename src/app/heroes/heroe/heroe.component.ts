import { Component } from "@angular/core";

@Component
(
    {
        // Nombre del componente
        selector: "app-heroe",
        // Documento HTML asociado a este componente
        templateUrl: "./heroe.component.html"
    }
)
export class HeroeComponent
{
    // Propiedades de la clase
    nombre: string = "Ironman";
    edad: number = 34;
    get nombreEnMayusculas() : string
    {
        return this.nombre.toUpperCase();
    }

    // Métodos de la clase
    obtenerHeroe(): string
    {
        // Las siguientes comillas simples nos permiten retornar un fragmento de código HTML
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void
    {
        this.nombre = "Spiderman";
    }

    cambiarEdad(): void
    {
        this.edad = 25;
    }
}