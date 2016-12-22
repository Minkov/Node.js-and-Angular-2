import { Component } from '@angular/core';

import { SuperheroesService } from '../../../services/superheroes.service';
import { PageComponent } from '../../page.component';
import { SuperheroModel } from '../../../../../shared/models/superhero.model';

@Component({
    moduleId: module.id,
    templateUrl: './superheroes-list.page.html'
})
export class SuperheroesListPage implements PageComponent {
    superheroes: SuperheroModel[] = [];

    constructor(private superheroesData: SuperheroesService) { }

    ngOnInit() {
        this.superheroesData.getAll()
            .subscribe(superheroes => {
                this.superheroes = superheroes;
            });
    }
}