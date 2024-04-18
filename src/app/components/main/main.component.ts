import { Component } from '@angular/core';

// Importar componentes de la librería de ng-bootstrap
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


// Importar los componentes que se van a utilizar
import { PersonajesComponent } from "./personajes/personajes.component";
import { ArteDisenoComponent } from './arte-diseno/arte-diseno.component';
import { BestiarioComponent } from './bestiario/bestiario.component';
import { CuriosidadesComponent } from './curiosidades/curiosidades.component';
import { HistoriaTramaComponent } from './historia-trama/historia-trama.component';
import { LocalizacionesComponent } from './localizaciones/localizaciones.component';
import { SistemaJuegoComponent } from './sistema-juego/sistema-juego.component';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    providers: [],
    imports: [NgbNavModule, PersonajesComponent, ArteDisenoComponent, BestiarioComponent,
                CuriosidadesComponent, HistoriaTramaComponent, LocalizacionesComponent, SistemaJuegoComponent, CommonModule]
})
export class MainComponent {
    active = 1;
}
