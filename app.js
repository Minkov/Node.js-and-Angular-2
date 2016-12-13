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
app.get('/superheroes', function (req, res) {
    res.send({
        result: superheroes
    });
});
app.listen(3000, function () { return console.log('App listening on :3000'); });
//# sourceMappingURL=app.js.map