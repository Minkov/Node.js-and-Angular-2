import { Observable } from 'rxjs/Rx';
import { FactionModel } from './../../../shared/models/faction.model';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class FactionsService {
    private factionsUrl = '/api/factions';
    constructor(private http: Http) { }

    getAll(): Observable<FactionModel[]> {
        return this.http.get(this.factionsUrl)
            .map(resp => resp.json().data as FactionModel[]);
    }

    getByName(name: string): Observable<FactionModel> {
        return this.http.get(`${this.factionsUrl}/${name}`)
            .map(resp => resp.json().data as FactionModel);
    }
};
