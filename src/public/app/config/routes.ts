import { pages } from './../pages/index';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: 'superheroes-list', component: pages.superheroes },
    { path: 'factions-list', component: pages.factions },
];