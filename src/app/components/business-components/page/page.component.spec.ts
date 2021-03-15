import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { PageComponent } from './page.component';
import { PageModel } from './page.component.model';
import { PageComponentService } from './page.component.service';

describe('PageComponent', () => {
  const _mockedPageModel: PageModel = {
    Title: 'Australian Super',
    Header: {
      Logo: 'assets/images/logo/logo-australiansuper1.svg',
      FundName: 'AustralianSuper'
    },
    Disclaimer: {
      Title: 'Disclaimer',
      Header: 'Header',
      Content: 'Content',
      CrossButtonText: 'X',
      ContinueButtonText: 'Continue',
      ShowOnPageLoad: true
    },
    Footer: {
      AssumptionLinkText: 'Assumptions',
      DisclaimerLinkText: 'Disclaimer',
      CopyrightInfo: 'CopyrightInfo'
    }
  };

  let _fixture: ComponentFixture<PageComponent>;
  const _mockedPageComponentService = jasmine.createSpyObj('PageComponentService', ['GetModel', 'Init', 'ShowDisclaimerPopup']);
  _mockedPageComponentService.GetModel.and.returnValue(_mockedPageModel);
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PageComponent],
      providers: [
        { provide: PageComponentService, useValue: _mockedPageComponentService },
      ]
    })
      .compileComponents();
    _fixture = TestBed.createComponent(PageComponent);
    _fixture.detectChanges();
  });

  beforeEach(() => {
    _fixture.detectChanges();
  });

  it('ngOnInit should execute correct flow', () => {
    expect(_mockedPageComponentService.GetModel)
      .toHaveBeenCalled();
    expect(_mockedPageComponentService.Init)
      .toHaveBeenCalledWith(_mockedPageModel);
  });

  it('should render head section successfully', () => {
    expect(_fixture.nativeElement.querySelector('head'))
      .toBeDefined();
  });

  it(`should render title inside head section successfully`, () => {
    expect(_fixture.nativeElement.querySelector('head>title').textContent)
      .toContain(_mockedPageModel.Title);
  });

  it('should render body section successfully', () => {
    expect(_fixture.nativeElement.querySelector('body'))
      .toBeDefined();
  });

  it('should render header & logo section inside body successfully', () => {
    const header = _fixture.nativeElement.querySelector('body>header');    
    const logo = header.querySelector('#logo');
    
    expect(logo.attributes[3].value)
      .toBe(_mockedPageModel.Header.Logo);

    expect(logo.alt)
      .toBe(_mockedPageModel.Header.FundName);
  });

  it('should render content section with Calculator component inside body successfully', () => {
    const contentSection = _fixture.nativeElement.querySelector('body>section');
    expect(contentSection)
      .toBeDefined();

    expect(contentSection.querySelector('Calculator'))
      .toBeDefined();
  });

  it('should render footer section insdie body successfully', () => {
    expect(_fixture.nativeElement.querySelector('body>footer'))
      .toBeDefined();
  });

  it('footer should render assumption and disclaimer link successfully', () => {
    let footer = _fixture.nativeElement.querySelector('footer');

    expect(footer.querySelector('#lnk-assumption').textContent)
      .toContain(_mockedPageModel.Footer.AssumptionLinkText);
  
    expect(footer.querySelector('#lnk-disclaimer').textContent)
      .toContain(_mockedPageModel.Footer.DisclaimerLinkText);
  });

  it('disclaimer click should trigger ShowDisclaimerOnDemand method', (() => {
    spyOn(_fixture.componentInstance, 'ShowDisclaimerOnDemand').and.callFake(() => { _mockedPageComponentService.ShowDisclaimerPopup(_mockedPageModel.Disclaimer); });

    _fixture.nativeElement.querySelector('#lnk-disclaimer').click();
    _fixture.detectChanges();

    expect(_fixture.componentInstance.ShowDisclaimerOnDemand)
      .toHaveBeenCalled();
    expect(_mockedPageComponentService.ShowDisclaimerPopup)
      .toHaveBeenCalledOnceWith(_mockedPageModel.Disclaimer);
  }));

  it('footer should render copyright info. successfully', () => {
    let footer = _fixture.nativeElement.querySelector('footer');

    expect(footer.querySelector('#copyright').textContent)
      .toContain(_mockedPageModel.Footer.CopyrightInfo);
  });
});
