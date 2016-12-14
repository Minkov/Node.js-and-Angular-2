import { ResponseResult } from '../models/responseResult';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';

import { Superhero } from '../models/superhero.model';

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
