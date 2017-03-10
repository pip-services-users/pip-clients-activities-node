"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var ActivitiesMemoryPersistence = require('pip-services-activities/lib/src/persistence/ActivitiesMemoryPersistence').ActivitiesMemoryPersistence;
var ActivitiesController = require('pip-services-activities/lib/src/logic/ActivitiesController').ActivitiesController;
var ActivitiesRestService = require('pip-services-activities/lib/src/services/version1/ActivitiesRestService').ActivitiesRestService;
var ActivitiesRestClient_1 = require('../../src/version1/ActivitiesRestClient');
var ActivitiesClientFixture_1 = require('./ActivitiesClientFixture');
var restConfig = pip_services_runtime_node_2.ComponentConfig.fromTuples('endpoint.protocol', 'http', 'endpoint.host', 'localhost', 'endpoint.port', 3000);
suite('ActivitiesRestClient', function () {
    var db = new ActivitiesMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new ActivitiesController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new ActivitiesRestService();
    service.configure(restConfig);
    var client = new ActivitiesRestClient_1.ActivitiesRestClient();
    client.configure(restConfig);
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, service, client);
    var fixture = new ActivitiesClientFixture_1.ActivitiesClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.close(components, done);
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('Batch Party Activities', function (done) {
        fixture.testBatchPartyActivities(done);
    });
});
