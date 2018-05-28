"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class ActivitiesHttpClientV1 extends pip_services_net_node_1.CommandableHttpClient {
    constructor(config) {
        super('v1/activities');
        if (config != null)
            this.configure(pip_services_commons_node_1.ConfigParams.fromValue(config));
    }
    getPartyActivities(correlationId, filter, paging, callback) {
        this.callCommand('get_party_activities', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    logPartyActivity(correlationId, activity, callback) {
        this.callCommand('log_party_activity', correlationId, {
            activity: activity
        }, callback);
    }
    batchPartyActivities(correlationId, activities, callback) {
        this.callCommand('batch_party_activities', correlationId, {
            activities: activities
        }, callback);
    }
    deletePartyActivities(correlationId, filter, callback) {
        this.callCommand('delete_party_activities', correlationId, {
            filter: filter
        }, callback);
    }
}
exports.ActivitiesHttpClientV1 = ActivitiesHttpClientV1;
//# sourceMappingURL=ActivitiesHttpClientV1.js.map