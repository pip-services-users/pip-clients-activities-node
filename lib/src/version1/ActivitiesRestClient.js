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
var ActivitiesRestClient = (function (_super) {
    __extends(ActivitiesRestClient, _super);
    function ActivitiesRestClient(config) {
        _super.call(this, ActivitiesRestClient.Descriptor);
        if (config != null) {
            this.configure(pip_services_runtime_node_3.ComponentConfig.fromValue(config));
            this.link(new pip_services_runtime_node_4.ComponentSet());
        }
    }
    ActivitiesRestClient.prototype.getPartyActivities = function (correlationId, filter, paging, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        var route = filter.party_id ? '/activities/' + filter.party_id : '/activities';
        var params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        this.addPagingParams(params, paging);
        this.call('get', route, params, callback);
    };
    ActivitiesRestClient.prototype.logPartyActivity = function (correlationId, activity, callback) {
        callback = this.instrument(correlationId, 'activities.log_party_activity', callback);
        this.call('post', '/activities', {
            correlation_id: correlationId,
        }, activity, callback);
    };
    ActivitiesRestClient.prototype.batchPartyActivities = function (correlationId, activities, callback) {
        callback = this.instrument(correlationId, 'activities.batch_party_activities', callback);
        this.call('post', '/activities/batch', {
            correlation_id: correlationId,
        }, activities, callback);
    };
    ActivitiesRestClient.prototype.deletePartyActivities = function (correlationId, filter, callback) {
        callback = this.instrument(correlationId, 'activities.delete_party_activities', callback);
        var params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        this.call('delete', '/activities', params, callback);
    };
    /**
     * Unique descriptor for the ActivitiesRestClient component
     */
    ActivitiesRestClient.Descriptor = new pip_services_runtime_node_2.ComponentDescriptor(pip_services_runtime_node_1.Category.Clients, "pip-services-activities", "rest", "1.0");
    return ActivitiesRestClient;
}(pip_services_runtime_node_5.RestClient));
exports.ActivitiesRestClient = ActivitiesRestClient;
