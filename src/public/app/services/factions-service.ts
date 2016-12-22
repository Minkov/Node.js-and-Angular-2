import { ResponseResult } from './../../../shared/models/responseResult';
import { Faction } from './../../../shared/models/faction.model';
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
