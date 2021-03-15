import { TestBed } from '@angular/core/testing';

import { ActionGroupElementService } from './action-group-element.service';

describe('ActionGroupElementService', () => {
  let service: ActionGroupElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionGroupElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
