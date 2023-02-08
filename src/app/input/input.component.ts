import { Component } from '@angular/core';
import { first, last } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  result: string = '0';
  placeholder: string = '0';
  answer : string = '';
  lastKey: string = 'no';
  operandKey: string = '';
  decpoint: boolean = true;
  calcd: boolean = false;
  opRegulator: boolean = false;

  clickNum(value: string)
  {

    if (this.result.length > 8 && this.operandKey != this.lastKey)
    {
      alert("Digit limit reached")
      // this.result = this.result.substring(0, this.result.length-1)
    }
    else
    {
      if (this.calcd)
      {
        if (this.result != "0")
          return;
        return;
      }
      
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
        this.placeholder = this.placeholder + value;
        if (this.opRegulator)
        {
          this.result = value;
          this.opRegulator = false;
        }
        else
          this.result = this.result + value;
      }

      //Uses ngif to toggle decimal use
      if(value == '.')
      {
        this.decpoint = false;
      }
    }

    
    
  }

  clear()
  {
    
    this.lastKey = 'no';
    this.operandKey = '';
    this.result = '0';
    this.placeholder = '0';
    this.calcd = false;
    this.decpoint = true;

  }

  clickOperand(operand: string)
  {
    this.calcd = false;
    if (this.lastKey == 'no')
    {
      this.lastKey = operand;
      this.placeholder = this.result + operand;
      this.operandKey = this.placeholder.charAt(this.placeholder.length-1)
      
    }
    else
    {
      
      this.result = eval(this.placeholder)
      this.placeholder = this.result + operand;
      this.opRegulator = true;
      
    }
    

  }

  calculate()
  {
    if (this.result == "0")
    {
      alert("Stop trying to break my app!")
    }
    else 
    {
      var firstDigit: string = this.placeholder.substring(0, this.placeholder.indexOf(this.lastKey))
      console.log(firstDigit);
      this.result = eval(this.placeholder);
      this.calcd = true;
    }
  }
 

}
