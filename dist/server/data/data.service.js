"use strict";
var superheroes = [
    { name: 'Batman', secretIdentity: 'Bruce Wayne', powers: ['Utility belt', 'Martial arts', 'Intelligence'] },
    { name: 'Dr. Strange', secretIdentity: 'Dr. Stephen Strange', powers: ['Magic', 'Martial arts'] },
    { name: 'Spiderman', secretIdentity: 'Peter Parker', powers: ['Web', 'Agility', 'Super strength'] }
];
var factions = [
    { name: 'Avengers' },
    { name: 'Justice League' },
    { name: 'The Bat Family' },
    { name: 'Fantastic Four' },
    { name: 'Guardians of the Galaxy' }
];
var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.findUserByCredentials = function (username, password) {
        return Promise.resolve(null);
    };
    DataService.prototype.findUserById = function (id) {
        return Promise.resolve(null);
    };
    DataService.prototype.getFractionByName = function (name) {
        return Promise.resolve(factions.find(function (f) { return f.name === name; }));
    };
    DataService.prototype.getFractions = function () {
        return Promise.resolve(factions);
    };
    DataService.prototype.getSuperheroByName = function (name) {
        return Promise.resolve(superheroes.find(function (f) { return f.name.toLowerCase() === name; }));
    };
    DataService.prototype.getSuperheroes = function () {
        return Promise.resolve(superheroes);
    };
    return DataService;
}());
exports.DataService = DataService;
;
