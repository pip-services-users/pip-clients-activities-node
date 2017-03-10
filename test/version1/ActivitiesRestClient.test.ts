let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';

let ActivitiesMemoryPersistence = require('pip-services-activities/lib/src/persistence/ActivitiesMemoryPersistence').ActivitiesMemoryPersistence;
let ActivitiesController = require('pip-services-activities/lib/src/logic/ActivitiesController').ActivitiesController;
let ActivitiesRestService = require('pip-services-activities/lib/src/services/version1/ActivitiesRestService').ActivitiesRestService;

import { ActivitiesRestClient } from '../../src/version1/ActivitiesRestClient';
import { ActivitiesClientFixture } from './ActivitiesClientFixture';

let restConfig = ComponentConfig.fromTuples(
    'endpoint.protocol', 'http',
    'endpoint.host', 'localhost',
    'endpoint.port', 3000
);

suite('ActivitiesRestClient', ()=> {    
    let db = new ActivitiesMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new ActivitiesController();
    ctrl.configure(new ComponentConfig());

    let service = new ActivitiesRestService();
    service.configure(restConfig);

    let client = new ActivitiesRestClient();
    client.configure(restConfig);

    let components = ComponentSet.fromComponents(db, ctrl, service, client);
    let fixture = new ActivitiesClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        LifeCycleManager.close(components, done);
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('Batch Party Activities', (done) => {
        fixture.testBatchPartyActivities(done);
    });
});