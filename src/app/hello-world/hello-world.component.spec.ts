/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HelloWorldComponent } from './hello-world.component';

describe('Component: HelloWorld', () => {
  it('should create an instance', () => {
    let component = new HelloWorldComponent();
    expect(component).toBeTruthy();
  });
});
