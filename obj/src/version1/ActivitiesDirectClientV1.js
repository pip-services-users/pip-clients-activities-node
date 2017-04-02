"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_net_node_1 = require("pip-services-net-node");
class ActivitiesDirectClientV1 extends pip_services_net_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services_commons_node_1.Descriptor("pip-services-activities", "controller", "*", "*", "*"));
    }
    getPartyActivities(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'activities.get_party_activities');
        this._controller.getPartyActivities(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    logPartyActivity(correlationId, activity, callback) {
        let timing = this.instrument(correlationId, 'activities.log_party_activity');
        this._controller.logPartyActivity(correlationId, activity, (err, page) => {
            timing.endTiming();
            if (callback)
                callback(err, page);
        });
    }
    batchPartyActivities(correlationId, activities, callback) {
        let timing = this.instrument(correlationId, 'activities.batch_party_activities');
        this._controller.batchPartyActivities(correlationId, activities, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
    deletePartyActivities(correlationId, filter, callback) {
        let timing = this.instrument(correlationId, 'activities.delete_party_activities');
        this._controller.deletePartyActivities(correlationId, filter, (err) => {
            timing.endTiming();
            if (callback)
                callback(err);
        });
    }
}
exports.ActivitiesDirectClientV1 = ActivitiesDirectClientV1;
//# sourceMappingURL=ActivitiesDirectClientV1.js.map