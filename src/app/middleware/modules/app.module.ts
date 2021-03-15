import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatorComponent } from 'src/app/components/business-components/calculator/calculator.component';
import { CalculatorComponentService } from 'src/app/components/business-components/calculator/calculator.component.service';
import { DisclaimerComponent } from 'src/app/components/business-components/disclaimer/disclaimer.component';
import { PageComponent } from 'src/app/components/business-components/page/page.component';
import { PageComponentService } from 'src/app/components/business-components/page/page.component.service';
import { PersonalDetailsComponent } from 'src/app/components/business-components/personal-details/personal-details.component';
import { PersonalDetailsService } from 'src/app/components/business-components/personal-details/personal-details.service';
import { ActionGroupButtonComponent } from 'src/app/components/template-components/action-group-button/action-group-button.component';
import { ActionGroupDropdownListComponent } from 'src/app/components/template-components/action-group-dropdown-list/action-group-dropdown-list.component';
import { ActionGroupYesNoButtonsComponent } from 'src/app/components/template-components/action-group-yes-no-buttons/action-group-yes-no-buttons.component';
import { ActionGroupElementComponent } from '../../components/template-components/action-group-element/action-group-element.component';
import { AppConfig } from '../models/appconfig';
import { CalculatorApiService } from '../services/apis/calculator.api.service';
import { ModalPopupService } from '../services/common/modalpopup.service';
import { UtilityService } from '../services/common/utility.service';
import { WebService } from '../services/common/web.service';
import { AppRoutingModule } from './app-routing.module';
import { MaterialsModule } from './materials.module';
 
@NgModule({
  declarations: [
    PageComponent,
    CalculatorComponent,
    DisclaimerComponent,
    ActionGroupElementComponent,
    ActionGroupButtonComponent,
    ActionGroupDropdownListComponent,
    ActionGroupYesNoButtonsComponent,
    PersonalDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    //System providers -----------------------------------------------------------------------
    { provide: APP_BASE_HREF, useValue: '/group/' },
  
   //Common providers -----------------------------------------------------------------------
    AppConfig,

    //Shared Services -----------------------------------------------------------------------
    WebService,
    UtilityService,
    ModalPopupService,

    //Component Services -----------------------------------------------------------------------
    PageComponentService,
    CalculatorComponentService,
    PersonalDetailsService,
   
    //Api Services -----------------------------------------------------------------------
    CalculatorApiService
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
