import { Component, OnInit } from '@angular/core';
import { PersonalDetailsModel } from '../personal-details/personal-details.models';
import { CalculatorModel } from './calculator.component.model';
import { CalculatorComponentService } from './calculator.component.service';

@Component({
  selector: 'Calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {
  Model: CalculatorModel;
  PersonalDetailModel: PersonalDetailsModel;
  constructor(private _calculatorService: CalculatorComponentService) { }

  async ngOnInit() {
    this.Model = await this._calculatorService.GetModel();
    this.PersonalDetailModel = await this._calculatorService.GetPersonalDetailsModel();
  }
}
