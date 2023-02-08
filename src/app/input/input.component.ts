import { Component } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  result: string = '0';
  input1: string = '';
  input2: string = '';
  placeholder: string = '0';
  answer : string = '';
  lastKey: string = 'no';
  operandKey: string = '';
  decpoint: boolean = true;

  clickNum(value: string)
  {
   // This if statement makes sure that 0 isn't the first digit
    if (this.result == '0')
    {
      this.result = value;
      this.placeholder = value;
    }
    else if(this.operandKey == this.lastKey)
    {
      this.result = value;
      this.placeholder = this.placeholder + value;
      this.operandKey = '';
      this.decpoint = true;

    }
    else 
    {
      this.result = this.result + value;
      this.placeholder = this.placeholder + value;
    }

    //Uses ngif to toggle decimal use
    if(value == '.')
    {
      this.decpoint = false;
    }

    
    
  }

  clear()
  {
    this.input1 = '';
    this.input2 = '';
    this.lastKey = 'no';
    this.operandKey = '';
    this.result = '0';
    this.placeholder = '';
    this.decpoint = true;

  }

  clickOperand(operand: string)
  {
    this.placeholder = this.result + operand;
    this.lastKey = operand;
    this.operandKey = this.placeholder.charAt(this.placeholder.length-1)
    


  }

  calculate()
  {
    var firstDigit: string = this.placeholder.substring(0, this.placeholder.indexOf(this.lastKey))
    console.log(firstDigit);
    this.result = eval(this.placeholder);
    
  }
 

}
