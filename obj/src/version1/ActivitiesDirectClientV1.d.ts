import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IActivitiesClientV1 } from './IActivitiesClientV1';
import { PartyActivityV1 } from './PartyActivityV1';
export declare class ActivitiesDirectClientV1 extends DirectClient<any> implements IActivitiesClientV1 {
    constructor();
    getPartyActivities(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<PartyActivityV1>) => void): void;
    logPartyActivity(correlationId: string, activity: PartyActivityV1, callback?: (err: any, activity: PartyActivityV1) => void): void;
    batchPartyActivities(correlationId: string, activities: PartyActivityV1[], callback?: (err: any) => void): void;
    deletePartyActivities(correlationId: string, filter: FilterParams, callback?: (err: any) => void): void;
}
