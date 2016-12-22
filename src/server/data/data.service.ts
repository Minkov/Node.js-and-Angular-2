import { FactionModel } from './../../shared/models/faction.model';
import { SuperheroModel } from './../../shared/models/superhero.model';
import { UserModel } from './../../shared/models/user.model';

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

export class DataService {
    findUserByCredentials(username: string, password: string): Promise<UserModel> {
        return Promise.resolve(null);
    }

    findUserById(id: string): Promise<UserModel> {
        return Promise.resolve(null);
    }

    getFractionByName(name: string): Promise<FactionModel> {
        return Promise.resolve(factions.find(f => f.name === name));
    }

    getFractions(): Promise<FactionModel[]> {
        return Promise.resolve(factions);
    }

    getSuperheroByName(name: string): Promise<SuperheroModel> {
        return Promise.resolve(superheroes.find(f => f.name.toLowerCase() === name));
    }

    getSuperheroes(): Promise<SuperheroModel[]> {
        return Promise.resolve(superheroes);
    }
};
