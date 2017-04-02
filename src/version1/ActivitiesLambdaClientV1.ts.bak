let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { LambdaClient } from 'pip-services-runtime-node';

import { IActivitiesClient } from './IActivitiesClient';

export class ActivitiesLambdaClient extends LambdaClient implements IActivitiesClient {       
	/**
	 * Unique descriptor for the ActivitiesLambdaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-activities", "lambda", "1.0"
	);
    
    constructor(config?: any) {
        super(ActivitiesLambdaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getPartyActivities(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        this.call(
            'get_party_activities', 
            {
                correlation_id: correlationId,
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public logPartyActivity(correlationId: string, activity: any, callback) {
        callback = this.instrument(correlationId, 'activities.log_party_activity', callback);
        this.call(
            'log_party_activity', 
            {
                correlation_id: correlationId,
                activity: activity
            }, 
            callback
        );
    }

    public batchPartyActivities(correlationId: string, activities: any[], callback) {
        callback = this.instrument(correlationId, 'activities.batch_party_activities', callback);
        this.call(
            'batch_party_activities', 
            {
                correlation_id: correlationId,
                activities: activities
            }, 
            callback
        );
    }

    public deletePartyActivities(correlationId: string, filter: any, callback) {
        callback = this.instrument(correlationId, 'activities.delete_party_activities', callback);
        this.call(
            'delete_party_activities', 
            {
                correlation_id: correlationId,
                filter: filter
            }, 
            callback
        );
    }
    
}
