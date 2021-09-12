import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService
{
    // Propiedades de la clase
    private _personajes: Personaje[] = 
    [
        {
        nombre: "Goku",
        poder: 16000
        },
        {
        nombre: "Vegeta",
        poder: 13000
        }
    ];

    // La siguiente propiedad debe retornar una copia del arreglo "_personajes"
    get personajes(): Personaje[]
    {
        // El operador "spread" (...) extrae los elementos de un arreglo definiendolos en una lista separada por comas
        return [...this._personajes];
    }
    
    // Métodos de la clase
    agregarPersonajes(personajeAAñadir: Personaje)
    {
        this._personajes.push(personajeAAñadir);
    }
}