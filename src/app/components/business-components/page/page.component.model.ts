import { DisclaimerModel } from '../disclaimer/disclaimer.component.model';

export class Header {
  public Logo: string;
  public FundName: string;
}

export class Footer {
  public DisclaimerLinkText: string;
  public AssumptionLinkText: string;
  public CopyrightInfo: string;
}

export class PageModel {
  public Title: string;
  public Header: Header;
  public Footer: Footer
  public Disclaimer: DisclaimerModel
}
