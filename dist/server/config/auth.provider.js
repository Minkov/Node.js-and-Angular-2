"use strict";
var passport = require("passport");
var passportLocal = require("passport-local");
var Strategy = passportLocal.Strategy;
var AuthProvider = (function () {
    function AuthProvider(data) {
        this.data = data;
    }
    AuthProvider.prototype.attachTo = function (app) {
        var _this = this;
        app.use(passport.initialize());
        app.use(passport.session());
        this.strategy = new Strategy(function (username, password, done) {
            _this.data.findUserByCredentials(username, password)
                .then(function (user) {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
                .catch(function (error) { return done(error, null); });
        });
        passport.use(this.strategy);
        passport.serializeUser(function (user, done) {
            if (user) {
                done(null, user._id);
            }
        });
        passport.deserializeUser(function (id, done) {
            _this.data.findUserById(id)
                .then(function (user) {
                if (user) {
                    return done(null, user);
                }
                return done(null, false);
            })
                .catch(function (error) { return done(error, false); });
        });
    };
    return AuthProvider;
}());
exports.AuthProvider = AuthProvider;
