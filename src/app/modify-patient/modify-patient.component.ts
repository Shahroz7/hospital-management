import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { PatientForm } from '../model';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-modify-patient',
  templateUrl: './modify-patient.component.html',
  styleUrls: ['./modify-patient.component.css']
})


export class ModifyPatientComponent implements OnInit {

    patientForms : PatientForm;
    modifyGroup: FormGroup;

  constructor(private apiService: ApiService, private router: ActivatedRoute,private formBuilder: FormBuilder) { }

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
      (result)=>
    console.log("the data updated", result))}
  


}
