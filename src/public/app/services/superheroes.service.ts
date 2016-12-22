import { ResponseResult } from './../../../shared/models/responseResult';
import { Superhero } from './../../../shared/models/superhero.model';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';


@Injectable()
export class SuperheroesService {
    private superheroesUrl = '/api/superheroes';
    constructor(private http: Http) { }

    getAll(): Promise<Superhero[]> {
        return this.http.get(this.superheroesUrl)
            .toPromise()
            .then(response => {
                let data = response.json() as ResponseResult<Superhero[]>;
                return data.result;
            });

    }
};
