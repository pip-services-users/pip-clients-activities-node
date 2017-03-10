"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var ActivitiesNullClient = (function (_super) {
    __extends(ActivitiesNullClient, _super);
    function ActivitiesNullClient(config) {
        _super.call(this, ActivitiesNullClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    ActivitiesNullClient.prototype.getPartyActivities = function (correlationId, filter, paging, callback) {
        if (callback)
            callback(null, []);
    };
    ActivitiesNullClient.prototype.logPartyActivity = function (correlationId, activity, callback) {
        if (callback)
            callback(null, null);
    };
    ActivitiesNullClient.prototype.batchPartyActivities = function (correlationId, activities, callback) {
        if (callback)
            callback(null, null);
    };
    ActivitiesNullClient.prototype.deletePartyActivities = function (correlationId, filter, callback) {
        if (callback)
            callback(null, null);
    };
    /**
     * Unique descriptor for the ActivitiesNullClient component
     */
    ActivitiesNullClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-activities", "null", "1.0");
    return ActivitiesNullClient;
}(pip_services_runtime_node_5.AbstractClient));
exports.ActivitiesNullClient = ActivitiesNullClient;
