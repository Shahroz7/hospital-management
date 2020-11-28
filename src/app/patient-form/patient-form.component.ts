import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm : PatientForm  = new PatientForm();
  msg='';
  patientGroup: FormGroup;


  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
    this.patientGroup = new FormGroup({
      fullname: new FormControl('',[Validators.required, Validators.minLength(3)]),
      age: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      address: new FormControl(),
      appointment: new FormControl(),
   })
  }

  
  createPatientForm(){
    this.patientForm= this.patientGroup.value;
    console.log("after copying in create ", this.patientForm)
   this.apiService.createPatientForm(this.patientForm).subscribe(
    data =>{ console.log("response recieved");
      Swal.fire({
        title: 'Form Submit',
        text: 'The patient details have successfully submitted',
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'OK',
        cancelButtonText: ''
      })
      this.router.navigate(['/patient']);
  },
  (error) => { console.log("exception ocurred", this.patientForm);
  this.msg="Please enter the details properly";
  })
 }

 
get patientGroupControl() {
    return this.patientGroup.controls;
  }

}
