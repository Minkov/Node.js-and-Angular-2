
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './config/routes';

import { AppComponent } from './components/app.component/app.component';

//  Pages
import { SuperheroesListPage } from './pages/superheroes-list/superheroes-list.page';
import { FactionsListPage } from './pages/factions-list/factions-list.page';

//  Services
import { SuperheroesService } from './services/superheroes.service';
import { FactionsService } from './services/factions-service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
    AppComponent,
    SuperheroesListPage,
    FactionsListPage
  ],
  bootstrap: [AppComponent],
  providers: [
    SuperheroesService,
    FactionsService
  ]
})
export class AppModule { }
