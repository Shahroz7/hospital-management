import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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


  patientForms: PatientForm[];
  clinicianForms: ClinicianForm[];
  page1: number = 1;
  page2: number = 1;

  clinicians: Array<any> = [];
  showModal: boolean;

  constructor(private router: ActivatedRoute, private apiService: ApiService, private modalService: NgbModal) { }


  ngOnInit() {
    this.apiService.getPatientDetails().subscribe(
      data => {
        console.log("got data for Patient", this.patientForms = data);
        this.patientForms = data;
      });

    this.apiService.getClinicianDetails().subscribe(
      data => {
        console.log("got data for Clinician", this.clinicianForms = data);
        this.clinicianForms = data;
      });
  }

}


