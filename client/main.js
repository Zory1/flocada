"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js");
require("reflect-metadata");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var meteor_1 = require("meteor/meteor");
var app_module_1 = require("./imports/app/app.module");
meteor_1.Meteor.startup(function () {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=main.js.map