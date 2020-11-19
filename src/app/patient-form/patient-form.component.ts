import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm : PatientForm  = new PatientForm();
  msg='';

  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
  }

  createPatientForm( ){
   this.apiService.createPatientForm(this.patientForm).subscribe(
    data =>{ console.log("response recieved");
    this.router.navigate(['/patient'])
  },
  (error) => { console.log("exception ocurred", this.patientForm);
  this.msg="Please enter the details properly";
 }
  )

 }



}
