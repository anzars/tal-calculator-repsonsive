import { Injectable } from "@angular/core";
import { ApiService } from '../common/api.service';
import { PageModel } from '../../../components/business-components/page/page.component.model';
import { CalculatorModel } from '../../../components/business-components/calculator/calculator.component.model';
import { PersonalDetailsModel } from "src/app/components/business-components/personal-details/personal-details.models";

@Injectable()
export class CalculatorApiService extends ApiService {

  public async GetPageModel(fundName: string): Promise<PageModel> {
    const url = `${this._appConfig.Api.Calculator.GetPageModel}/${fundName}`;
    return this._webService.Get<PageModel>(url);
  }

  public async GetCalculatorModel(fundName: string): Promise<CalculatorModel> {
    const url = `${this._appConfig.Api.Calculator.GetCalculatorModel}/${fundName}`;
    return this._webService.Get<CalculatorModel>(url);
  }
  public async GetPersonalDetailsModel(fundName: string): Promise<PersonalDetailsModel> {
    const url = `${this._appConfig.Api.Calculator.GetPersonalDetailsModel}/${fundName}`;
    return this._webService.Get<PersonalDetailsModel>(url);
  }
}
