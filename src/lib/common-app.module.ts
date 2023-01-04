import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StalPaginatorModule } from '@stal/paginator';
import { ButtonModule } from 'primeng/button';

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
		ButtonModule, // <-- Used in list page for add button
	]
})
export class EngeCommonAppModule { }
