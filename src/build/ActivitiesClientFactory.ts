import { Descriptor } from 'pip-services-commons-node';
import { Factory } from 'pip-services-components-node';

import { ActivitiesNullClientV1 } from '../version1/ActivitiesNullClientV1';
import { ActivitiesDirectClientV1 } from '../version1/ActivitiesDirectClientV1';
import { ActivitiesHttpClientV1 } from '../version1/ActivitiesHttpClientV1';
import { ActivitiesSenecaClientV1 } from '../version1/ActivitiesSenecaClientV1';

export class ActivitiesClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-activities', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-activities', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-activities', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-activities', 'client', 'http', 'default', '1.0');
	public static SenecaClientV1Descriptor = new Descriptor('pip-services-activities', 'client', 'seneca', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(ActivitiesClientFactory.NullClientV1Descriptor, ActivitiesNullClientV1);
		this.registerAsType(ActivitiesClientFactory.DirectClientV1Descriptor, ActivitiesDirectClientV1);
		this.registerAsType(ActivitiesClientFactory.HttpClientV1Descriptor, ActivitiesHttpClientV1);
		this.registerAsType(ActivitiesClientFactory.SenecaClientV1Descriptor, ActivitiesSenecaClientV1);
	}
	
}
