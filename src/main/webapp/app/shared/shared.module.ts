import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  SampleApplication2SharedLibsModule,
  SampleApplication2SharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [SampleApplication2SharedLibsModule, SampleApplication2SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [SampleApplication2SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SampleApplication2SharedModule {
  static forRoot() {
    return {
      ngModule: SampleApplication2SharedModule
    };
  }
}
