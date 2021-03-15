import { async } from '@angular/core/testing';
import { WebService } from './web.service';
import { of } from 'rxjs';

describe('WebService', () => {
  let _webService: WebService;
  const _mockedHttp = jasmine.createSpyObj('HttpClient', ['get', 'post']);
  
  beforeEach(async(() => {
    _webService = new WebService(_mockedHttp);
  }));

  it(`Get should execute correct flow`, async () => {
    const url = 'any-url';
    let expectedResponse = 'Ok';
    _mockedHttp.get.and.returnValue(of(expectedResponse));

    let actualResponse = await _webService.Get(url);

    expect(actualResponse)
      .toBe(expectedResponse);
    expect(_mockedHttp.get)
      .toHaveBeenCalledWith(url);
  });

  it(`Post should execute correct flow`, async () => {
    const url = 'any-url';
    const data = {
      Id: '123'
    };
    let expectedResponse = 'Ok';
    _mockedHttp.post.and.returnValue(of(expectedResponse));

    let actualResponse = await _webService.Post(url, data);

    expect(actualResponse)
      .toBe(expectedResponse);
    expect(_mockedHttp.post)
      .toHaveBeenCalledWith(url, data);
  });
});
