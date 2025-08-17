import { Routes } from '@angular/router';
import { AvisosLegalesComponent } from './avisos-legales/avisos-legales.component';
import { HomeComponent } from './home/home.component';
import { ContinentalGameComponent } from './continental-game/continental-game.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'continental-game', component: ContinentalGameComponent },
    { path: 'avisos-legales', component: AvisosLegalesComponent }
];
