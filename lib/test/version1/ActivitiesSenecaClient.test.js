"use strict";
var _ = require('lodash');
var pip_services_runtime_node_1 = require('pip-services-runtime-node');
var pip_services_runtime_node_2 = require('pip-services-runtime-node');
var pip_services_runtime_node_3 = require('pip-services-runtime-node');
var pip_services_runtime_node_4 = require('pip-services-runtime-node');
var ActivitiesMemoryPersistence = require('pip-services-activities/lib/src/persistence/ActivitiesMemoryPersistence').ActivitiesMemoryPersistence;
var ActivitiesController = require('pip-services-activities/lib/src/logic/ActivitiesController').ActivitiesController;
var ActivitiesSenecaService = require('pip-services-activities/lib/src/services/version1/ActivitiesSenecaService').ActivitiesSenecaService;
var ActivitiesSenecaClient_1 = require('../../src/version1/ActivitiesSenecaClient');
var ActivitiesClientFixture_1 = require('./ActivitiesClientFixture');
suite('ActivitiesSenecaClient', function () {
    var db = new ActivitiesMemoryPersistence();
    db.configure(new pip_services_runtime_node_2.ComponentConfig());
    var ctrl = new ActivitiesController();
    ctrl.configure(new pip_services_runtime_node_2.ComponentConfig());
    var service = new ActivitiesSenecaService();
    service.configure(new pip_services_runtime_node_2.ComponentConfig());
    var client = new ActivitiesSenecaClient_1.ActivitiesSenecaClient();
    client.configure(new pip_services_runtime_node_2.ComponentConfig());
    var seneca = new pip_services_runtime_node_4.SenecaAddon();
    seneca.configure(new pip_services_runtime_node_2.ComponentConfig());
    var components = pip_services_runtime_node_1.ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    var fixture = new ActivitiesClientFixture_1.ActivitiesClientFixture(client);
    suiteSetup(function (done) {
        pip_services_runtime_node_3.LifeCycleManager.linkAndOpen(components, done);
    });
    suiteTeardown(function (done) {
        seneca.getSeneca().close(function () {
            pip_services_runtime_node_3.LifeCycleManager.close(components, done);
        });
    });
    setup(function (done) {
        db.clearTestData(done);
    });
    test('Batch Party Activities', function (done) {
        fixture.testBatchPartyActivities(done);
    });
});
