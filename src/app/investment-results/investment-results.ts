import { CurrencyPipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css'
})
export class InvestmentResults {
 // One way to handle results is to use an Input property
 //results = input<...>()
 //results? makes it optional and ! is made to ensure it is defined/madatory
@Input() results?: InvestmentResulType[];
}
