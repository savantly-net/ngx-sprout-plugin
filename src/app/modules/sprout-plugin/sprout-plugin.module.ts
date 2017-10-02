import { SproutPluginLoaderComponent } from './sprout-plugin-loader.component';
import { SproutPluginRegistryService } from './sprout-plugin-registry.service';
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [SproutPluginLoaderComponent],
  providers: []
})
export class SproutPluginModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SproutPluginModule,
      providers: [SproutPluginRegistryService]
    };
  }

  constructor (@Optional() @SkipSelf() parentModule: SproutPluginModule) {
    if (parentModule) {
      throw new Error(
        'SecurityModule is already loaded. Import it in the AppModule only');
    }
  }
}
