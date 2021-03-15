import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Type } from 'src/app/middleware/models/form.models';
import { ActionGroupElementComponent } from '../action-group-element/action-group-element.component';
import { ActionGroupDropdownListComponent } from './action-group-dropdown-list.component';

describe('ActionGroupDropdownListComponent', () => {
  let component: ActionGroupDropdownListComponent;
  let _fixture: ComponentFixture<ActionGroupDropdownListComponent>;
  let actionelement: ActionGroupElementComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionGroupDropdownListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    _fixture = TestBed.createComponent(ActionGroupDropdownListComponent);
    component = _fixture.componentInstance;
    _fixture.detectChanges();
  });

  it('Rendered control Should be of the type dropdown', () => {
    actionelement = _fixture.nativeElement.querySelector('ActionGroupElement');
    expect(actionelement.Type)
      .toBe(Type.Dropdown);
  });

});
