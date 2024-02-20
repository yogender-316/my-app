// import { Component } from '@angular/core';

import { Component, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name="yogender"
  title = 'my-app';
  data="hello bruh";
  getInput(data:string){
    alert(data);
  }
  ngDoCheck() {
    console.log('Running change detection ', Date.now());
  }
}
