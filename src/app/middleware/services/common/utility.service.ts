import { Injectable } from '@angular/core';
import { AppConfig } from '../../models/appconfig';

@Injectable()
export class UtilityService {
  public CurrentUrl: string = location.href;

  constructor(private _appConfig: AppConfig) { }

  public GetFundNameFromUlr(): string {
    let fundName = this.CurrentUrl.substring(this.CurrentUrl.lastIndexOf('/') + 1); 
    if (!fundName || fundName == '')
      fundName = this._appConfig.Site.DefaultFund;

    return fundName; 
  }
}
