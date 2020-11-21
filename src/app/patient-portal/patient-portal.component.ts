import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';

@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {

   patientForms : PatientForm [];

   fullname : string;

   popoverTitle = 'Delete Confirmation';
   popoverMessage = 'Do you really want to delete?';
   confirmClicked = false;
   cancelClicked = false;
   page1: number = 1;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getPatientDetails().subscribe( 
      data => {
        console.log("got data" , this.patientForms = data); 
        this.patientForms = data;
        });
  }

  deletePatient(patientForms: PatientForm): void {
    this.apiService.deletePatient(patientForms)
      .subscribe( _data => {
        this.patientForms = this.patientForms.filter(u => u !== patientForms);
        this.router.navigate(['/patient'])
      })  
  };

  // findByUsername(){
  //   let response = this.apiService.getPatientByName(this.fullname);
  //   response.subscribe(data =>  {
      
  //     this.patientForms=data;
  //     console.log("The data is ",this.patientForms);
  
  //   }  )
  // }
}
