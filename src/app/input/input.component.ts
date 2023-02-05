import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  result: string = '0';

 onClick(value: string){
  if (value == "C"){
    this.result = "0";

  };

 }

}
