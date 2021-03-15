import { Component, Input,EventEmitter, Output } from '@angular/core';
import { Field, Type } from 'src/app/middleware/models/form.models';

@Component({
  selector: 'ActionGroupButton',
  templateUrl: './action-group-button.component.html',
  styleUrls: ['./action-group-button.component.less']
})
export class ActionGroupButtonComponent{
  @Output()
  OnClick:EventEmitter<void> = new EventEmitter();
  @Input()
  Model: Field;
  FieldTypeEnum: any = Type;
  OnBtnClick(){
    this.OnClick.emit();
  }
}
