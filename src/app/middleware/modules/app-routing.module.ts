import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppConfig } from '../models/appconfig';
import { PageComponent } from '../../components/business-components/page/page.component';

const appConfig = new AppConfig();
const routes: Routes = [
  { path: '', redirectTo: `/${appConfig.Site.DefaultFund}`, pathMatch: 'full' },
  { path: ':fund', component: PageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
