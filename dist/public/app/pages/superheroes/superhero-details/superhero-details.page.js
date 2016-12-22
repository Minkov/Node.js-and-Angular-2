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
var router_1 = require("@angular/router");
var superheroes_service_1 = require("./../../../services/superheroes.service");
var core_1 = require("@angular/core");
var SuperheroDetailsPage = (function () {
    function SuperheroDetailsPage(superheroesData, route) {
        this.superheroesData = superheroesData;
        this.route = route;
        this.superhero = { name: '', secretIdentity: '', powers: [] };
    }
    SuperheroDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.superheroesData.getByName(params['name']); })
            .subscribe(function (superhero) { return _this.superhero = superhero; });
    };
    return SuperheroDetailsPage;
}());
SuperheroDetailsPage = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: './superhero-details.page.html'
    }),
    __metadata("design:paramtypes", [superheroes_service_1.SuperheroesService,
        router_1.ActivatedRoute])
], SuperheroDetailsPage);
exports.SuperheroDetailsPage = SuperheroDetailsPage;
