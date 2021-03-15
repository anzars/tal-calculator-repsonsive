import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DisclaimerModel } from './disclaimer.component.model';

@Component({
  selector: 'Disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.less']
})
export class DisclaimerComponent {
  public Model: DisclaimerModel;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DisclaimerModel) {
    this.Model = data;
  }
}
