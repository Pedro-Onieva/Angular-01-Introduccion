// Elementos importados de Angular
import { NgModule } from "@angular/core";

// Elementos propios
import { AcumuladorComponent } from './acumulador/acumulador.component';

@NgModule
(
    {
        // Listado de componentes y canalizaciones que conforman el módulo
        declarations:
        [
            AcumuladorComponent
        ],
        // Listado de componentes y canalizaciones que podrán utilizar los módulos que importen este módulo
        exports:
        [
            AcumuladorComponent
        ]
    }
)
export class AcumuladorModule
{

}