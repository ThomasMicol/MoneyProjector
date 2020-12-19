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
  DataSet: any[];

  StartIncomeChange(event) {
    console.log(this);
  }

  calculate() {
    let iterationCount = 1;
    let income = this.StartIncome;
    

    while (iterationCount <= this.Duration) {
      let split = income * (this.InvestPercentage / 100);
      let spentSplit = income - split;

      let newItem = {
        Year: iterationCount,
        Income: income,
        Split: spentSplit + " / " + split ,
        Invested: ,
        YearInvestmentGrowth: 
      };
    }
    this.HasBeenCalculated = true;
  }

}
