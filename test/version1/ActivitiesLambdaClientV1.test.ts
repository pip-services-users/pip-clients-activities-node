import { YamlConfigReader } from 'pip-services-commons-node';
import { ActivitiesClientFixtureV1 } from './ActivitiesClientFixtureV1';
import { ActivitiesLambdaClientV1 } from '../../src/version1/ActivitiesLambdaClientV1';

suite('ActivitiesLambdaClient', ()=> {
    let config = YamlConfigReader.readConfig(null, './config/test_connections.yaml', null);
    let lambdaConfig = config.getSection('lambda');

    // Skip if connection is not configured
    if (lambdaConfig.getAsNullableString("connection.protocol") != "aws")
        return;

    let client: ActivitiesLambdaClientV1;
    let fixture: ActivitiesClientFixtureV1;

    setup((done) => {
        client = new ActivitiesLambdaClientV1();
        client.configure(lambdaConfig);

        fixture = new ActivitiesClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('Batch Party Activities', (done) => {
        fixture.testBatchPartyActivities(done);
    });

});