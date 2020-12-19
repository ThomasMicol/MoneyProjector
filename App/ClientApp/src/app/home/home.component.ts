import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  StartIncome : number = 0;
  IncomeGrowth : number = 0;
  InvestPercentage : number = 0;
  InvestmentGrowth : number = 0;
  Duration : number = 0;

  HasBeenCalculated: boolean = false;

  StartIncomeChange(event) {
    console.log(this);
  }

  calculate() {

    this.HasBeenCalculated = true;
  }

}
