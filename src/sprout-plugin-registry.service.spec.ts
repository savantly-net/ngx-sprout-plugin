import { TestBed, inject } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

import { SproutPluginRegistryService } from './sprout-plugin-registry.service';

describe('MenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SproutPluginRegistryService, ],
      declarations: []
    });
  });

  it('should be created', inject([SproutPluginRegistryService], (service: SproutPluginRegistryService) => {
    expect(service).toBeTruthy();
  }));

});
