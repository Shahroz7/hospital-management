import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ClinicianForm } from '../model';
import Swal from 'sweetalert2';

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
    console.log(this.router.snapshot.params.phone)
    console.log("before get data")
    this.apiService.getCurrentClinician(this.router.snapshot.params.phone).subscribe((result)=>{
      
       this.modifyGroup = new FormGroup({
        fullname: new FormControl(result['fullname']),
        age: new FormControl(result['age']),
        phone: new FormControl(result['phone']),
        email: new FormControl(result['email']),
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
    this.apiService.updateClinician(this.router.snapshot.params.phone, this.modifyGroup.value).subscribe(
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
}
