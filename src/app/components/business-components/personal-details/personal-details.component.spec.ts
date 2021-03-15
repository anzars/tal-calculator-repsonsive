import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalDetailsComponent } from './personal-details.component';
import { PersonalDetailsModel } from './personal-details.models';
import { Type } from 'src/app/middleware/models/form.models';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PersonalDetailsService } from './personal-details.service';

describe('PersonalDetailComponent', () => {
  const _mockedPersonalDetailsModel: PersonalDetailsModel = {
    "Title": "Personal details",
    "SubHeader": "<p>To start we need to know a few things about you so we can estimate the cost of maintaining you (and your family's) lifestyle if you die or suffer a disability and can no longer work.</p>",
    "Age": {
      "Label": "Your age",
      "DefaultValue": '',
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": "Enter your age",
      "ToolTip": "We need your age to estimate the amount you (or your family) may need should you die unexpectedly or suffer a disability that prevents you from working.",
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": "Age is a required field"
        },
        "Min": {
          "Value": 15,
          "MessageOnError": "Age must be greater than or equal to 15"
        },
        "Max": {
          "Value": 60,
          "MessageOnError": "Age must be less than or equal to 60"
        }
      },
      "Values": null
    },
    "Gender": {
      "Label": "Gender",
      "DefaultValue": null,
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
        "Max": null
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
    },
    "Salary": {
      "Label": "Salary (before tax, excluding super contributions)",
      "DefaultValue": null,
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": "Enter your salary",
      "ToolTip": null,
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": "Salary is a required field"
        },
        "Min": {
          "Value": 1,
          "MessageOnError": "Salary must be greater than 0"
        },
        "Max": null
      },
      "Values": null
    },
    "SalaryFrequency": {
      "Label": null,
      "DefaultValue": null,
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": null,
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": "Salary Frequency is a required field"
        },
        "Min": null,
        "Max": null
      },
      "Values": [
        {
          "Value": "W",
          "Text": "Weekly"
        },
        {
          "Value": "F",
          "Text": "Fortnightly"
        },
        {
          "Value": "M",
          "Text": "Monthly"
        },
        {
          "Value": "A",
          "Text": "Annually"
        }
      ]
    },
    "NeedsButton": {
      "Label": "I'd like to see how much cover I need",
      "DefaultValue": null,
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": null,
      "ValidationRules": null,
      "Values": null
    },
    "CostButton": {
      "Label": "I'd like to see how much cover will cost",
      "DefaultValue": null,
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": null,
      "ValidationRules": null,
      "Values": null
    },
    "Spouse": {
      "Label": "Do you have a spouse or partner",
      "DefaultValue": null,
      "IsVisible": false,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": "We need to know your relationship status to understand if you share expenses with your partner. If you are in a relationship, this is also why we ask for details on your partner's income on the next page",
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": "Spouse is a required field"
        },
        "Min": null,
        "Max": null
      },
      "Values": [
        {
          "Value": "Y",
          "Text": "Yes"
        },
        {
          "Value": "N",
          "Text": "No"
        }
      ]
    },
    "Children": {
      "Label": "How many children do you have",
      "DefaultValue": 0,
      "IsVisible": false,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": "We need to know this so that the calculation takes into consideration any dependent children. Refer to the 'Assumptions' by clicking the Assumptions link on the screen to change the age that your children will be financially independent.",
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": "Children is a required field"
        },
        "Min": null,
        "Max": null
      },
      "Values": [
        {
          "Value": "0",
          "Text": "0"
        },
        {
          "Value": "1",
          "Text": "1"
        },
        {
          "Value": "2",
          "Text": "2"
        },
        {
          "Value": "3",
          "Text": "3"
        }
      ]
    },
    "DisclaimerConfirmation": {
      "Label": "I have read and accept the <a id=\"pd-lnk-disclaimer\" (click)=\"ShowDisclaimerOnDemand()\">important information</a>.",
      "DefaultValue": false,
      "IsVisible": true,
      "IsDisabled": false,
      "PlaceHolder": null,
      "ToolTip": null,
      "ValidationRules": {
        "Required": {
          "Value": true,
          "MessageOnError": null
        },
        "Min": null,
        "Max": null
      },
      "Values": null
    },
    "ContinueButton": {
      "Label": "Continue",
      "DefaultValue": null,
      "IsVisible": true,
      "IsDisabled": true,
      "PlaceHolder": null,
      "ToolTip": null,
      "ValidationRules": null,
      "Values": null
    },
    "ChildAges": [
      {
        "Label": "Age (Child 1)",
        "DefaultValue": null,
        "IsVisible": false,
        "IsDisabled": false,
        "PlaceHolder": null,
        "ToolTip": null,
        "ValidationRules": {
          "Required": {
            "Value": true,
            "MessageOnError": "Age (Child 1) is a required field"
          },
          "Min": {
            "Value": 0,
            "MessageOnError": "Age of Child must be greater than or equals to 0"
          },
          "Max": {
            "Value": 60,
            "MessageOnError": "Age of Child must be less than 18"
          }
        },
        "Values": null
      },
      {
        "Label": "Age (Child 2)",
        "DefaultValue": null,
        "IsVisible": false,
        "IsDisabled": false,
        "PlaceHolder": null,
        "ToolTip": null,
        "ValidationRules": {
          "Required": {
            "Value": true,
            "MessageOnError": "Age (Child 2) is a required field"
          },
          "Min": {
            "Value": 0,
            "MessageOnError": "Age of Child must be greater than or equals to 0"
          },
          "Max": {
            "Value": 60,
            "MessageOnError": "Age of Child must be less than 18"
          }
        },
        "Values": null
      },
      {
        "Label": "Age (Child 3)",
        "DefaultValue": null,
        "IsVisible": false,
        "IsDisabled": false,
        "PlaceHolder": null,
        "ToolTip": null,
        "ValidationRules": {
          "Required": {
            "Value": true,
            "MessageOnError": "Age (Child 3) is a required field"
          },
          "Min": {
            "Value": 0,
            "MessageOnError": "Age of Child must be greater than or equals to 0"
          },
          "Max": {
            "Value": 60,
            "MessageOnError": "Age of Child must be less than 18"
          }
        },
        "Values": null
      }
    ]
  };
  const _mockedPersonalDetailsService = jasmine.createSpyObj('PersonalDetailsService', ['InitiateNeedsFlow', 'InitiateRatesFlow']);
  _mockedPersonalDetailsService.InitiateNeedsFlow.and.returnValue(true);
  _mockedPersonalDetailsService.InitiateRatesFlow.and.returnValue(true);
  let _fixture: ComponentFixture<PersonalDetailsComponent>;
  let component: PersonalDetailsComponent;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PersonalDetailsComponent],
      providers: [
        PersonalDetailsService
        // { provide: PersonalDetailsService, useValue: _mockedPersonalDetailsService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    _fixture = TestBed.createComponent(PersonalDetailsComponent);
    _fixture.componentInstance.Model = _mockedPersonalDetailsModel;
    _fixture.detectChanges();
  });

  beforeEach(() => {
    _fixture.componentInstance.Model = _mockedPersonalDetailsModel;
    _fixture.detectChanges();
  });

  it('Should render the title successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-title');
    expect(actionelement.textContent)
      .toContain(_mockedPersonalDetailsModel.Title);
  });

  it('Should render the subheader successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-subheader');
    expect(actionelement.innerHTML)
      .toContain(_mockedPersonalDetailsModel.SubHeader);
  });

  it('Should render the Age successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-age');
    expect(actionelement.Type)
      .toEqual(Type.Number);
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.Age);
  });

  it('Should render the Gender successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-gender');
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.Gender);
  });

  it('Should render the Salary  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-salary');
    expect(actionelement.Type)
      .toEqual(Type.Number);
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.Salary);
  });

  it('Should render the SalaryFrequency  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-salary-frequency');
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.SalaryFrequency);
  });

  it('Should render the Needsbutton  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-needs');
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.NeedsButton);
  });

  it('Should render the Costbutton  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-cost');
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.CostButton);
  });

  it('Should render the disclaimer confirmation  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-disclaimer-confirmation');
    expect(actionelement.Type)
      .toEqual(Type.Checkbox);
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.DisclaimerConfirmation);
  });

  it('Should render the Continue  successfuly', async () => {
    let actionelement = _fixture.nativeElement.querySelector('#personal-details-continue');
    expect(actionelement.Model)
      .toEqual(_mockedPersonalDetailsModel.ContinueButton);
  });

  it('Should render spouse and children successfully when needs button is clicked', async () => {
    let spouse = _fixture.nativeElement.querySelector('#personal-details-spouse');
    let children = _fixture.nativeElement.querySelector('#personal-details-children');
    spyOn(_fixture.componentInstance, 'NeedsClicked').and.callFake(() => { _mockedPersonalDetailsService.InitiateNeedsFlow(_fixture.componentInstance) });
    let button = _fixture.nativeElement.querySelector('#personal-details-needs');
    button.dispatchEvent(new Event('OnClick'));
    _fixture.detectChanges();
    expect(_fixture.componentInstance.NeedsClicked)
      .toHaveBeenCalled();
    expect(_mockedPersonalDetailsService.InitiateNeedsFlow)
      .toHaveBeenCalledWith(_fixture.componentInstance);
    expect(spouse).toBeDefined();
    expect(children).toBeDefined();
  });

  it('Should  not render spouse and children successfully when rates button is clicked', async () => {
    let spouse = _fixture.nativeElement.querySelector('#personal-details-spouse');
    let children = _fixture.nativeElement.querySelector('#personal-details-children');
    spyOn(_fixture.componentInstance, 'RatesClicked').and.callFake(() => { _mockedPersonalDetailsService.InitiateRatesFlow(_fixture.componentInstance) });
    let button = _fixture.nativeElement.querySelector('#personal-details-cost');
    button.dispatchEvent(new Event('OnClick'));
    _fixture.detectChanges();
    expect(_fixture.componentInstance.RatesClicked)
      .toHaveBeenCalled();
    expect(_mockedPersonalDetailsService.InitiateRatesFlow)
      .toHaveBeenCalledWith(_fixture.componentInstance);
    expect(spouse.Model.IsVisible).toBeFalse();
    expect(children.Model.IsVisible).toBeFalse();
  });

  it('Should render Child Ages when number of children is greater than 0', async () => {
    let Children = _fixture.nativeElement.querySelector('#personal-details-children');
    Children.Model.DefaultValue = 1;
    _fixture.detectChanges();
    let Age = _fixture.nativeElement.querySelector('#personal-details-age-0');
    expect(Age).not.toBeNull();
  });

  it('Should not render Child Ages when number of children is 0', async () => {
    let Children = _fixture.nativeElement.querySelector('#personal-details-children');
    Children.Model.DefaultValue = 0;
    _fixture.detectChanges();
    let Age = _fixture.nativeElement.querySelector('#personal-details-age-0');
    expect(Age).toBeNull();
  });
});
