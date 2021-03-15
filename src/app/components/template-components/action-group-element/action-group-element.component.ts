import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { Field, LabelPosition, Type, Validity } from '../../../middleware/models/form.models';
import { ActionGroupElementService } from './action-group-element.service';

@Component({
  selector: 'ActionGroupElement',
  templateUrl: './action-group-element.component.html',
  styleUrls: ['./action-group-element.component.less'],
})
export class ActionGroupElementComponent implements OnInit {
  @Output()
  OnClickEvent: EventEmitter<void> = new EventEmitter();
  @Input()
  Model: Field;
  @Input()
  Type: Type;
  @Input()
  LabelPosition: LabelPosition;
  FieldTypeEnum: any = Type;
  LabelPositionEnum: any = LabelPosition;
  
  inputNumberControl: FormControl;
  inputTextControl: FormControl;
  dropdownControl: FormControl;
  checkboxControl: FormControl;
  toggleControl: FormControl;
  buttonControl: FormControl;
  validations: Array<ValidatorFn> = [];

  constructor(private _actionGroupElementService: ActionGroupElementService) { }

  ngOnInit(): void {
    if (this.Type == this.FieldTypeEnum.Number) {
      if (this.Model.ValidationRules.Max) {
        this.validations.push(Validators.max(this.Model.ValidationRules.Max.Value));
      }
      if (this.Model.ValidationRules.Min) {
        this.validations.push(Validators.min(this.Model.ValidationRules.Min.Value));
      }
    }
    if (this.Model.ValidationRules && this.Model.ValidationRules.Required.Value) {
      this.validations.push(Validators.required);
    }
    this.inputTextControl = new FormControl('', this.validations);
    this.dropdownControl = new FormControl('', this.validations);
    this.checkboxControl = new FormControl('', this.validations);
    this.toggleControl = new FormControl(this.Model.DefaultValue, this.validations);
    this.inputNumberControl = new FormControl('', this.validations);
    this.buttonControl = new FormControl();
    console.log(this.Model);
  }

  OnClick() {
    this.OnClickEvent.emit();
  }

  IsVisible() {
    return this.Model.IsVisible;
  }

  IsValid() {
    const control = this._actionGroupElementService.GetCurrentControl(this);
    return (control.status == Validity.Valid);
  }

  public Validate(): void {
    const control = this._actionGroupElementService.GetCurrentControl(this);
    control.markAsTouched();
  }
}
