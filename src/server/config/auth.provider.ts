import { Application } from './../application';
import { UserModel } from './../../shared/models/user.model';
import { DataService } from '../data';

import passport = require('passport');
import passportLocal = require('passport-local');

import Strategy = passportLocal.Strategy;

export class AuthProvider {
    strategy: Strategy;

    constructor(
        private data: DataService
    ) { }

    attachTo(app: Application) {
        app.use(passport.initialize());
        app.use(passport.session());

        this.strategy = new Strategy((username: string, password: string, done: Function) => {
            this.data.findUserByCredentials(username, password)
                .then((user: UserModel) => {
                    if (user) {
                        return done(null, user);
                    }

                    return done(null, false);
                })
                .catch((error: Error) => done(error, null));
        });

        passport.use(this.strategy);

        passport.serializeUser((user: UserModel, done: Function) => {
            if (user) {
                done(null, user._id);
            }
        });

        passport.deserializeUser((id: string, done: Function) => {
            this.data.findUserById(id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }

                    return done(null, false);
                })
                .catch(error => done(error, false));
        });
    }
}