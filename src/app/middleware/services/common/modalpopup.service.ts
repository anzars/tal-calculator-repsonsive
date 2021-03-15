import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable()
export class ModalPopupService {

  constructor(private matDialog: MatDialog) { }

  public Show(componentType: any, model: any) {
    this.matDialog.open(componentType, { data: model });
  }
}
