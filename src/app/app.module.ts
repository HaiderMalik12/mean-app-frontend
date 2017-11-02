import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CompanyListComponent} from './companies/company-list/company-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CompanyService} from "./companies/company.service";
import {RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [{
  path: 'companies',
  component: CompanyListComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
