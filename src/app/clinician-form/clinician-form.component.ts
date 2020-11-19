import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ClinicianForm } from '../model';


@Component({
  selector: 'app-clinician-form',
  templateUrl: './clinician-form.component.html',
  styleUrls: ['./clinician-form.component.css']
})
export class ClinicianFormComponent implements OnInit {

  clinicianForm : ClinicianForm  = new ClinicianForm();
  msg='';

  constructor(private apiService: ApiService, private router: Router) {}
  
  ngOnInit() {
  }

  createClinicianForm( ){
   this.apiService.createClinicianForm(this.clinicianForm).subscribe( 
     (data) =>{ 
    this.router.navigate(['/clinician']),
    console.log("response recieved",this.clinicianForm);
     },
     (error) => { console.log("exception ocurred", this.clinicianForm);
     this.msg="Please enter the details properly";
    }
  )

 }


  
}

