import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Field, LabelPosition, Type } from '../../../middleware/models/form.models';
import { ActionGroupElementComponent } from '../action-group-element/action-group-element.component';

@Component({
  selector: 'ActionGroupYesNoButtons',
  templateUrl: './action-group-yes-no-buttons.component.html',
  styleUrls: ['./action-group-yes-no-buttons.component.less']
})
export class ActionGroupYesNoButtonsComponent{
  @Input()
  Model: Field;
  FieldTypeEnum: any = Type;
  LabelPositionEnum: any = LabelPosition;
  @ViewChild('Toggle') Toggle:ActionGroupElementComponent;
}
