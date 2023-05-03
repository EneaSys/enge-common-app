import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StalPaginatorModule } from '@stal/paginator';
import { ButtonModule } from 'primeng/button';
import { EngeAppCommonService } from './services/common.service';

@NgModule({
	imports: [
		/* add this import only in app module
		StalEventerModule
		*/
	],
	providers: [
		EngeAppCommonService,
		
	],
	exports: [
		StalPaginatorModule,
		CommonModule,
		ButtonModule, // <-- Used in list page for add button
	]
})
export class EngeCommonAppModule { }
