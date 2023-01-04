import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StalPaginatorModule } from '@stal/paginator';

@NgModule({
	imports: [
		/* add this import only in app module
		StalEventerModule
		*/
	],
	providers: [

	],
	exports: [
		StalPaginatorModule,
		CommonModule,
	]
})
export class EngeCommonAppModule { }
