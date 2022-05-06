import { Component, Input } from '@angular/core';

@Component({
  selector: 'number',
  template: `<h4>Hello {{name}}!</h4>`,
  styles: [`h4 { font-family: Lato; }`],
})
export class NumberComponent {
  @Input() name: string;
}
