import { StalEvent, StalEventType } from "@stal/eventer";
import { Directive, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { filter, Subscription } from "rxjs";
import { EngeAppCommonService } from "../services/common.service";

@Directive()
export abstract class EngeAppGenericPageComponent implements OnInit, OnDestroy {
    constructor(
        protected eacs: EngeAppCommonService,
    ) { }

    protected subscriptions: Subscription[] = [];

    ngOnInit(): void {
        this._onLoad();

        this.subscriptions.push(this.eacs.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
            (event: any) => this._onLoad()
        ));

        this.subscriptions.push(this.eacs.eventer.onEvent().subscribe(
			(event: StalEvent) => {
				switch (event.type) {
					case StalEventType.RELOAD: this.reloadFromEvent(event); break;
					default: break;
				}
			}
		));
    }

    protected _onLoad() {
        this.onLoad();
    }

    protected onLoad() { }
    protected async reloadPage() { }
    protected reloadFromEvent(event: StalEvent) { }

    ngOnDestroy(): void {
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}



