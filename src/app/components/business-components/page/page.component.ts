import { Component, OnInit } from '@angular/core';
import { PageModel } from './page.component.model';
import { PageComponentService } from './page.component.service';

@Component({
  selector: 'Page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.less']
})
export class PageComponent implements OnInit {

  public Model: PageModel;

  constructor(private _pageService: PageComponentService) {
  }

  async ngOnInit() {
    this.Model = await this._pageService.GetModel();
    this._pageService.Init(this.Model);
  }

  public ShowDisclaimerOnDemand() {
    this._pageService.ShowDisclaimerPopup(this.Model.Disclaimer);
  }
}

