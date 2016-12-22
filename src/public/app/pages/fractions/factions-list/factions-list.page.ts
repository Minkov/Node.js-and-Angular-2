import { FactionModel } from '../../../../../shared/models/faction.model';
import { FactionsService } from '../../../services/factions.service';
import { PageComponent } from '../../page.component';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './factions-list.page.html'
})
export class FactionsListPage implements PageComponent {
    factions: FactionModel[] = [];
    constructor(private factionsService: FactionsService) { }

    ngOnInit() {
        this.factionsService.getAll()
            .subscribe(factions => this.factions = factions);
    }
}
