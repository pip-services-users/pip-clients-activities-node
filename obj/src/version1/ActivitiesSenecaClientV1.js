"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_seneca_node_1 = require("pip-services-seneca-node");
class ActivitiesSenecaClientV1 extends pip_services_seneca_node_1.CommandableSenecaClient {
    constructor(config) {
        super('activities');
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
exports.ActivitiesSenecaClientV1 = ActivitiesSenecaClientV1;
//# sourceMappingURL=ActivitiesSenecaClientV1.js.map