/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PruebaComponent } from './prueba.component';
import {FormBuilder} from "@angular/common";

describe('Component: Prueba', () => {
  it('should create an instance', () => {
    let fb = new FormBuilder();
    let component = new PruebaComponent(fb);
    expect(component).toBeTruthy();
  });
});
