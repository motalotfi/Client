import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_common/navbar/components/navbar.component';
import { LoginComponent } from './_common/login/components/login.component';
import { AddDataComponent } from './_common/add-data/add-data/add-data.component';
import { ShamsiDatePipe } from './custom.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgSelect2Module } from 'ng-select2';
import { AddCompanyComponent } from './_common/add-company/add-company.component';
import { EditCompanyComponent } from './_common/edit-data/edit-company.component';
import { SignupComponent } from './_common/signup/signup.component';
// import { OnlyNumber, ValidNumber } from './custom.directive';
import { StepsModule } from 'primeng/steps';
import { NotifierModule } from 'angular-notifier';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { UserListComponent } from './_admin/admin-list/user-list/user-list.component';
import { DataListComponent } from './_admin/data-list/data-list/data-list.component';

const customNotifierOptions: any = {
  position: {
    horizontal: {
      position: 'left',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: false,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddDataComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    SignupComponent,
    ShamsiDatePipe,
    UserListComponent,
    DataListComponent,

  ],
  imports: [
    BrowserModule,

    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    NotifierModule.withConfig(customNotifierOptions),
    NotifierModule,
    StepsModule,
    ButtonModule, 
    AccordionModule, 
    NgSelect2Module,


    // OnlyNumber,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
