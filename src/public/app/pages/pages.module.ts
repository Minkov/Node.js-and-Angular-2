import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FactionsModule } from './fractions/factions.module';
import { SuperheroesModule } from './superheroes/superheroes.module';

@NgModule({
    imports: [
        SuperheroesModule,
        FactionsModule
    ],
    exports: [
        RouterModule
    ]
})
export class PagesModule { }
