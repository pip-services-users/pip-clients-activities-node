let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { IActivitiesClient } from '../../src/version1/IActivitiesClient';

let ACTIVITY = {
    type: 'updated',
    party: {
        id: '1',
        name: 'Test User'
    },
    ref: {
        id: '2',
        type: 'party',
        name: 'Admin User'
    }
};

export class ActivitiesClientFixture {
    private _client: IActivitiesClient;
    
    constructor(client: IActivitiesClient) {
        this._client = client;
    }
        
    testBatchPartyActivities(done) {
        async.series([
            // Log an activity batch
            (callback) => {
                this._client.batchPartyActivities(
                    null,
                    [
                        ACTIVITY,
                        ACTIVITY,
                        ACTIVITY
                    ],
                    (err) => {
                        assert.isNull(err);
                        callback();
                    }
                );
            },
            // Get activities
            (callback) => {
                this._client.getPartyActivities(
                    null,
                    {
                        party_id: '1'
                    },
                    {},
                    (err, activities) => {                        
                        assert.isNull(err);

                        assert.isObject(activities);
                        assert.isTrue(activities.data.length > 2);

                        let activity = activities.data[0];
                        assert.equal(activity.type, ACTIVITY.type);
                        assert.isNotNull(activity.time);
                        assert.equal(activity.party.name, ACTIVITY.party.name);

                        callback();
                    }
                );
            }
        ], done);
    }
}
