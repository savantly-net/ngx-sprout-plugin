import { Component, NgModuleFactoryLoader, SystemJsNgModuleLoader, AfterViewInit,
   ViewChild, ViewContainerRef, OnInit, NgModuleFactory, Injector } from '@angular/core';
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
export class SproutPluginLoaderComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  ngOnInit() {
    this.loader.load('/etc/sprout/plugins/sprout-wiki/sprout-wiki-plugin#WikiModule').then((moduleFactory: NgModuleFactory<any>) => {
      console.log('LOADED WikiModule******');
      const entryComponent = (<any>moduleFactory.moduleType).entry;
      const moduleRef = moduleFactory.create(this.inj);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);
      this.container.createComponent(compFactory);
    });
  }

  constructor(private _pluginRegistryService: SproutPluginRegistryService,
    private loader: SystemJsNgModuleLoader, private inj: Injector) {
    this._pluginRegistryService.getPlugins();
  }
}
