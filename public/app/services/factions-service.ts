import { Faction } from '../models/faction.model';
import { ResponseResult } from '../models/responseResult';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';


@Injectable()
export class FactionsService {
    private factionsUrl = '/api/factions';
    constructor(private http: Http) { }

    getAll(): Promise<Faction[]> {
        return this.http.get(this.factionsUrl)
            .toPromise()
            .then(response => {
                let data = response.json() as ResponseResult<Faction[]>;
                return data.result;
            });

    }
};
