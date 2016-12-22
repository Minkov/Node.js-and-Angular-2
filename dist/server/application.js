"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var mongoose = require("mongoose");
var connectMongo = require("connect-mongo");
var MongoStore = connectMongo(session);
var Application = (function () {
    function Application(data) {
        this.app = express();
        this.data = data;
    }
    Application.prototype.use = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        (_a = this.app).use.apply(_a, params);
        return this;
        var _a;
    };
    Application.prototype.get = function (url, cb) {
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        (_a = this.app).get.apply(_a, [url, cb].concat(others));
        return this;
        var _a;
    };
    Application.prototype.post = function (url, cb) {
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        (_a = this.app).post.apply(_a, [url, cb].concat(others));
        return this;
        var _a;
    };
    Application.prototype.put = function (url, cb) {
        var others = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            others[_i - 2] = arguments[_i];
        }
        (_a = this.app).put.apply(_a, [url, cb].concat(others));
        return this;
        var _a;
    };
    Application.prototype.config = function () {
        this.app.set('view engine', 'pug');
        this.app.set('views', 'dist/views');
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
        }));
        return this;
    };
    Application.prototype.run = function (port, cb) {
        this.app.listen(port, cb);
        return this;
    };
    Application.prototype.stop = function () {
        this.app.stop();
    };
    return Application;
}());
exports.Application = Application;
;
