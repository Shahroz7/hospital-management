import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AgeValidator } from '../age-validator';


@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})


export class ModifyPatientComponent implements OnInit {

    patientForms : PatientForm;
    modifyGroup: FormGroup;
    msg='';

  constructor(private apiService: ApiService, private router: ActivatedRoute, private route: Router,private formBuilder: FormBuilder) { }

  ngOnInit(){
    console.log(this.router.snapshot.params.patientId)
    console.log("before get data")
    this.apiService.getCurrentPatient(this.router.snapshot.params.patientId).subscribe((result)=>{
      
       this.modifyGroup = new FormGroup({
        patientId: new FormControl(result['patientId']),
        fullname: new FormControl(result['fullname'],[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        age: new FormControl(result['age'],[Validators.required, Validators.maxLength(3),AgeValidator]),
        phone: new FormControl(result['phone'],Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
        email: new FormControl(result['email'],Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])),
        gender: new FormControl(result['gender']),
        address: new FormControl(result['address']),
        appointment: new FormControl(result['appointment']),
     })
     console.log(this.modifyGroup.value,"this is value of form")
    })    
  }
   
  get modifyGroupControl() {
    return this.modifyGroup.controls;
  }

  updatePatientForm(){
    this.apiService.updatePatient(this.router.snapshot.params.patientId, this.modifyGroup.value).subscribe(
      (result)=>{
    console.log("the data updated", result),
    Swal.fire({
      title: 'Update Form',
      text: 'The patient details have been successfully updated',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK',
      cancelButtonText: ''
    })
    this.route.navigate(['/patient']);
  },
  (error) => { this.msg="Please enter the details properly";
 });
 } 

}
