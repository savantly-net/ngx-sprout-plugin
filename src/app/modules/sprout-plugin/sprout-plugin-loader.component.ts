import { Component, NgModuleFactoryLoader, SystemJsNgModuleLoader, AfterViewInit } from '@angular/core';
import { SproutPluginRegistryService } from './sprout-plugin-registry.service';


@Component({
  template: `<h1>hello from the plugin loader`,
  providers: [
    {
      provide: NgModuleFactoryLoader,
      useClass: SystemJsNgModuleLoader
    }
  ]
})
export class SproutPluginLoaderComponent implements AfterViewInit {

  constructor(
              private _pluginRegistryService: SproutPluginRegistryService) {
    this._pluginRegistryService.getPlugins();
  }

  ngAfterViewInit() {

  }
}
