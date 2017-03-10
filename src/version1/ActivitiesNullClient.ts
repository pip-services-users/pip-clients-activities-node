import { Category } from 'pip-services-runtime-node';
import { ComponentDescriptor } from 'pip-services-runtime-node';
import { ComponentConfig } from 'pip-services-runtime-node';
import { ComponentSet } from 'pip-services-runtime-node';
import { AbstractClient } from 'pip-services-runtime-node';

import { IActivitiesClient } from './IActivitiesClient';

export class ActivitiesNullClient extends AbstractClient implements IActivitiesClient {       
	/**
	 * Unique descriptor for the ActivitiesNullClient component
	 */
	public static Descriptor: ComponentDescriptor = new ComponentDescriptor(
		Category.Clients, "pip-services-activities", "null", "1.0"
	);
    
    constructor(config?: any) {
        super(ActivitiesNullClient.Descriptor);

        if (config != null) {
            this.configure(ComponentConfig.fromValue(config));
            this.link(new ComponentSet());
        }
    }
        
    public getPartyActivities(correlationId: string, filter: any, paging: any, callback) {
        if (callback) callback(null, []);
    }

    public logPartyActivity(correlationId: string, activity: any, callback) {
        if (callback) callback(null, null);
    }

    public batchPartyActivities(correlationId: string, activities: any[], callback) {
        if (callback) callback(null, null);
    }

    public deletePartyActivities(correlationId: string, filter: any, callback) {
        if (callback) callback(null, null);
    }
    
}
