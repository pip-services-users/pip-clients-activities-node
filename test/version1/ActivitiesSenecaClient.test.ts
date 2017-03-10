let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { LifeCycleManager } from 'pip-services-runtime-node';
import { SenecaAddon } from 'pip-services-runtime-node';

let ActivitiesMemoryPersistence = require('pip-services-activities/lib/src/persistence/ActivitiesMemoryPersistence').ActivitiesMemoryPersistence;
let ActivitiesController = require('pip-services-activities/lib/src/logic/ActivitiesController').ActivitiesController;
let ActivitiesSenecaService = require('pip-services-activities/lib/src/services/version1/ActivitiesSenecaService').ActivitiesSenecaService;

import { ActivitiesSenecaClient } from '../../src/version1/ActivitiesSenecaClient';
import { ActivitiesClientFixture } from './ActivitiesClientFixture';

suite('ActivitiesSenecaClient', ()=> {        
    let db = new ActivitiesMemoryPersistence();
    db.configure(new ComponentConfig());

    let ctrl = new ActivitiesController();
    ctrl.configure(new ComponentConfig());

    let service = new ActivitiesSenecaService();
    service.configure(new ComponentConfig());

    let client = new ActivitiesSenecaClient();
    client.configure(new ComponentConfig());

    let seneca = new SenecaAddon();
    seneca.configure(new ComponentConfig());

    let components = ComponentSet.fromComponents(db, ctrl, client, service, seneca);
    let fixture = new ActivitiesClientFixture(client);

    suiteSetup((done) => {
        LifeCycleManager.linkAndOpen(components, done);
    });
    
    suiteTeardown((done) => {
        seneca.getSeneca().close(() => {
            LifeCycleManager.close(components, done);
        });
    });
    
    setup((done) => {
        db.clearTestData(done);
    });
    
    test('Batch Party Activities', (done) => {
        fixture.testBatchPartyActivities(done);
    });
});