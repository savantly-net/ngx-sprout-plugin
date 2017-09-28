import { Component } from '@angular/core';
import { SproutPluginRegistryService } from '@savantly/ngx-sprout-plugin';

@Component({
  selector: 'sv-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private service: SproutPluginRegistryService) {
  }

}
