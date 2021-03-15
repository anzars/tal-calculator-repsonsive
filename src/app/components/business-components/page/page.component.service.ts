import { Injectable } from "@angular/core";
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';
import { DisclaimerModel } from '../disclaimer/disclaimer.component.model';
import { PageModel } from './page.component.model';
import { CalculatorApiService } from '../../../middleware/services/apis/calculator.api.service';
import { UtilityService } from '../../../middleware/services/common/utility.service';
import { ModalPopupService } from '../../../middleware/services/common/modalpopup.service';

@Injectable()
export class PageComponentService {

  constructor(private _calculatorApiService: CalculatorApiService, private _utilityService: UtilityService, private _modalPopupService: ModalPopupService) { }

  public async GetModel(): Promise<PageModel> {
    const fundName: string = this._utilityService.GetFundNameFromUlr();
    return this._calculatorApiService.GetPageModel(fundName);
  }

  public Init(model: PageModel) {
    if (model.Disclaimer.ShowOnPageLoad) {
      this.ShowDisclaimerPopup(model.Disclaimer);
    }
  }

  public ShowDisclaimerPopup(model: DisclaimerModel) {
    this._modalPopupService.Show(DisclaimerComponent, model);
  }
}
