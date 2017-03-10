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
var ActivitiesLambdaClient = (function (_super) {
    __extends(ActivitiesLambdaClient, _super);
    function ActivitiesLambdaClient(config) {
        _super.call(this, ActivitiesLambdaClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    ActivitiesLambdaClient.prototype.getPartyActivities = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        this.call('get_party_activities', {
            correlation_id: correlationId,
            filter: filter,
            paging: paging
        }, callback);
    };
    ActivitiesLambdaClient.prototype.logPartyActivity = function (correlationId, activity, callback) {
        callback = this.instrument(correlationId, 'activities.log_party_activity', callback);
        this.call('log_party_activity', {
            correlation_id: correlationId,
            activity: activity
        }, callback);
    };
    ActivitiesLambdaClient.prototype.batchPartyActivities = function (correlationId, activities, callback) {
        callback = this.instrument(correlationId, 'activities.batch_party_activities', callback);
        this.call('batch_party_activities', {
            correlation_id: correlationId,
            activities: activities
        }, callback);
    };
    ActivitiesLambdaClient.prototype.deletePartyActivities = function (correlationId, filter, callback) {
        callback = this.instrument(correlationId, 'activities.delete_party_activities', callback);
        this.call('delete_party_activities', {
            correlation_id: correlationId,
            filter: filter
        }, callback);
    };
    /**
     * Unique descriptor for the ActivitiesLambdaClient component
     */
    ActivitiesLambdaClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-activities", "lambda", "1.0");
    return ActivitiesLambdaClient;
}(pip_services_runtime_node_5.LambdaClient));
exports.ActivitiesLambdaClient = ActivitiesLambdaClient;
