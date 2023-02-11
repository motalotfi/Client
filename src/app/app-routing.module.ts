import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './_common/add-data/add-data/add-data.component';
import { LoginComponent } from './_common/login/components/login.component';
import { AddCompanyComponent } from './_common/add-company/add-company.component';
import { SignupComponent } from './_common/signup/signup.component';
import { DataListComponent } from './_admin/data-list/data-list/data-list.component';
import { UserListComponent } from './_admin/admin-list/user-list/user-list.component';
import { EditCompanyComponent } from './_common/edit-data/edit-company.component';

const routes: Routes = [

  { path: 'add-user', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-data', component: AddDataComponent },
  { path: 'edit-data/:id', component: EditCompanyComponent },
  { path: 'data-add', component: AddCompanyComponent },
  { path: 'data-list', component: DataListComponent },
  { path: 'user-list', component: UserListComponent },


  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // relativeLinkResolution: 'legacy',
    // initialNavigation: 'enabled',
    // anchorScrolling: 'enabled',
    // scrollPositionRestoration: 'enabled',
    // onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
