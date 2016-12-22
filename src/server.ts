import { FactionModel } from './shared/models/faction.model';
import { SuperheroModel } from './shared/models/superhero.model';

import express = require('express');

let app = express();

app.set('view engine', 'pug');
app.set('views', 'dist/views');

app.use('/libs', express.static('./node_modules'));
app.use('/static', express.static('./dist/public'));
app.use('/shared', express.static('./dist/shared'));

app.get('/', (req: any, res: any) => {
    return res.render('index');
});

let superheroes: SuperheroModel[] = [
    { name: 'Batman', secretIdentity: 'Bruce Wayne', powers: ['Utility belt', 'Martial arts', 'Intelligence'] },
    { name: 'Dr. Strange', secretIdentity: 'Dr. Stephen Strange', powers: ['Magic', 'Martial arts'] },
    { name: 'Spiderman', secretIdentity: 'Peter Parker', powers: ['Web', 'Agility', 'Super strength'] }
];

let factions: FactionModel[] = [
    { name: 'Avengers' },
    { name: 'Justice League' },
    { name: 'The Bat Family' },
    { name: 'Fantastic Four' },
    { name: 'Guardians of the Galaxy' }
];

app.get('/api/superheroes', (req: any, res: any) => {
    res.send({
        data: superheroes
    });
});

app.get('/api/factions', (req: any, res: any) => {
    res.send({
        data: factions
    });
});

app.listen(3000, () => console.log('App listening on :3000'));
