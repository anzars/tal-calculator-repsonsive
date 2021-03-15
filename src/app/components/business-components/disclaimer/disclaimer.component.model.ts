export enum DisclaimerDisplayType {
  None = 0,
  Popup = 1,
  Print = 2,
  Both = 3
}

export class DisclaimerModel {
  public Title: string;
  public Header: string;
  public Content: string;
  public CrossButtonText: string;
  public ContinueButtonText: string;
  public ShowOnPageLoad: boolean;
}
