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
    let invested = 0;

    while(iterationCount > this.Duration) {
      let split = income * (this.InvestPercentage / 100);
      let spentSplit = income - split;
      invested = invested + split;

      let newItem = {
        Year: iterationCount,
        Income: income,
        Split: spentSplit + " / " + split ,
        Invested: invested,
        YearInvestmentGrowth: 0
      };
      this.DataSet.push(newItem);
      income = income * ((this.IncomeGrowth / 100) + 1);
      iterationCount++;
    }
    this.HasBeenCalculated = true;
    console.log(this.DataSet);
  }

}
