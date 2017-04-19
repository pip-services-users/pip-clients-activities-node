"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ActivitiesNullClientV1_1 = require("../version1/ActivitiesNullClientV1");
const ActivitiesDirectClientV1_1 = require("../version1/ActivitiesDirectClientV1");
const ActivitiesHttpClientV1_1 = require("../version1/ActivitiesHttpClientV1");
const ActivitiesSenecaClientV1_1 = require("../version1/ActivitiesSenecaClientV1");
class ActivitiesClientFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(ActivitiesClientFactory.NullClientV1Descriptor, ActivitiesNullClientV1_1.ActivitiesNullClientV1);
        this.registerAsType(ActivitiesClientFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1_1.ActivitiesDirectClientV1);
        this.registerAsType(ActivitiesClientFactory.HttpClientV1Descriptor, ActivitiesHttpClientV1_1.ActivitiesHttpClientV1);
        this.registerAsType(ActivitiesClientFactory.SenecaClientV1Descriptor, ActivitiesSenecaClientV1_1.ActivitiesSenecaClientV1);
    }
}
ActivitiesClientFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'factory', 'default', 'default', '1.0');
ActivitiesClientFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'null', 'default', '1.0');
ActivitiesClientFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'direct', 'default', '1.0');
ActivitiesClientFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'http', 'default', '1.0');
ActivitiesClientFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'seneca', 'default', '1.0');
exports.ActivitiesClientFactory = ActivitiesClientFactory;
//# sourceMappingURL=ActivitiesClientFactory.js.map