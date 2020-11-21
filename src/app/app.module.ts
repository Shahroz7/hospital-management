import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatPaginatorModule, MatTableModule, MatButtonModule, MatCardModule } from '@angular/material';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClinicianPortalComponent } from './clinician-portal/clinician-portal.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ErrorComponent } from './error/error.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ClinicianFormComponent } from './clinician-form/clinician-form.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ApiService } from './api.service';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { ModifyClinicianComponent } from './modify-clinician/modify-clinician.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    ClinicianPortalComponent,
    PatientPortalComponent,
    HomepageComponent,
    ErrorComponent,
    PagenotfoundComponent,
    MenuComponent,
    FooterComponent,
    ClinicianFormComponent,
    PatientFormComponent,
    ModifyPatientComponent,
    ModifyClinicianComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    NgxPaginationModule,
    NgbModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
