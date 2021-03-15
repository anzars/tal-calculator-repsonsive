import { async } from '@angular/core/testing';
import { PageModel } from './page.component.model';
import { PageComponentService } from './page.component.service';
import { DisclaimerComponent } from '../disclaimer/disclaimer.component';

describe('PageComponentService', () => {
  const _mockedPageModel: PageModel = {
    Title: 'Australian Super',
    Header: {
      Logo: 'assets/images/logo/logo-australiansuper1.svg',
      FundName: 'AustralianSuper'
    },
    Disclaimer: {
      Title: 'Disclaimer',
      Header: 'Header',
      Content: 'Content',
      CrossButtonText: 'X',
      ContinueButtonText: 'Continue',
      ShowOnPageLoad: true
    },
    Footer: {
      AssumptionLinkText: 'Assumptions',
      DisclaimerLinkText: 'Disclaimer',
      CopyrightInfo: 'CopyrightInfo'
    }
  };

  const _mockedFundName = 'Australian Super';
  let _pageComponentService: PageComponentService;

  const _mockedCalculatorApiService = jasmine.createSpyObj('CalculatorApiService', ['GetPageModel']);
  _mockedCalculatorApiService.GetPageModel.and.returnValue(Promise.resolve(_mockedPageModel));

  const _mockedUtilityService = jasmine.createSpyObj('UtilityService', ['GetFundNameFromUlr']);
  const _mockedModalPopupService = jasmine.createSpyObj('ModalPopupService', ['Show']);
  _mockedUtilityService.GetFundNameFromUlr.and.returnValue(_mockedFundName);

  beforeEach(async(() => {
    _pageComponentService = new PageComponentService(_mockedCalculatorApiService, _mockedUtilityService, _mockedModalPopupService);
  }));

 it(`GetModel should execute correct flow`, async () => {
    const expectedModel = _mockedPageModel;

   let actualModel = await _pageComponentService.GetModel();

    expect(actualModel)
      .toBe(expectedModel);
   expect(_mockedUtilityService.GetFundNameFromUlr)
      .toHaveBeenCalled();
    expect(_mockedCalculatorApiService.GetPageModel)
      .toHaveBeenCalledOnceWith(_mockedFundName);
 });

  it('Init should call ShowDisclaimerPopup When dislaimer model.ShowOnPageLoad is true', async () => {
    spyOn(_pageComponentService, 'ShowDisclaimerPopup');

    _pageComponentService.Init(_mockedPageModel);

    expect(_pageComponentService.ShowDisclaimerPopup)
      .toHaveBeenCalledOnceWith(_mockedPageModel.Disclaimer);
  });

  it('ShowDisclaimerPopup should execute correct flow', () => {

    _pageComponentService.ShowDisclaimerPopup(_mockedPageModel.Disclaimer);

    expect(_mockedModalPopupService.Show)
      .toHaveBeenCalledOnceWith(DisclaimerComponent, _mockedPageModel.Disclaimer);
  });
});
