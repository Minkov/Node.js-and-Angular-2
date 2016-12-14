"use strict";
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.use('/libs', express.static('./node_modules'));
app.use('/static', express.static('./public'));
app.get('/', function (req, res) {
    return res.render('index');
});
var superheroes = [
    { name: 'Batman', secretIdentity: 'Bruce Wayne', powers: ['Utility belt', 'Martial arts', 'Intelligence'] },
    { name: 'Dr. Strange', secretIdentity: 'Dr. Stephen Strange', powers: ['Magic', 'Martial arts'] }
];
var factions = [
    { name: 'Avengers' },
    { name: 'Justice League' },
    { name: 'The Bat Family' },
    { name: 'Fantastic Four' },
    { name: 'Guardians of the Galaxy' }
];
app.get('/api/superheroes', function (req, res) {
    res.send({
        result: superheroes
    });
});
app.get('/api/factions', function (req, res) {
    res.send({
        result: factions
    });
});
app.listen(3000, function () { return console.log('App listening on :3000'); });
//# sourceMappingURL=app.js.map