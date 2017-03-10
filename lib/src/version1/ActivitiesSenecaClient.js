"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var pip_services_runtime_node_5 = require('pip-services-runtime-node');
var ActivitiesSenecaClient = (function (_super) {
    __extends(ActivitiesSenecaClient, _super);
    function ActivitiesSenecaClient(config) {
        _super.call(this, ActivitiesSenecaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    ActivitiesSenecaClient.prototype.getPartyActivities = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        this.call('activities', 'get_party_activities', {
            correlation_id: correlationId,
            filter: filter,
            paging: paging
        }, callback);
    };
    ActivitiesSenecaClient.prototype.logPartyActivity = function (correlationId, activity, callback) {
        callback = this.instrument(correlationId, 'activities.log_party_activity', callback);
        this.call('activities', 'log_party_activity', {
            correlation_id: correlationId,
            activity: activity
        }, callback);
    };
    ActivitiesSenecaClient.prototype.batchPartyActivities = function (correlationId, activities, callback) {
        callback = this.instrument(correlationId, 'activities.batch_party_activities', callback);
        this.call('activities', 'batch_party_activities', {
            correlation_id: correlationId,
            activities: activities
        }, callback);
    };
    ActivitiesSenecaClient.prototype.deletePartyActivities = function (correlationId, filter, callback) {
        callback = this.instrument(correlationId, 'activities.delete_party_activities', callback);
        this.call('activities', 'delete_party_activities', {
            correlation_id: correlationId,
            filter: filter
        }, callback);
    };
    /**
     * Unique descriptor for the ActivitiesSenecaClient component
     */
    ActivitiesSenecaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-activities", "seneca", "1.0");
    return ActivitiesSenecaClient;
}(pip_services_runtime_node_5.SenecaClient));
exports.ActivitiesSenecaClient = ActivitiesSenecaClient;
