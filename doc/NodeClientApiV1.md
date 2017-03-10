# Client API (version 1) <br/> Activities Microservices Client SDK for Node.js

Node.js client API for Activities microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [Installation](#install)
* [Getting started](#get_started)
* [Reference class](#class1)
* [PartyActivity class](#class2)
* [PartyActivityPage class](#class3)
* [IActivitiesClient interface](#interface)
    - [init()](#operation1)
    - [open()](#operation2)
    - [close()](#operation3)
    - [getPartyActivities()](#operation4)
    - [logPartyActivity()](#operation5)
    - [batchPartyActivities()](#operation6)
    - [deletePartyActivities()](#operation7)
* [ActivitiesRestClient class](#client_rest)
* [ActivitiesSenecaClient class](#client_seneca)
* [ActivitiesNullClient class](#client_null)

## <a name="install"></a> Installation

To work with the client SDK add dependency into package.json file:

```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-activities-node": "git+ssh://git@github.com:pip-services/pip-clients-activities-node.git",
        ...
    }
}
```

Then download the dependency using **npm**:

```javascript
# Installing dependencies
npm install

# Updating dependencies
npm update
```

If you are using Typescript, add the following type definition where compiler can find it
```javascript
/// <reference path="../node_modules/pip-clients-activities-node/module.d.ts" />
```

## <a name="get_started"></a> Getting started

This is a simple example on how to work with the microservice using REST client:

```javascript
// Get Client SDK for Version 1 
var sdk = new require('pip-clients-activities-node').Version1;

// Client configuration
var config = {
    transport: {
        type: 'http',
        host: 'localhost', 
        port: 8007
    }
};

// Create the client instance
var client = sdk.ActivitiesRestClient(config);

// Open client connection to the microservice
client.open(function(err) {
    if (err) {
        console.error(err);
        return; 
    }
    
    console.log('Opened connection');
        
    // Log party activity
    client.logPartyActivity(
        { 
            type: 'signup',
            party: {
                id: '123',
                name: 'Test User'
            }
        },
        function (err, activity) {
            if (err) {
                console.error(err);
                return;
            }
            
            console.log('Logged party activity is');
            console.log(activity);
            
            var now = new Date();
    
            // Get the list system activities
            client.getPartyActivities(
                {
                    party_id: '123',
                    start: new Date(now.getTime() - 24 * 3600 * 1000),
                    end: now
                },
                {
                    paging: true,
                    skip: 0,
                    take: 10
                }
                function (err, activities) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    
                    console.log('Activities performed by party were');
                    console.log(activities.data);
                    
                    // Close connection
                    client.close(); 
                }
            );
        }
    );
});
```

### <a name="class1"></a> Reference class

Represents a reference to a particular item specified by id, type and name. 

**Properties:**
- id: string - unique item id
- type: string - item type
- name: string - item name

### <a name="class2"></a> PartyActivity class

Represents a record of a party activity performed in the past. 
Each activity record is related to:
- Party who performed the activity
- Object related to the activity. For instance, object that was create or deleted by the party
- Parent of the related objects. If related object is a part of a bigger hierarchy it helps to collect change history across all child objects
- 3rd party related to the activity. For instance, if 3rd party offered or was offered to share work on specific object

**Properties:**
- id: string - unique record id
- time: Date - date and time when activity took place (default: current time)
- type: string - activity type: 'signup', 'signin', 'created', etc.
- party: Reference - reference to the party who performed the activity
- ref_item: Reference - reference to an item related to this activity
- ref_parties: Reference[] - array of the item parent references to enable hierarchical search
- ref_party: Reference - reference to a 3rd party related to this activity
- details: Object - additional details related to this activity, like % of completion or new status

### <a name="class3"></a> PartyActivityPage class

Represents a paged result with subset of requested PartyActivity objects

**Properties:**
- data: [PartyActivity] - array of retrieved PartyActivity page
- count: int - total number of objects in retrieved resultset

## <a name="interface"></a> IActivitiesClient interface

If you are using Typescript, you can use IActivitiesClient as a common interface across all client implementations. 
If you are using plain Javascript, you shall not worry about IActivitiesClient interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```javascript
interface IActivitiesClient {
    init(refs, callback);
    open(callback);
    close(callback);
    getPartyActivities(filter, paging, callback);
    logPartyActivity(activity, callback);
    batchPartyActivities(activities, callback);
    deletePartyActivities(filter, callback);
}
```

### <a name="operation1"></a> init(refs, callback)

Initializes client references. This method is optional. It is used to set references 
to logger or performance counters.

**Arguments:**
- refs: References - references to other components 
  - log: ILog - reference to logger
  - countes: ICounters - reference to performance counters
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation2"></a> open(callback)

Opens connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation3"></a> close(callback)

Closes connection to the microservice

**Arguments:**
- callback: (err) => void - callback function
  - err - Error or null is no error occured

### <a name="operation4"></a> getPartyActivities(filter, paging, callback)

Retrieves a list of party activities by specified criteria

**Arguments:** 
- filter: object - filter parameters
    - type: string - (optional) type of activities
    - include_types: string[] - (optional) array of activities types to include into results
    - exclude_types: string[] - (optional) array of activities types to exclude from results
    - party_id: string - (optional) unique id of party who performed the activity
    - ref_id: string - (optional) unique id of related object
    - parent_id: string - (optional) unique if of parent of related object
    - ref_party_id: string - (optional) unique id of 3rd party
    - start: Date - (optional) start of the time range
    - end: Date - (optional) end of the time range
- paging: object - paging parameters
  - paging: bool - (optional) true to enable paging and return total count
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result
- callback: (err, page) => void - callback function
  - err: Error - occured error or null for success
  - page: PartyActivityPage - retrieved PartyActivity objects in paged format

### <a name="operation5"></a> logPartyActivity(activity, callback)

Log a single party activity

**Arguments:** 
- activity: PartyActivity - party activity to be logged
- callback: (err, activity) => void - callback function
  - err: Error - occured error or null for success
  - activity: PartyActivity - logged party activity

### <a name="operation6"></a> batchPartyActivities(activities, callback)

Log multiple party activities

**Arguments:** 
- activities: [PartyActivity] - array of party activities to be logged
- callback: (err) => void - callback function
  - err: Error - occured error or null for success

### <a name="operation7"></a> deletePartyActivities(filter, callback)

Deletes party activities that satisfy specified criteria.
This operation is used to clean up the history if party or related objects are removed.

**Params properties:** 
- filter: object - filter parameters
    - type: string - (optional) type of activities
    - include_types: string[] - (optional) array of activities types to include into results
    - exclude_types: string[] - (optional) array of activities types to exclude from results
    - party_id: string - (optional) unique id of party who performed the activity
    - ref_id: string - (optional) unique id of related object
    - parent_id: string - (optional) unique if of parent of related object
    - ref_party_id: string - (optional) unique id of 3rd party
    - start: Date - (optional) start of the time range
    - end: Date - (optional) end of the time range
- callback: (err) => void - callback function
  - err: Error - occured error or null for success
 
## <a name="client_rest"></a> ActivitiesRestClient class

ActivitiesRestClient is a client that implements HTTP/REST protocol

```javascript
class ActivitiesRestClient extends RestClient implements IActivitiesClient {
    constructor(config: any);
    init(refs, callback);
    open(callback);
    close(callback);
    getPartyActivities(filter, paging, callback);
    logPartyActivity(activity, callback);
    batchPartyActivities(activities, callback);
    deletePartyActivities(filter, callback);
}
```

**Constructor config properties:** 
- transport: object - HTTP transport configuration options
  - type: string - HTTP protocol - 'http' or 'https' (default is 'http')
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_seneca"></a> ActivitiesSenecaClient class

ActivitiesSenecaClient is a client that implements Seneca protocol

```javascript
class ActivitiesSenecaClient extends SenecaClient implements IActivitiesClient {
    constructor(config: any);        
    init(refs, callback);
    open(callback);
    close(callback);
    getPartyActivities(filter, paging, callback);
    logPartyActivity(activity, callback);
    batchPartyActivities(activities, callback);
    deletePartyActivities(filter, callback);
}
```

**Constructor config properties:** 
- transport: object - (optional) Seneca transport configuration options. See http://senecajs.org/api/ for details.
  - type: string - Seneca transport type 
  - host: string - IP address/hostname binding (default is '0.0.0.0')
  - port: number - Seneca port number

## <a name="client_null"></a> ActivitiesNullClient class

ActivitiesNullClient is a dummy client that mimics the real client but doesn't call a microservice. 
It can be useful in testing scenarios to cut dependencies on external microservices.

```javascript
class ActivitiesNullClient extends AbstractClient implements IActivitiesClient {
    constructor();        
    init(refs, callback);
    open(callback);
    close(callback);
    getPartyActivities(filter, paging, callback);
    logPartyActivity(activity, callback);
    batchPartyActivities(activities, callback);
    deletePartyActivities(filter, callback);
}
```
