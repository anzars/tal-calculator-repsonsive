import { async } from '@angular/core/testing';
import { AppConfig } from '../../models/appconfig';
import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let _utilityService: UtilityService;
  const _mockedFundName: string = 'eiss';

  const _appConfig = new AppConfig();

  const location = jasmine.createSpyObj('window.location', ['href']);
  location.href = `http"//domain/group/${_mockedFundName}`;

  beforeEach(async(() => {
    _utilityService = new UtilityService(_appConfig);
  }));

  it(`GetFundNameFromUlr should return default fund name When Url is similar to /group/`, async () => {
    _utilityService.CurrentUrl = `http"//domain/group/`;
    
    let actualFundName = _utilityService.GetFundNameFromUlr();

    expect(actualFundName)
      .toBe(_appConfig.Site.DefaultFund);
  });

  it(`GetFundNameFromUlr should return eiss When Url is similar to /group/eiss`, async () => {
    _utilityService.CurrentUrl = `http"//domain/group/${_mockedFundName}`;

    let actualFundName = _utilityService.GetFundNameFromUlr();

    expect(actualFundName)
      .toBe(_mockedFundName);
  });
});
