import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SproutPluginModule, SproutPluginRegistryService } from '@savantly/ngx-sprout-plugin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SproutPluginModule
  ],
  providers: [SproutPluginRegistryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
