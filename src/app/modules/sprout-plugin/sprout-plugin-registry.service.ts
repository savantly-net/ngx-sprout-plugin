import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export interface SproutPlugin {
  name: string,
  template: any
}


@Injectable()
export class SproutPluginRegistryService {

  private plugins: SproutPlugin[];
  getPlugins(): Observable<SproutPlugin[]> {
    return Observable.of(this.plugins);
  }

  register(plugin: SproutPlugin) {
    console.log(plugin);
  }

  constructor() {
    this.plugins = [];
  }

}
