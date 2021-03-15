import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Field, LabelPosition, Type } from 'src/app/middleware/models/form.models';
import { ActionGroupElementComponent } from './action-group-element.component';

describe('ActiongroupelementComponent', () => {
  const _mockedModel: Field = {
    "Label": "Gender",
    "DefaultValue": '',
    "IsVisible": true,
    "IsDisabled": false,
    "PlaceHolder": null,
    "ToolTip": null,
    "ValidationRules": {
      "Required": {
        "Value": true,
        "MessageOnError": "Gender is a required field"
      },
      "Min": null,
      "Max": {
        "Value": 60,
        "MessageOnError": ''
      },
    },
    "Values": [
      {
        "Value": "M",
        "Text": "Male"
      },
      {
        "Value": "F",
        "Text": "Female"
      }
    ]
  };
  let component: ActionGroupElementComponent;
  let _fixture: ComponentFixture<ActionGroupElementComponent>;


  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ActionGroupElementComponent],
      imports: [FormsModule, ReactiveFormsModule, BrowserAnimationsModule, MatCheckboxModule, MatButtonModule]
    })
      .compileComponents();
    _fixture = TestBed.createComponent(ActionGroupElementComponent);
    _fixture.componentInstance.Model = _mockedModel;
    _fixture.componentInstance.Type = Type.YesNo;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
  });

  beforeEach(() => {
    _fixture = TestBed.createComponent(ActionGroupElementComponent);
    _fixture.componentInstance.Model = _mockedModel;
    _fixture.componentInstance.Type = Type.YesNo
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
  });

  it('Should render Toggle button successfully', () => {
    _fixture.componentInstance.Type = Type.YesNo;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-label-top').textContent)
      .toContain(_mockedModel.Label);
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-M').textContent)
      .toContain(_mockedModel.Values[0].Value);
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-F').textContent)
      .toContain(_mockedModel.Values[1].Value);
  });

  it('Should not render any other control when Toggle button is rendered ', () => {
    _fixture.componentInstance.Type = Type.YesNo;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#input-number'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-text'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#dropdown'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#checkbox'))
      .toBeNull();
  });

  it('Should render Input Number field successfully', () => {
    _fixture.componentInstance.Type = Type.Number;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.componentInstance.Model.DefaultValue = 90
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-label-top').textContent)
      .toContain(_mockedModel.Label);
    expect(_fixture.nativeElement.querySelector('#input-number').value)
      .toContain(_mockedModel.DefaultValue);
  });

  it('Should not render any other control when Input Number field is rendered ', () => {
    _fixture.componentInstance.Type = Type.Number;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.componentInstance.Model.DefaultValue = 90
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-Yes'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-text'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#dropdown'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#checkbox'))
      .toBeNull();
  });

  it('Should render Input Text field successfully', () => {
    _fixture.componentInstance.Type = Type.Text;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-label-top').textContent)
      .toContain(_mockedModel.Label);
    expect(_fixture.nativeElement.querySelector('#input-text').value)
      .toContain(_mockedModel.DefaultValue);
  });

  it('Should not render any other control when Input Text field is rendered ', () => {
    _fixture.componentInstance.Type = Type.Text;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-Yes'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-number'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#dropdown'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#checkbox'))
      .toBeNull();
  });

  it('Should render Dropdown field successfully', () => {
    _fixture.componentInstance.Type = Type.Dropdown;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.componentInstance.Model.DefaultValue = 'Yes'
    _fixture.detectChanges();
    console.log(_fixture.componentInstance.Model.Values);
    expect(_fixture.nativeElement.querySelector('#mat-label-top').textContent)
      .toContain(_mockedModel.Label);
    expect(_fixture.nativeElement.querySelector('#dropdown').value)
      .toContain(_mockedModel.DefaultValue);
  });

  it('Should not render any other control when Dropdown field is rendered ', () => {
    _fixture.componentInstance.Type = Type.Dropdown;
    _fixture.componentInstance.Model.DefaultValue = 'Yes';
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-Yes'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-text'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-number'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#checkbox'))
      .toBeNull();
  });

  it('Should check Checkbox field is checked When default value is true  successfully', () => {
    _fixture.componentInstance.Type = Type.Checkbox;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.componentInstance.Model.DefaultValue = true;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#checkbox-input').checked)
      .toBeTrue();
  });

  it('Should not render any other control when Checkbox field is rendered ', () => {
    _fixture.componentInstance.Type = Type.Checkbox;
    _fixture.componentInstance.Model.DefaultValue = true;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.detectChanges();
    expect(_fixture.nativeElement.querySelector('#mat-button-toggle-Yes'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-text'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#input-number'))
      .toBeNull();
    expect(_fixture.nativeElement.querySelector('#dropdown'))
      .toBeNull();
  });

  it('should emit event on click of button', () => {
    _fixture.componentInstance.Type = Type.Button;
    component = _fixture.componentInstance;
    _fixture.detectChanges();
    spyOn(component.OnClickEvent, 'emit');
    const nativeElement = _fixture.nativeElement;
    const button = nativeElement.querySelector('#mat-button');
    button.dispatchEvent(new Event('click'));

    _fixture.detectChanges();

    expect(component.OnClickEvent.emit).
      toHaveBeenCalled();
  });

  it('should trigger validation for invalid controls', () => {
    _fixture.componentInstance.Type = Type.Number;
    _fixture.componentInstance.LabelPosition = LabelPosition.Top;
    _fixture.componentInstance.Model.DefaultValue = null;
    component = _fixture.componentInstance;
    _fixture.detectChanges();
    component.IsValid();
    _fixture.detectChanges();
    expect(component.IsValid()).toBeFalse();
  });

  it('IsVisible() should return correct value', () => {
    expect(component.IsVisible()).toBeTrue();
  });

});
