import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailsComponent } from './customer/customer-details/customer-details.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { ListViewComponent } from './customer/views/list-view/list-view.component';
import { CardViewComponent } from './customer/views/card-view/card-view.component';
import { CustomerprofileComponent } from './customer/views/customerprofile/customerprofile.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'customer/profile/:id',
    component: CustomerprofileComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    CustomerprofileComponent,
    ListViewComponent,
    CardViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
