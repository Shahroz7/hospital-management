import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { ClinicianForm, PatientForm } from '../model';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {


   patientForms: PatientForm [];
  clinicianForms: ClinicianForm [];
  clinicians: Array<any> =[];

  showModal: boolean;
   
  constructor(private router: ActivatedRoute, private apiService: ApiService, private modalService: NgbModal) { }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  
  ngOnInit() {
    this.paginator = this.paginator;
    this.apiService.getPatientDetails().subscribe( 
      data => {
        console.log("got data for Patient" , this.patientForms = data); 
        this.patientForms = data;
        });

    this.apiService.getClinicianDetails().subscribe( 
      data => {
        console.log("got data for Clinician" , this.clinicianForms = data); 
        this.clinicianForms = data;
        });
  }

  showClinicianDetails()
  {
    this.showModal = true; // Show-Hide Modal Check
    this.apiService.getCurrentClinician(this.router.snapshot.params.phone).subscribe((result)=>{

      console.log(result,"this is result")
      console.log("this is clinicial", this.clinicians.push( result))
  })
}

  hide()
  {
    this.showModal = false;
  }


  getPatientDetailsByName(name){

  }

  getClinicianDetailsByName(){
    
  }

  // openScrollableContent(this.clinicianForms) {
  //   this.modalService.open(this.clinicianForms, { scrollable: true });
  // } 

 
}


