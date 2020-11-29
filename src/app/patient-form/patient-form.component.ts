import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';
import Swal from 'sweetalert2';
import { AgeValidator } from '../age-validator';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {

  patientForm : PatientForm  = new PatientForm();
  msg='';
  patientGroup: FormGroup;
  patientId: any;


  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {

    this.apiService.getPatientId().subscribe( 
      data => {
        console.log("got patientId" , this.patientId = data); 
        this.patientId = data;
        });

    this.patientGroup = new FormGroup({
      patientId: new FormControl(),
      fullname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3),AgeValidator]),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])),
      gender: new FormControl(),
      address: new FormControl(),
      appointment: new FormControl(),
   })

  }

  
  createPatientForm(){
    this.patientForm= this.patientGroup.value;
    this.patientForm.patientId=this.patientId;
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
