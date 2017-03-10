let _ = require('lodash');

import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { SenecaClient } from 'pip-services-runtime-node';

import { IActivitiesClient } from './IActivitiesClient';

export class ActivitiesSenecaClient extends SenecaClient implements IActivitiesClient {       
	/**
	 * Unique descriptor for the ActivitiesSenecaClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-activities", "seneca", "1.0"
	);
    
    constructor(config?: any) {
        super(ActivitiesSenecaClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getPartyActivities(correlationId: string, filter: any, paging: any, callback) {
        callback = this.instrument(correlationId, 'activities.get_party_activities', callback);
        this.call(
            'activities', 'get_party_activities', 
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
            'activities', 'log_party_activity', 
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
            'activities', 'batch_party_activities', 
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
            'activities', 'delete_party_activities', 
            {
                correlation_id: correlationId,
                filter: filter
            }, 
            callback
        );
    }
    
}
