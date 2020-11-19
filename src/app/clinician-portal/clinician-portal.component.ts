import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ClinicianForm } from '../model';


@Component({
  selector: 'app-clinician-portal',
  templateUrl: './clinician-portal.component.html',
  styleUrls: ['./clinician-portal.component.css']
})
export class ClinicianPortalComponent implements OnInit {

  clinicianForms : ClinicianForm [];
   
  popoverTitle = 'Delete Confirmation';
  popoverMessage = 'Do you really want to delete?';
  confirmClicked = false;
  cancelClicked = false;

 
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getClinicianDetails().subscribe( 
      data => {
        console.log("got data" , this.clinicianForms = data); 
        this.clinicianForms = data;
        });
  }

  deleteClinician(clinicianForms: ClinicianForm): void {
    this.apiService.deleteClinician(clinicianForms).subscribe( 
      data => {
        this.clinicianForms = this.clinicianForms.filter(u => u !== clinicianForms);
        this.router.navigate(['/clinician'])
      })  
  };



}
