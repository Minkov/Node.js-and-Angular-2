import express = require('express');

let app = express();

app.set('view engine', 'pug');

app.use('/libs', express.static('./node_modules'));
app.use('/static', express.static('./public'));

app.get('/', (req, res) => {
    return res.render('index');
});

let superheroes = [
    { name: 'Batman', secretIdentity: 'Bruce Wayne', powers: ['Utility belt', 'Martial arts', 'Intelligence'] },
    { name: 'Dr. Strange', secretIdentity: 'Dr. Stephen Strange', powers: ['Magic', 'Martial arts'] }
];

app.get('/superheroes', (req, res) => {
    res.send({
        result: superheroes
    });
});

app.listen(3000, () => console.log('App listening on :3000'));