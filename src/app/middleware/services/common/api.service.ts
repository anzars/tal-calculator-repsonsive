import { Injectable } from "@angular/core";
import { AppConfig } from '../../models/appconfig';
import { WebService } from './web.service';


@Injectable()
export class ApiService {

  //constructor(protected _appConfig: AppConfig) { }
  constructor(protected _appConfig: AppConfig, protected _webService: WebService) { }
}
