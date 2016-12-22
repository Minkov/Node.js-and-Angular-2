import { ActivatedRoute, Params } from '@angular/router';
import { PageComponent } from '../../page.component';
import { SuperheroModel } from '../../../../../shared/models/superhero.model';
import { SuperheroesService } from './../../../services/superheroes.service';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: './superhero-details.page.html'
})
export class SuperheroDetailsPage implements PageComponent {
    superhero: SuperheroModel = { name: '', secretIdentity: '', powers: [] };
    constructor(
        private superheroesData: SuperheroesService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.superheroesData.getByName(params['name']))
            .subscribe(superhero => this.superhero = superhero);
    }
}