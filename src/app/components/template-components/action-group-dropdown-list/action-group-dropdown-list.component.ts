import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Field, LabelPosition, Type } from 'src/app/middleware/models/form.models';
import { ActionGroupElementComponent } from '../action-group-element/action-group-element.component';

@Component({
  selector: 'ActionGroupDropdownList',
  templateUrl: './action-group-dropdown-list.component.html',
  styleUrls: ['./action-group-dropdown-list.component.less']
})
export class ActionGroupDropdownListComponent{
  @Input()
  Model:Field;
  FieldTypeEnum: any = Type;
  LabelPositionEnum: any = LabelPosition;
  @ViewChild('Dropdown') Dropdown:ActionGroupElementComponent;
}
