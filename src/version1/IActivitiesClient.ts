import { IClient } from 'pip-services-runtime-node';

/**
 * Interface for Party activities microservice clients version 1
 * 
 * @author Sergey Seroukhov
 * @version 1.0
 * @since 2016-06-25
 */
export interface IActivitiesClient extends IClient {
    getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
    logPartyActivity(correlationId: string, activity: any, callback: any): void;
    batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
    deletePartyActivities(correlationId: string, filter: any, callback: any): void;
}
