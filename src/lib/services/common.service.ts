import { StalEventerService } from "@stal/eventer";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class EngeAppCommonService {
    constructor(
        public route: ActivatedRoute,
        public router: Router,
        public eventer: StalEventerService,
    ) {}
}