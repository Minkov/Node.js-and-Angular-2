"use strict";
function loadRoutes(app, data) {
    app.get('/', function (req, res) {
        return res.render('index');
    });
    app.get('/api/superheroes', function (req, res) {
        data.getSuperheroes()
            .then(function (superheroes) {
            return res.send({
                data: superheroes
            });
        });
    });
    app.get('/api/superheroes/:name', function (req, res) {
        var nameToLower = req.params.name.toLowerCase();
        data.getSuperheroByName(nameToLower)
            .then(function (superhero) {
            return res.send({
                data: superhero
            });
        });
    });
    app.get('/api/factions', function (req, res) {
        data.getFractions()
            .then(function (factions) {
            return res.send({
                data: factions
            });
        });
    });
    app.get('/api/factions/:name', function (req, res) {
        var nameToLower = req.params.name.toLowerCase();
        data.getFractionByName(nameToLower)
            .then(function (faction) {
            return res.send({
                data: faction
            });
        });
    });
}
exports.loadRoutes = loadRoutes;
