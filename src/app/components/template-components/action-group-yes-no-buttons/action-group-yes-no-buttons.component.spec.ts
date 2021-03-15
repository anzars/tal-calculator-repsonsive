import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionGroupElementComponent } from '../action-group-element/action-group-element.component';
import { Type } from '../../../middleware/models/form.models';

import { ActionGroupYesNoButtonsComponent } from './action-group-yes-no-buttons.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ActionGroupYesNoButtonsComponent', () => {
  let component: ActionGroupYesNoButtonsComponent;
  let _fixture: ComponentFixture<ActionGroupYesNoButtonsComponent>;
  let actionelement: ActionGroupElementComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionGroupYesNoButtonsComponent ],
      schemas:[NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    _fixture = TestBed.createComponent(ActionGroupYesNoButtonsComponent);
    component = _fixture.componentInstance;
    _fixture.detectChanges();
  });

  it('Rendered control Should be of the type YesNo', () => {
    actionelement = _fixture.nativeElement.querySelector('ActionGroupElement');
    expect(actionelement.Type)
      .toBe(Type.YesNo);
  });
});
