import { Component, OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-hello-world',
  templateUrl: 'hello-world.component.html',
  styleUrls: ['hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
    hello: string;

  constructor() {
      this.hello = 'Sapito';
  }

  ngOnInit() {
  }

}
