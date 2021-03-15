import { async } from '@angular/core/testing';
import { ModalPopupService } from './modalpopup.service';
import { DisclaimerModel } from '../../../components/business-components/disclaimer/disclaimer.component.model';
import { DisclaimerComponent } from '../../../components/business-components/disclaimer/disclaimer.component';

describe('ModalPopupService', () => {
  let _modalPopupService: ModalPopupService;

  const _mockedMatDialog = jasmine.createSpyObj('MatDialog', ['open']);

  beforeEach(async(() => {
    _modalPopupService = new ModalPopupService(_mockedMatDialog);
  }));

  it(`Show should execute correct flow`, async () => {
    const mockedModel = new DisclaimerModel
    {
      Title: 'Title'
    };
    
    _modalPopupService.Show(DisclaimerComponent, mockedModel);

    expect(_mockedMatDialog.open)
      .toHaveBeenCalledOnceWith(DisclaimerComponent, { data: mockedModel });
  });
});
