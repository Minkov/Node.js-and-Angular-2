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
var core_1 = require('@angular/core');
var factions_service_1 = require('../../services/factions-service');
var FactionsListPage = (function () {
    function FactionsListPage(factionsService) {
        this.factionsService = factionsService;
        this.factions = [];
    }
    FactionsListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.factionsService.getAll()
            .then(function (factions) {
            _this.factions = factions;
        });
    };
    FactionsListPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './factions-list.page.html'
        }), 
        __metadata('design:paramtypes', [factions_service_1.FactionsService])
    ], FactionsListPage);
    return FactionsListPage;
}());
exports.FactionsListPage = FactionsListPage;
//# sourceMappingURL=factions-list.page.js.map