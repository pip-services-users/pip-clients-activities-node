"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var Version1 = require('../version1');
var ActivitiesFactory = (function (_super) {
    __extends(ActivitiesFactory, _super);
    function ActivitiesFactory() {
        _super.call(this, pip_services_runtime_node_2.DefaultFactory.Instance);
        this.register(Version1.ActivitiesNullClient.Descriptor, Version1.ActivitiesNullClient);
        this.register(Version1.ActivitiesRestClient.Descriptor, Version1.ActivitiesRestClient);
        this.register(Version1.ActivitiesSenecaClient.Descriptor, Version1.ActivitiesSenecaClient);
        this.register(Version1.ActivitiesLambdaClient.Descriptor, Version1.ActivitiesLambdaClient);
    }
    ActivitiesFactory.Instance = new ActivitiesFactory();
    return ActivitiesFactory;
}(pip_services_runtime_node_1.ComponentFactory));
exports.ActivitiesFactory = ActivitiesFactory;
