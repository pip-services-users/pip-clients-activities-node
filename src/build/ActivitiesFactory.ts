import { ComponentFactory } from 'pip-services-runtime-node';
import { DefaultFactory } from 'pip-services-runtime-node';

let Version1 = require('../version1');

export class ActivitiesFactory extends ComponentFactory {
	public static Instance: ActivitiesFactory = new ActivitiesFactory();
	
	constructor() {
		super(DefaultFactory.Instance);

		this.register(Version1.ActivitiesNullClient.Descriptor, Version1.ActivitiesNullClient);
		this.register(Version1.ActivitiesRestClient.Descriptor, Version1.ActivitiesRestClient);
		this.register(Version1.ActivitiesSenecaClient.Descriptor, Version1.ActivitiesSenecaClient);
		this.register(Version1.ActivitiesLambdaClient.Descriptor, Version1.ActivitiesLambdaClient);
	}
	
}
