import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbersIndex = [1, 2, 3];

  constructor() {
    // Here we can rebuild or overwrite the numbers index during our worlds creation.
    this.numbersIndex = [1, 2, 3, 4, 5];

    // We can also loop through it to trigger multiple impact or create functions
    // within and around it
    // let tempNumber = new Number();
    // tempNumber.value = 5;
    // tempnumber.calculateForPrimeAndNotifyMeOfExpectedTimelineForResult;
  }
}
