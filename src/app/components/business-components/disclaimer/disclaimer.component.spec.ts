import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisclaimerComponent } from './disclaimer.component';
import { DisclaimerModel } from './disclaimer.component.model';

describe('DisclaimerComponent', () => {
  const _mockedDisclaimerModel: DisclaimerModel = {
    Title: 'Disclaimer',
    Header: 'Header',
    Content: 'Content',
    CrossButtonText: 'X',
    ContinueButtonText: 'Continue',
    ShowOnPageLoad: true
  };
  let _fixture: ComponentFixture<DisclaimerComponent>;
  const _mockedModalPopupService = jasmine.createSpyObj('ModalPopupService', ['Close']);

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [DisclaimerComponent],
      providers: [
        { provide: DisclaimerModel, useValue: _mockedModalPopupService },
        {
          provide: MAT_DIALOG_DATA,
          useValue: _mockedDisclaimerModel
        }
      ]
    })
      .compileComponents();
    _fixture = TestBed.createComponent(DisclaimerComponent);
    _fixture.detectChanges();
  });

  beforeEach(() => {
    _fixture.componentInstance.Model = _mockedDisclaimerModel;
    _fixture.detectChanges();
  });

  it('should render disclaimer section successfully', () => {
    expect(_fixture.nativeElement.querySelector('.disclaimer'))
      .toBeDefined();
  });

  it(`should render disclaimer header with title and corss button inside disclaimer section successfully`, () => {
    const header = _fixture.nativeElement.querySelector('.disclaimer>.header');    
    const h4 = header.querySelector('h4[id=disclaimer-title]');
    const crossButton = header.querySelector('button[id=disclaimer-cross]');

    expect(h4.textContent)
      .toBe(_mockedDisclaimerModel.Title);
    expect(crossButton.textContent)
      .toBe(_mockedDisclaimerModel.CrossButtonText);
    expect(crossButton.getAttribute('mat-dialog-close'))
      .not
      .toBeNull();
  });

  it(`should render disclaimer sub header inside disclaimer section successfully`, () => {
    const subHeader = _fixture.nativeElement.querySelector('.disclaimer>p[id=disclaimer-sub-header]');

    expect(subHeader.textContent)
      .toBe(_mockedDisclaimerModel.Header);
  });

  it(`should render disclaimer content inside disclaimer section successfully`, () => {
    const content = _fixture.nativeElement.querySelector('.disclaimer>div[id=disclaimer-content]');

    expect(content.textContent)
      .toBe(_mockedDisclaimerModel.Content);
  });

  it(`should render continue button inside disclaimer section successfully`, () => {
    const continueButton = _fixture.nativeElement.querySelector('.disclaimer>button[id=disclaimer-continue]');

    expect(continueButton.textContent)
      .toBe(_mockedDisclaimerModel.ContinueButtonText);
    expect(continueButton.getAttribute('mat-dialog-close'))
      .not
      .toBeNull();
  });
});
