import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ClinicianForm } from '../model';
import Swal from 'sweetalert2';
import { AgeValidator } from '../age-validator';


@Component({
  selector: 'app-clinician-form',
  templateUrl: './clinician-form.component.html',
  styleUrls: ['./clinician-form.component.css']
})
export class ClinicianFormComponent implements OnInit {

  clinicianForm : ClinicianForm  = new ClinicianForm();
  msg='';
  clinicianGroup: FormGroup;
  clinicianId: any;

  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {

    this.apiService.getClinicianId().subscribe( 
      data => {
        console.log("got clinicianId" , this.clinicianId = data); 
        this.clinicianId = data;
        });

    this.clinicianGroup = new FormGroup({
      clinicianId:new FormControl(),
      fullname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
      age: new FormControl('', [Validators.required, Validators.maxLength(3),AgeValidator]),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])),
      gender: new FormControl(),
      address: new FormControl(),
      availability: new FormControl(),
      specialization: new FormControl(),
      experience: new FormControl(),

  })
}

  createClinicianForm( ){
    this.clinicianForm= this.clinicianGroup.value;
    this.clinicianForm.clinicianId=this.clinicianId;
    console.log("after copying in create ", this.clinicianForm)
   this.apiService.createClinicianForm(this.clinicianForm).subscribe( 
     (data) =>{ console.log("response recieved");
    Swal.fire({
      title: 'Form Submit',
      text: 'The clinician details have successfully submitted',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK',
      cancelButtonText: ''
    })
    this.router.navigate(['/clinician']);
     },
     (error) => { console.log("exception ocurred", this.clinicianForm);
     this.msg="Please enter the details properly";
    })
 }

 get clinicianGroupControl() {
  return this.clinicianGroup.controls;
}

  
}

