import { async } from '@angular/core/testing';
import { AppConfig } from '../../models/appconfig';
import { CalculatorApiService } from './calculator.api.service';
import { PageModel } from '../../../components/business-components/page/page.component.model';
import { CalculatorModel } from '../../../components/business-components/calculator/calculator.component.model';

describe('CalculatorApiService', () => {
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
  const _mockedCalculatorModel: CalculatorModel = {
    Title: 'Australian Super',
    Content: 'Mock Content'
  };
  const _mockedFundName = 'Australian Super';
  const _appConfig: AppConfig = new AppConfig();
  let _pageCalculatorApiService: CalculatorApiService;

  const _mockedWebService = jasmine.createSpyObj('WebService', ['Get']);

  beforeEach(async(() => {
    _pageCalculatorApiService = new CalculatorApiService(_appConfig, _mockedWebService);
  }));

  it(`GetPageModel should execute correct flow`, async () => {
    _mockedWebService.Get.and.returnValue(Promise.resolve(_mockedPageModel));
    const expectedModel = _mockedPageModel;
    const url = `${_appConfig.Api.Calculator.GetPageModel}/${_mockedFundName}`;

    let actualModel = await _pageCalculatorApiService.GetPageModel(_mockedFundName);

    expect(actualModel)
      .toBe(expectedModel);
    expect(_mockedWebService.Get)
      .toHaveBeenCalledWith(url);
  });

  it(`GetCalculatorModel should execute correct flow`, async () => {
    _mockedWebService.Get.and.returnValue(Promise.resolve(_mockedCalculatorModel));
    const expectedModel = _mockedCalculatorModel;
    const url = `${_appConfig.Api.Calculator.GetCalculatorModel}/${_mockedFundName}`;

    let actualModel = await _pageCalculatorApiService.GetCalculatorModel(_mockedFundName);

    expect(actualModel)
      .toBe(expectedModel);
    expect(_mockedWebService.Get)
      .toHaveBeenCalledWith(url);
  });
});
