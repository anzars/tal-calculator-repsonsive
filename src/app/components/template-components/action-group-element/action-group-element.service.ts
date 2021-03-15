import { Injectable } from '@angular/core';
import { ActionGroupElementComponent } from './action-group-element.component';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActionGroupElementService {
  
  public GetCurrentControl(component: ActionGroupElementComponent): FormControl {
    let control;
    switch (component.Type) {
      case component.FieldTypeEnum.Number:
        control = component.inputNumberControl;
        break;
      case component.FieldTypeEnum.YesNo:
        control = component.toggleControl;
        break;
      case component.FieldTypeEnum.Dropdown:
        control = component.dropdownControl;
        break;
    }
    return control
  }
}
