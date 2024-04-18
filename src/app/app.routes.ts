import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PersonajesComponent } from './components/main/personajes/personajes.component';

export const routes: Routes = [
    { path: 'main', component:  MainComponent},
    { path: 'personajes', component: PersonajesComponent},
    { path: '**', redirectTo: 'main'},
    {path: '', redirectTo: '/main', pathMatch: 'full'},
];
