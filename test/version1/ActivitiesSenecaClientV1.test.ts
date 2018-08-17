let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services-commons-node';
import { ConfigParams } from 'pip-services-commons-node';
import { References } from 'pip-services-commons-node';
import { ConsoleLogger } from 'pip-services-components-node';
import { SenecaInstance } from 'pip-services-seneca-node';

import { ActivitiesMemoryPersistence } from 'pip-services-activities-node';
import { ActivitiesController } from 'pip-services-activities-node';
import { ActivitiesSenecaServiceV1 } from 'pip-services-activities-node';
import { IActivitiesClientV1 } from '../../src/version1/IActivitiesClientV1';
import { ActivitiesSenecaClientV1 } from '../../src/version1/ActivitiesSenecaClientV1';
import { ActivitiesClientFixtureV1 } from './ActivitiesClientFixtureV1';

let senecaConfig = ConfigParams.fromTuples(
    "connection.protocol", "none"
);

suite('ActivitiesSenecaClient', () => {
    let service: ActivitiesSenecaServiceV1;
    let client: ActivitiesSenecaClientV1;
    let fixture: ActivitiesClientFixtureV1;

    suiteSetup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new ActivitiesMemoryPersistence();
        let controller = new ActivitiesController();

        service = new ActivitiesSenecaServiceV1();
        service.configure(senecaConfig);
        let seneca = new SenecaInstance();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-seneca', 'seneca', 'instance', 'default', '1.0'), seneca,
            new Descriptor('pip-services-activities', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-activities', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-activities', 'service', 'seneca', 'default', '1.0'), service
        );
        seneca.setReferences(references);
        controller.setReferences(references);
        service.setReferences(references);

        client = new ActivitiesSenecaClientV1();
        client.configure(senecaConfig);
        client.setReferences(references);

        fixture = new ActivitiesClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    suiteTeardown((done) => {
        client.close(null);
        service.close(null, done);
    });

    test('Batch Party Activities', (done) => {
        fixture.testBatchPartyActivities(done);
    });

});
