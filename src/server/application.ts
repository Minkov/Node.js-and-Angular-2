import express = require('express');
import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import session = require('express-session');
import mongoose = require('mongoose');
import connectMongo = require('connect-mongo');

import { DataService } from './data';
import { AuthProvider } from './config/auth.provider';

let MongoStore = connectMongo(session);

export class Application {
    app: any;
    data: DataService;
    auth: AuthProvider;

    constructor(
        data: DataService
    ) {
        this.app = express();
        this.data = data;
    }


    use(...params: any[]): Application {
        this.app.use(...params);
        return this;
    }

    get(url: string, cb: Function, ...others: any[]) {
        this.app.get(...[url, cb, ...others]);
        return this;
    }
    post(url: string, cb: Function, ...others: any[]) {
        this.app.post(...[url, cb, ...others]);
        return this;
    }

    put(url: string, cb: Function, ...others: any[]) {
        this.app.put(...[url, cb, ...others]);
        return this;
    }

    config(): Application {
        this.app.set('view engine', 'pug');
        this.app.set('views', 'dist/views')

        this.app.use('/libs', express.static('./node_modules'));
        this.app.use('/static', express.static('./dist/public'));
        this.app.use('/shared', express.static('./dist/shared'));

        this.app.use(cookieParser());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(session({
            secret: 'purple unicorn',
            store: new MongoStore({ mongooseConnection: mongoose.connection }),
            resave: true,
            saveUninitialized: true,
            // session: { maxAge: 1000 * 60 * 60 }
        }));

        return this;
    }

    run(port: number, cb?: Function): Application {
        this.app.listen(port, cb);
        return this;
    }
    stop() {
        this.app.stop();
    }
};
