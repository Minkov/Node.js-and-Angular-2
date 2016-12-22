import { FactionsService } from '../../services/factions.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FactionDetailsPage } from './faction-details/faction-details.page';
import { FactionsListPage } from './factions-list/factions-list.page';

let routes: Routes = [{
    path: 'factions',
    component: FactionsListPage,
    children: [
        { path: ':name', component: FactionDetailsPage }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FactionsListPage,
        FactionDetailsPage
    ],
    providers: [
        FactionsService
    ],
    exports: [
        RouterModule
    ]
})
export class FactionsModule { }