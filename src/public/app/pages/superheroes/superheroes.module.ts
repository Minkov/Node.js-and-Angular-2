import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroesListPage } from './superheroes-list/superheroes-list.page';
import { SuperheroDetailsPage } from './superhero-details/superhero-details.page';

import { SuperheroesService } from './../../services/superheroes.service';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [{
    path: 'superheroes',
    component: SuperheroesListPage,
    children: [
        { path: ':name', component: SuperheroDetailsPage }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SuperheroDetailsPage,
        SuperheroesListPage
    ],
    providers: [
        SuperheroesService
    ],
    exports: [
        RouterModule
    ]
})
export class SuperheroesModule { }
