import { Superhero } from './../../../../shared/models/superhero.model';
import { Component } from '@angular/core';
import { PageComponent } from '../page.component';
import { SuperheroesService } from '../../services/superheroes.service';

@Component({
    moduleId: module.id,
    templateUrl: './superheroes-list.page.html'
})
export class SuperheroesListPage implements PageComponent {
    superheroes: Superhero[] = [];

    constructor(private superheroesData: SuperheroesService) { }

    ngOnInit() {
        this.superheroesData.getAll()
            .then(superheroes => {
                this.superheroes = superheroes;
            });
    }
}