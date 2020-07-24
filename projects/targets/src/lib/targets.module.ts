import { ModuleWithProviders, NgModule } from '@angular/core';
import { TargetsService } from './targets.service';
import { ImagesService } from './images.service';

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
export class TargetsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TargetsModule,
            providers: [TargetsService, ImagesService]
        };
    }
}
