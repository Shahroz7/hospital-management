import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ClinicianForm } from '../model';
import Swal from 'sweetalert2';
import { AgeValidator } from '../age-validator';

@Component({
  selector: 'app-modify-clinician',
  templateUrl: './modify-clinician.component.html',
  styleUrls: ['./modify-clinician.component.css']
})
export class ModifyClinicianComponent implements OnInit {

  clinicianForms : ClinicianForm;
    modifyGroup: FormGroup;
    msg ='';

  constructor(private apiService: ApiService, private router: ActivatedRoute,private route: Router,private formBuilder: FormBuilder) { }

  ngOnInit(){
    console.log(this.router.snapshot.params.clinicianId)
    console.log("before get data")
    this.apiService.getCurrentClinician(this.router.snapshot.params.clinicianId).subscribe((result)=>{
      
       this.modifyGroup = new FormGroup({
         clinicianId: new FormControl(result['clinicianId']),
        fullname: new FormControl(result['fullname'],[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
        age: new FormControl(result['age'],[Validators.required, Validators.maxLength(3),AgeValidator]),
        phone: new FormControl(result['phone'],Validators.compose([Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])),
        email: new FormControl(result['email'],Validators.compose([Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)])),
        gender: new FormControl(result['gender']),
        address: new FormControl(result['address']),
        availability: new FormControl(result['availability']),
        specialization: new FormControl(result['specialization']),
        experience: new FormControl(result['experience']),

     })
     console.log(this.modifyGroup.value,"this is value of form")
    })    
  }

  updateClinicianForm(){
    this.apiService.updateClinician(this.router.snapshot.params.clinicianId, this.modifyGroup.value).subscribe(
      (result)=>{
    console.log("the data updated", result),
    Swal.fire({
      title: 'Update Form',
      text: 'The clinician details have been successfully updated',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'OK',
      cancelButtonText: ''
    })
    this.route.navigate(['/clinician']);
      },
  (error) => { this.msg="Please enter the details properly";
   });
    }

    get modifyGroupControl() {
      return this.modifyGroup.controls;
    }
}
