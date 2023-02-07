import { Component } from '@angular/core';
import { last } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  result: string = '0';
  input1: string = '';
  input2: string = '';
  placeholder: string = '';
  answer : string = '';
  lastKey: string = '';
  operandKey: string = '';

  clickNum(value: string){
    
    if (this.input1 == '')
    {
      this.input1 = value;
      this.result = this.input1;
      this.placeholder = value;
    }

    else if (this.input2 == '')
    {
      this.result = this.result + value;
      this.placeholder = this.placeholder + value;
    }

    else
    {
      this.placeholder = this.placeholder + value;
      this.result = this.result + value;
    }

    if (this.lastKey === "/" || this.lastKey ===  "x" || this.lastKey === "-" || this.lastKey === "+") 
    {
      this.input2 = value;
      this.result = this.input2;
      this.operandKey = this.lastKey;
    }


    

  }

  clear()
  {
    this.input1 = '';
    this.input2 = '';
    this.lastKey = '';
    this.result = '0';
    this.placeholder = '';

  }

  clickOperand(operand: string)
  {
    this.placeholder = this.result + operand;
    this.lastKey = operand;


  }

  calculate()
  {
    if (this.answer == ''){
      this.answer = eval(this.placeholder);
      this.result = this.answer;
    }

    else {
      console.log(this.input2);
      this.placeholder = this.result + this.operandKey + this.input2;
      this.result = eval(this.placeholder);
    }
  }
 

}
