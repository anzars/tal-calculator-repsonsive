import { Component, Input, ViewChild } from '@angular/core';
import { LabelPosition, Type } from 'src/app/middleware/models/form.models';
import { ActionGroupDropdownListComponent } from '../../template-components/action-group-dropdown-list/action-group-dropdown-list.component';
import { ActionGroupElementComponent } from '../../template-components/action-group-element/action-group-element.component';
import { ActionGroupYesNoButtonsComponent } from '../../template-components/action-group-yes-no-buttons/action-group-yes-no-buttons.component';
import { PersonalDetailsModel } from './personal-details.models';
import { PersonalDetailsService } from './personal-details.service';

@Component({
  selector: 'PersonalDetails',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.less']
})
export class PersonalDetailsComponent {
  @Input()
  Model: PersonalDetailsModel;
  FieldTypeEnum: any = Type;
  LabelPos: any = LabelPosition;
  @ViewChild('Salary') Salary: ActionGroupElementComponent;
  @ViewChild('Age') Age: ActionGroupElementComponent;
  @ViewChild('Gender') Gender: ActionGroupYesNoButtonsComponent;
  @ViewChild('SalaryFrequency') SalaryFrequency: ActionGroupDropdownListComponent;
  constructor(private _personalDetailsService: PersonalDetailsService) { }
  NeedsClicked() {
    this.Model = this._personalDetailsService.InitiateNeedsFlow(this);
  }

  RatesClicked() {
    this.Model = this._personalDetailsService.InitiateRatesFlow(this);
  }
}
