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
var factions_service_1 = require("../../services/factions.service");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var faction_details_page_1 = require("./faction-details/faction-details.page");
var factions_list_page_1 = require("./factions-list/factions-list.page");
var routes = [{
        path: 'factions',
        component: factions_list_page_1.FactionsListPage,
        children: [
            { path: ':name', component: faction_details_page_1.FactionDetailsPage }
        ]
    }];
var FactionsModule = (function () {
    function FactionsModule() {
    }
    return FactionsModule;
}());
FactionsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes)
        ],
        declarations: [
            factions_list_page_1.FactionsListPage,
            faction_details_page_1.FactionDetailsPage
        ],
        providers: [
            factions_service_1.FactionsService
        ],
        exports: [
            router_1.RouterModule
        ]
    }),
    __metadata("design:paramtypes", [])
], FactionsModule);
exports.FactionsModule = FactionsModule;
