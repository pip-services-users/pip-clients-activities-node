let _ = require('lodash');

import { ComponentSet } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { DynamicMap } from 'pip-services-runtime-node';

import { ActivitiesLambdaClient } from '../../src/version1/ActivitiesLambdaClient';
import { ActivitiesClientFixture } from './ActivitiesClientFixture';

let options = new DynamicMap(require('../../../config/config'));
let clientOptions = options.get('clients');
clientOptions = _.isArray(clientOptions) ? clientOptions : [clientOptions];
let lambdaOptions = _.find(clientOptions, (o) => { 
    return (o.type || (o.identity || {}).type) == 'lambda'; 
});

suite('ActivitiesSenecaClient', ()=> {        
    // Skip test if lambda is not configured
    if (lambdaOptions == null) return; 

    let config = ComponentConfig.fromValue(lambdaOptions);
    let client = new ActivitiesLambdaClient();
    client.configure(config);
     
    let fixture = new ActivitiesClientFixture(client);

    suiteSetup((done) => {
        client.link(new ComponentSet());
        client.open(done);
    });
    
    suiteTeardown((done) => {
        client.close(done);
    });
        
    test('Batch Party Activities', (done) => {
        fixture.testBatchPartyActivities(done);
    });
});