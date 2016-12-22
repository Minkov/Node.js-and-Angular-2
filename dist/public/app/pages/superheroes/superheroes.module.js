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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var superheroes_list_page_1 = require("./superheroes-list/superheroes-list.page");
var superhero_details_page_1 = require("./superhero-details/superhero-details.page");
var superheroes_service_1 = require("./../../services/superheroes.service");
var router_1 = require("@angular/router");
var routes = [
    { path: 'superheroes', component: superheroes_list_page_1.SuperheroesListPage },
    { path: 'superheroes/:name', component: superhero_details_page_1.SuperheroDetailsPage }
];
var SuperheroesModule = (function () {
    function SuperheroesModule() {
    }
    return SuperheroesModule;
}());
SuperheroesModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [
            superhero_details_page_1.SuperheroDetailsPage,
            superheroes_list_page_1.SuperheroesListPage
        ],
        providers: [
            superheroes_service_1.SuperheroesService
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], SuperheroesModule);
exports.SuperheroesModule = SuperheroesModule;
