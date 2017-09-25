import { Component, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector, AfterViewInit, Compiler } from '@angular/core';

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

  constructor(private _injector: Injector,
              private _compiler: Compiler) {
  }

  ngAfterViewInit() {
      System.import('http://localhost:8080/sprout-wiki-plugin.bundle.js').then((module) => {
      this._compiler.compileModuleAndAllComponentsAsync(module.TModule)
        .then((compiled) => {
          const m = compiled.ngModuleFactory.create(this._injector);
          const factory = compiled.componentFactories[0];
          const cmp = factory.create(this._injector, [], null, m);
          console.log(cmp);
        })
    })
  }
}
