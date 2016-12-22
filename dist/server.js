"use strict";
var application_1 = require("./server/application");
var auth_provider_1 = require("./server/config/auth.provider");
var data_1 = require("./server/data");
var config_1 = require("./server/config");
var data = new data_1.DataService();
var app = new application_1.Application(data);
var auth = new auth_provider_1.AuthProvider(data);
auth.attachTo(app);
var routes_1 = require("./server/routes");
routes_1.loadRoutes(app, data);
app.config()
    .run(config_1.port, function () { return console.log('App is running!'); });
