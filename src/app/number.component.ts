import { Component, Input } from '@angular/core';

@Component({
  selector: 'number',
  template: `
  <table border>

  <!-- Step -->
  <!-- Row design if not confirmed yet, as its being currently worked on in the background -->
  <!-- This will only show if result is not confirmed -->
  <tr *ngIf="!resultIsConfirmed">
  <td>
    Currently working on calculating if {{ value}} is prime.
  </td>
  </tr>


  <!-- Step -->
  <!-- What will be displayed if number is a prime and result is confirmed -->
  <tr *ngIf="amIPrime() && resultIsConfirmed">
  <td>
    Confirmed {{ value}} is prime.
  </td>
  </tr>

  <!-- Step -->
  <!-- What will be displayed if number is NOT a prime and result is confirmed -->
  <tr *ngIf="!amIPrime() && resultIsConfirmed">
  <td>
    {{ value }} is confirmed to NOT be a prime.
  </td>
  </tr>
  

  </table>`,
  styles: [`h4 { font-family: Lato; }`],
})
export class NumberComponent {
  @Input() value: Number;

  // Confirmed result will always be false until it is true, by confirmed calculation
  // Is the result confirmed? The answer is no until it is yes.
  resultIsConfirmed = true;

  // Constructor. It will trigger the number to question it's existence from
  // the moment of it's creation and being brought into existence.
  // This also allows us to create numbers and number objects
  // for manipulation anywhere throughout our lives.
  constructor() {
    // "What is my purpose" is what it asks during creation.
    // and here is where you define the numbers purpose for existence 
    // Have it question itself and trigger actions based on it's transformation process.
    // It will give you a timeline of its expected evolution and you can set triggers
    // in reality that will go off during any point of time throughout that numbers evolution.
    
  }

  // Asks the number to question itself. Am I prime?
  // Constant questioning until it figures it out
  // It'll spawn infinite processes to infinity just to solve for itself.
  amIPrime(): Boolean {
    return false;
  }

  // The function to calculate for prime numbers, which is available as a formula for us to use
  calculateToCheckIfPrime() {
    // Rule number 1:
    // Rule number 2:
  }
}
