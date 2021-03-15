import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { Field, Type } from 'src/app/middleware/models/form.models';
import { ActionGroupButtonComponent } from './action-group-button.component';

describe('ActiongroupbuttonComponent', () => {
  const _mockedModel: Field = {
    Label: 'Button',
    DefaultValue: 'Button',
    Values: [
      {
        Value: 'Yes',
        Text: 'Yes'
      },
      {
        Value: 'No',
        Text: 'No'
      }
    ],
    ValidationRules: {
      Required:null,
      Min: null,
      Max: null,
  
    },
    IsVisible: true,
    IsDisabled: false,
    ToolTip: '',
    PlaceHolder: '',
  };

  let _fixture: ComponentFixture<ActionGroupButtonComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ActionGroupButtonComponent],
      imports: [MatButtonModule],
      schemas: [NO_ERRORS_SCHEMA]

    })
      .compileComponents();
    _fixture = TestBed.createComponent(ActionGroupButtonComponent);
    _fixture.componentInstance.Model = _mockedModel;
    _fixture.detectChanges();
  });

  beforeEach(() => {
    _fixture = TestBed.createComponent(ActionGroupButtonComponent);
    _fixture.componentInstance.Model = _mockedModel;
    _fixture.detectChanges();
  });

  it('Rendered control Should be of the type button', () => {
    let actionelement = _fixture.nativeElement.querySelector('ActionGroupElement');
    expect(actionelement.Type)
      .toBe(Type.Button);
  });

  it('should emit event on click of button', () => {
  
   let component = _fixture.componentInstance;
    _fixture.detectChanges();
    spyOn(component.OnClick, 'emit');
    const nativeElement = _fixture.nativeElement;
    const button = nativeElement.querySelector('ActionGroupElement');
    button.dispatchEvent(new Event('OnClickEvent'));
 
    _fixture.detectChanges();
 
    expect(component.OnClick.emit).
    toHaveBeenCalled();
 });
});
