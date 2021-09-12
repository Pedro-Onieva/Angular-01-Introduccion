// Elementos importados de Angular
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Elementos propios
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule
(
    {
        // Listado de componentes y canalizaciones que conforman el módulo
        declarations:
        [
            HeroeComponent,
            ListadoComponent
        ],
        // Listado de componentes y canalizaciones que podrán utilizar los módulos que importen este módulo
        exports:
        [
            ListadoComponent
        ],
        // Listado de módulos importados por este módulo
        imports:
        [
            CommonModule
        ]
    }
)
export class HeroesModule
{

}