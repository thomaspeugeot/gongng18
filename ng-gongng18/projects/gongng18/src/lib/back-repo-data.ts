// generated code - do not edit

//insertion point for imports
import { CountryAPI } from './country-api'

import { HelloAPI } from './hello-api'


export class BackRepoData {
	// insertion point for declarations
	CountryAPIs = new Array<CountryAPI>()

	HelloAPIs = new Array<HelloAPI>()


	// index of the web socket for this stack type (unique among all stack instances)
	GONG__Index : number

	constructor(data?: Partial<BackRepoData>) {
		// insertion point for copies
		this.CountryAPIs = data?.CountryAPIs || [];

		this.HelloAPIs = data?.HelloAPIs || [];

		this.GONG__Index = data?.GONG__Index ?? -1;   // Assign Index here
	}

}