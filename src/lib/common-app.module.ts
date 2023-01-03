import { NgModule } from '@angular/core';
import { StalPaginatorModule } from '@stal/paginator';

@NgModule({
	imports: [
		/* add this import only in app module
		StalEventerModule
		*/
		StalPaginatorModule,
	],
	providers: [

	],
})
export class EngeCommonAppModule { }
