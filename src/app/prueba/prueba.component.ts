import { Component, OnInit } from '@angular/core';
import {Control, FORM_DIRECTIVES, ControlGroup, FormBuilder, AbstractControl,Validators} from "@angular/common";


function myValidator(control: Control):{[s: string]:boolean}{
  if(!control.value.match(/^123/))
  {
    return {myValidator:true};
  }
}
@Component({
  moduleId: module.id,
  selector: 'prueba',
  directives: [FORM_DIRECTIVES],
  templateUrl: 'prueba.component.html',
  styleUrls: ['prueba.component.css']
})
export class PruebaComponent implements OnInit {

  myVar: string;
  choice: number;
  color: string;
  fontSize: string;
  isBordered: boolean;
  classesObj: any;
  nameControl = new Control("Nate");
  myForm: ControlGroup;
  sku: AbstractControl;
  name: string;
  constructor(fb: FormBuilder) {
    this.myVar = 'A';
    this.choice = 0;
    this.color='red';
    this.fontSize = '12px';
    this.isBordered = true;
    this.classesObj = {
      bordered: !this.isBordered
    };
    this.myForm = fb.group({
      'sku': ['', Validators.compose([Validators.required, myValidator])]});
    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((valor: string)=>{
      console.log('Cambio el valor a:', valor);
    });
  }
  load():void{
    let name = this.nameControl.value;
  }

  onSubmit(value: string):void
  {
    console.log('Enviaste: ', value);

  }
  ngOnInit() {
  }
  sigOpt():void{
    this.choice++;
  }



}
