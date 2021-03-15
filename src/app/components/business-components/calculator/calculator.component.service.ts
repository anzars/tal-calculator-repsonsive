import { Injectable } from "@angular/core";
import { CalculatorApiService } from "src/app/middleware/services/apis/calculator.api.service";
import { CalculatorModel } from "./calculator.component.model";
import { UtilityService } from '../../../middleware/services/common/utility.service';
import { PersonalDetailsModel } from "../personal-details/personal-details.models";

@Injectable()
export class CalculatorComponentService {

  constructor(private _calculatorApiService: CalculatorApiService, private _utilityService: UtilityService) { }

  public async GetModel(): Promise<CalculatorModel> {
    const fundName: string = this._utilityService.GetFundNameFromUlr();
    const result = this._calculatorApiService.GetCalculatorModel(fundName);
    return result;
  }

  public async GetPersonalDetailsModel(): Promise<PersonalDetailsModel> {
    const fundName: string = this._utilityService.GetFundNameFromUlr();
    const result = this._calculatorApiService.GetPersonalDetailsModel(fundName);
    return result;
  }
}
