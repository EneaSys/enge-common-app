import { Directive } from "@angular/core";
import { EngeAppCommonService } from "../services/common.service";
import { EngeAppGenericPageComponent } from "./generic-page.component";
import { ActivatedRoute } from "@angular/router";

@Directive()
export abstract class EngeAppGenericDetailPageComponent extends EngeAppGenericPageComponent {
    constructor(
        eacs: EngeAppCommonService,
        protected route: ActivatedRoute
    ) { super(eacs); }

    protected id: number = 0;

    protected override _onLoad() {
        var id = this.route.snapshot.paramMap.get('id');
        if (id === null) throw new Error('Not valid Id');
        this.id = +id;
        this.onLoad();
    }
}



