import { Superhero } from '../../models/superhero.model';
import { SuperheroesService } from '../../services/superheroes.service';
import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <h1>The Superheroes Universe!</h1>
  <nav>
    <a routerLink="/superheroes-list" routerLinkActive="active">Superheroes</a>
    <a routerLink="/factions-list" routerLinkActive="active">Factions</a>
  </nav>
  <router-outlet>
  </router-outlet>
  `
})
export class AppComponent { }
