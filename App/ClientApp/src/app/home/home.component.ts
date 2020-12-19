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
  DataSet: any[] = [];

  StartIncomeChange(event) {
    console.log(this);
  }

  calculate() {
    this.DataSet = [];
    let iterationCount = 1;
    let income = this.StartIncome;
    let invested = 0;

    console.log(iterationCount, this.Duration);
    while(iterationCount <= this.Duration) {
      let split = income * (this.InvestPercentage / 100);
      let spentSplit = income - split;
      invested = invested + split;

      let investGrowth = invested * (this.InvestmentGrowth / 100);
      invested = invested + investGrowth;

      let newItem = {
        Year: iterationCount,
        Income: income.toFixed(2),
        Split: spentSplit.toFixed(2) + " / " + split.toFixed(2) ,
        Invested: invested.toFixed(2),
        YearInvestmentGrowth: investGrowth
      };
      this.DataSet.push(newItem);
      income = income * ((this.IncomeGrowth / 100) + 1);
      iterationCount++;
    }
    this.HasBeenCalculated = true;
    console.log(this.DataSet);
  }

}
