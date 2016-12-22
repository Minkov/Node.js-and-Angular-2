import { Component } from '@angular/core';

import { FactionsService } from '../../../services/factions.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FactionModel } from '../../../../../shared/models/faction.model';
import { PageComponent } from '../../page.component';

@Component({
    moduleId: module.id,
    templateUrl: './faction-details.page.html'
})
export class FactionDetailsPage implements PageComponent {
    faction: FactionModel;

    constructor(
        private factionsService: FactionsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.factionsService.getByName(params['name']))
            .subscribe((faction: FactionModel) => this.faction = faction);
    }
}
