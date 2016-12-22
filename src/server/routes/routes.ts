import { Application } from '../application';
import { DataService } from '../data';

export function loadRoutes(app: Application, data: DataService) {
    app.get('/', (req: any, res: any) => {
        return res.render('index');
    });

    app.get('/api/superheroes', (req: any, res: any) => {
        data.getSuperheroes()
            .then(superheroes => {
                return res.send({
                    data: superheroes
                });
            });
    });

    app.get('/api/superheroes/:name', (req: any, res: any) => {
        let nameToLower = req.params.name.toLowerCase();
        data.getSuperheroByName(nameToLower)
            .then(superhero => {
                return res.send({
                    data: superhero
                });
            });
    });

    app.get('/api/factions', (req: any, res: any) => {
        data.getFractions()
            .then(factions => {
                return res.send({
                    data: factions
                });
            });
    });

    app.get('/api/factions/:name', (req: any, res: any) => {
        let nameToLower = req.params.name.toLowerCase();
        data.getFractionByName(nameToLower)
            .then(faction => {
                return res.send({
                    data: faction
                });
            });
    });
}
