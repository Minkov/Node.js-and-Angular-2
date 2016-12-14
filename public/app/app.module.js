"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var routes_1 = require('./config/routes');
var app_component_1 = require('./components/app.component/app.component');
//  Pages
var superheroes_list_page_1 = require('./pages/superheroes-list/superheroes-list.page');
var factions_list_page_1 = require('./pages/factions-list/factions-list.page');
//  Services
var superheroes_service_1 = require('./services/superheroes.service');
var factions_service_1 = require('./services/factions-service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes, { useHash: true })
            ],
            declarations: [
                app_component_1.AppComponent,
                superheroes_list_page_1.SuperheroesListPage,
                factions_list_page_1.FactionsListPage
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                superheroes_service_1.SuperheroesService,
                factions_service_1.FactionsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map