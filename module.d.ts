declare module 'pip-clients-activities-node' {
	import { IClient } from 'pip-services-runtime-node';
	import { RestClient } from 'pip-services-runtime-node';
	import { SenecaClient } from 'pip-services-runtime-node';
	import { LambdaClient } from 'pip-services-runtime-node';
	import { AbstractClient } from 'pip-services-runtime-node';
	import { ComponentDescriptor } from 'pip-services-runtime-node';
	import { ComponentFactory } from 'pip-services-runtime-node';

    export class ActivitiesFactory extends ComponentFactory {
        public static Instance: ActivitiesFactory;	
        constructor();	
    }

    module Version1 {
        export interface IActivitiesClient extends IClient {
            getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
            logPartyActivity(correlationId: string, activity: any, callback: any): void;
            batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
            deletePartyActivities(correlationId: string, filter: any, callback: any): void;
        }

        export class ActivitiesRestClient extends RestClient implements IActivitiesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
            logPartyActivity(correlationId: string, activity: any, callback: any): void;
            batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
            deletePartyActivities(correlationId: string, filter: any, callback: any): void;
        }

        export class ActivitiesLambdaClient extends LambdaClient implements IActivitiesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
            logPartyActivity(correlationId: string, activity: any, callback: any): void;
            batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
            deletePartyActivities(correlationId: string, filter: any, callback: any): void;
        }

        export class ActivitiesSenecaClient extends SenecaClient implements IActivitiesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
            logPartyActivity(correlationId: string, activity: any, callback: any): void;
            batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
            deletePartyActivities(correlationId: string, filter: any, callback: any): void;
        }

        export class ActivitiesNullClient extends AbstractClient implements IActivitiesClient {
            public static Descriptor: ComponentDescriptor;
            constructor(config?: any);
            getPartyActivities(correlationId: string, filter: any, paging: any, callback: any): void;
            logPartyActivity(correlationId: string, activity: any, callback: any): void;
            batchPartyActivities(correlationId: string, activities: any[], callback: any): void;
            deletePartyActivities(correlationId: string, filter: any, callback: any): void;
        }
    }
}
