import { Routes } from '@angular/router';
import { AvisosLegalesComponent } from './avisos-legales/avisos-legales.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'avisos-legales', component: AvisosLegalesComponent }
];
