import { PageComponent } from '../../page.component';
import { SuperheroModel } from '../../../../../shared/models/superhero.model';
import { SuperheroesService } from './../../../services/superheroes.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './superhero-details.page.html'
})
export class SuperheroDetailsPage implements PageComponent {
    superheroes: SuperheroModel[] = [];

    constructor(private superheroesData: SuperheroesService) { }

    ngOnInit() {
        this.superheroesData.getAll()
            .then(superheroes => {
                this.superheroes = superheroes;
            });
    }
}