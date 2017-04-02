"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_commons_node_1 = require("pip-services-commons-node");
const pip_services_commons_node_2 = require("pip-services-commons-node");
const ActivitiesNullClientV1_1 = require("../version1/ActivitiesNullClientV1");
const ActivitiesDirectClientV1_1 = require("../version1/ActivitiesDirectClientV1");
const ActivitiesHttpClientV1_1 = require("../version1/ActivitiesHttpClientV1");
const ActivitiesSenecaClientV1_1 = require("../version1/ActivitiesSenecaClientV1");
class ActivitiesFactory extends pip_services_commons_node_2.Factory {
    constructor() {
        super();
        this.registerAsType(ActivitiesFactory.NullClientV1Descriptor, ActivitiesNullClientV1_1.ActivitiesNullClientV1);
        this.registerAsType(ActivitiesFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1_1.ActivitiesDirectClientV1);
        this.registerAsType(ActivitiesFactory.HttpClientV1Descriptor, ActivitiesHttpClientV1_1.ActivitiesHttpClientV1);
        this.registerAsType(ActivitiesFactory.SenecaClientV1Descriptor, ActivitiesSenecaClientV1_1.ActivitiesSenecaClientV1);
    }
}
ActivitiesFactory.Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'factory', 'default', 'default', '1.0');
ActivitiesFactory.NullClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'null', 'default', '1.0');
ActivitiesFactory.DirectClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'direct', 'default', '1.0');
ActivitiesFactory.HttpClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'http', 'default', '1.0');
ActivitiesFactory.SenecaClientV1Descriptor = new pip_services_commons_node_1.Descriptor('pip-services-activities', 'client', 'seneca', 'default', '1.0');
exports.ActivitiesFactory = ActivitiesFactory;
//# sourceMappingURL=ActivitiesFactory.js.map