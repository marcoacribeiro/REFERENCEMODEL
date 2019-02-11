import { NgModule } from '@angular/core';

import { ReferencemodelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ReferencemodelSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ReferencemodelSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ReferencemodelSharedCommonModule {}
