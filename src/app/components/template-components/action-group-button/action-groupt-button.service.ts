import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionGroupButtonService {
  constructor() { }
  public GetButtonModel() {
    return {
      Label: '',
      DefaultValue: 'I D LIKE TO SEE HOW MUCH COVER I NEED',
      CurrentValue: null,
      Values: [{
        Value: '',
        Text: ''
      }],
      ValidationRules: {
        IsRequired: true,
        MinValue: null,
        MaxValue: null,
        IsRequiredErrorMsg: '',
        MinErrorMsg: '',
        MaxErrorMsg: ''
      },
      IsVisible: true,
      IsDisabled: false,
      ToolTip: '',
      PlaceHolder: ''
    }
  }
}
