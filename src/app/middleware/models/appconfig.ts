import { Injectable } from "@angular/core";

@Injectable()
export class AppConfig {
  public Site: SiteConfig = new SiteConfig();
  public Api: ApiConfig = new ApiConfig();
}

export class SiteConfig {
  public DefaultFund: string = 'tal';
}

export class ApiConfig {
  public Calculator: CalculatorApiConfig = new CalculatorApiConfig();
}

export class CalculatorApiConfig {
  private _baseEndPoint: string = 'http://dc1dev210:90/calc';
  public GetPageModel: string = `${this._baseEndPoint}/page`;
  public GetCalculatorModel: string = `${this._baseEndPoint}/calculator`;
  public GetPersonalDetailsModel: string = `${this._baseEndPoint}/personaldetails`;
}
