import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


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
    console.log(this.router.snapshot.params.phone)
    console.log("before get data")
    this.apiService.getCurrentPatient(this.router.snapshot.params.phone).subscribe((result)=>{
      
       this.modifyGroup = new FormGroup({
        fullname: new FormControl(result['fullname']),
        age: new FormControl(result['age']),
        phone: new FormControl(result['phone']),
        email: new FormControl(result['email']),
        gender: new FormControl(result['gender']),
        address: new FormControl(result['address']),
        appointment: new FormControl(result['appointment']),
     })
     console.log(this.modifyGroup.value,"this is value of form")
    })    
  }
   
  updatePatientForm(){
    this.apiService.updatePatient(this.router.snapshot.params.phone, this.modifyGroup.value).subscribe(
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
