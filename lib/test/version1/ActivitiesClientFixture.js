"use strict";
var _ = require('lodash');
var async = require('async');
var assert = require('chai').assert;
var ACTIVITY = {
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
var ActivitiesClientFixture = (function () {
    function ActivitiesClientFixture(client) {
        this._client = client;
    }
    ActivitiesClientFixture.prototype.testBatchPartyActivities = function (done) {
        var _this = this;
        async.series([
            // Log an activity batch
            function (callback) {
                _this._client.batchPartyActivities(null, [
                    ACTIVITY,
                    ACTIVITY,
                    ACTIVITY
                ], function (err) {
                    assert.isNull(err);
                    callback();
                });
            },
            // Get activities
            function (callback) {
                _this._client.getPartyActivities(null, {
                    party_id: '1'
                }, {}, function (err, activities) {
                    assert.isNull(err);
                    assert.isObject(activities);
                    assert.isTrue(activities.data.length > 2);
                    var activity = activities.data[0];
                    assert.equal(activity.type, ACTIVITY.type);
                    assert.isNotNull(activity.time);
                    assert.equal(activity.party.name, ACTIVITY.party.name);
                    callback();
                });
            }
        ], done);
    };
    return ActivitiesClientFixture;
}());
exports.ActivitiesClientFixture = ActivitiesClientFixture;
