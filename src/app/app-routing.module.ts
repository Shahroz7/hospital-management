import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { ClinicianFormComponent } from './clinician-form/clinician-form.component';
import { ClinicianPortalComponent } from './clinician-portal/clinician-portal.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModifyClinicianComponent } from './modify-clinician/modify-clinician.component';
import { ModifyPatientComponent } from './modify-patient/modify-patient.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientPortalComponent } from './patient-portal/patient-portal.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent  },
  { path: 'admin', component: AdminPortalComponent },
  { path: 'clinician', component: ClinicianPortalComponent},
  { path: 'cform', component: ClinicianFormComponent},
  { path: 'patient', component: PatientPortalComponent},
  { path: 'pform', component: PatientFormComponent},
  { path: 'mform/:phone', component: ModifyPatientComponent },
  { path: 'cmform/:phone', component: ModifyClinicianComponent },
  { path: 'admin/:phone', component: AdminPortalComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
