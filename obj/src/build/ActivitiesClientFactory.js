"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const ActivitiesNullClientV1_1 = require("../version1/ActivitiesNullClientV1");
const ActivitiesDirectClientV1_1 = require("../version1/ActivitiesDirectClientV1");
const ActivitiesHttpClientV1_1 = require("../version1/ActivitiesHttpClientV1");
class ActivitiesClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(ActivitiesClientFactory.NullClientV1Descriptor, ActivitiesNullClientV1_1.ActivitiesNullClientV1);
        this.registerAsType(ActivitiesClientFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1_1.ActivitiesDirectClientV1);
        this.registerAsType(ActivitiesClientFactory.HttpClientV1Descriptor, ActivitiesHttpClientV1_1.ActivitiesHttpClientV1);
    }
}
ActivitiesClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-activities', 'factory', 'default', 'default', '1.0');
ActivitiesClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-activities', 'client', 'null', 'default', '1.0');
ActivitiesClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-activities', 'client', 'direct', 'default', '1.0');
ActivitiesClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-activities', 'client', 'http', 'default', '1.0');
exports.ActivitiesClientFactory = ActivitiesClientFactory;
//# sourceMappingURL=ActivitiesClientFactory.js.map