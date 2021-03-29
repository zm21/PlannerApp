import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'empty-project';
  name:string = 'Mykola';
  isCheck:boolean = true;
  age:number = 17;
}
