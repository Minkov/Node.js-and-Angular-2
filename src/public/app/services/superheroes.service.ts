import { Observable } from 'rxjs/Rx';
import { SuperheroModel } from './../../../shared/models/superhero.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { Http, Response } from '@angular/http';

@Injectable()
export class SuperheroesService {
    private superheroesUrl = '/api/superheroes';
    constructor(private http: Http) { }

    getAll(): Observable<SuperheroModel[]> {
        return this.http.get(this.superheroesUrl)
            .map((resp: Response) => resp.json().data);
    }

    getByName(name: string): Observable<SuperheroModel> {
        return this.http.get(`${this.superheroesUrl}/${name}`)
            .map((resp: Response) => resp.json().data as SuperheroModel);
    }
};
