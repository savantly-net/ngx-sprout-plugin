import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SproutPluginModule, SproutPluginRegistryService } from '@savantly/ngx-sprout-plugin';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SproutPluginModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [SproutPluginRegistryService]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
