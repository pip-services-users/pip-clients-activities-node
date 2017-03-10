let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { RestClient } from 'pip-services-runtime-node';

import { IActivitiesClient } from './IActivitiesClient';

export class ActivitiesRestClient extends RestClient implements IActivitiesClient {       
	/**
	 * Unique descriptor for the ActivitiesRestClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-activities", "rest", "1.0"
	);
    
    constructor(config?: any) {
        super(ActivitiesRestClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getPartyActivities(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        
        let route = filter.party_id ? '/activities/' + filter.party_id : '/activities';
        
        let params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        this.addPagingParams(params, paging);
        
        this.call('get', 
            route, 
            params, 
            callback
        );
    }

    public logPartyActivity(correlationId: string, activity: any, callback) {
        callback = this.instrument(correlationId, 'activities.log_party_activity', callback);
                
        this.call('post', 
            '/activities',
            {
                correlation_id: correlationId,
            },
            activity, 
            callback
        );
    }

    public batchPartyActivities(correlationId: string, activities: any[], callback) {
        callback = this.instrument(correlationId, 'activities.batch_party_activities', callback);
                
        this.call('post', 
            '/activities/batch',
            {
                correlation_id: correlationId,
            },
            activities, 
            callback
        );
    }

    public deletePartyActivities(correlationId: string, filter: any, callback) {
        callback = this.instrument(correlationId, 'activities.delete_party_activities', callback);

        let params = {};
        this.addCorrelationId(params, correlationId);
        this.addFilterParams(params, filter);
        
        this.call('delete', 
            '/activities', 
            params, 
            callback
        );
    }

}
