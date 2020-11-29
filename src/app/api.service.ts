import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { ClinicianForm, PatientForm } from './model';


const httpOptionsText = {
  headers: new HttpHeaders({
    Accept: "text/plain"
  }),
  responseType: "text" as "json"
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  
  constructor(private http: HttpClient) { }

  public createClinicianForm(clinicianForm: ClinicianForm)  : Observable<any>{
    console.log("clinician service is working", clinicianForm );
    return this.http.post("http://localhost:8082/api/clinician-form",clinicianForm, httpOptionsText)
  }

  public createPatientForm(patientForm: PatientForm):  Observable<any>{
    console.log("patient service is working");
    return this.http.post("http://localhost:8082/api/patient-form",patientForm, httpOptionsText)
  }

  public getPatientDetails() {
    console.log("should get the details of the users");
    return this.http.get<any[]>('http://localhost:8082/api/patient-form/all');
  }

  public deletePatient(patientForms) : Observable<any> {
    console.log("should get the user deleted");
    console.log(patientForms);
    return this.http.delete<any[]>("http://localhost:8082/api/patient-delete/"+ patientForms.patientId,httpOptionsText);
  }

  public updatePatient(patientId, data) {
    console.log(patientId,"patientId is")
    console.log(data, "data is")
    return this.http.put<any>("http://localhost:8082/api/patient-update/"+ patientId, data);
  }

  public getCurrentPatient(patientId){
    console.log("its connectiong in patient")
    console.log(patientId)
     return this.http.get<any>("http://localhost:8082/api/patient-get/" + patientId);
  }

  public getPatientByName(name){
    console.log("its searching")
     return this.http.get<any>("http://localhost:8082/api/patient-search/" + name);
  }

  public getClinicianDetails(){
    console.log("hits");
    return this.http.get<any[]>('http://localhost:8082/api/clinician/all');
  }

  public deleteClinician(clinicianForms) : Observable<any> {
    console.log("should get the user deleted");
    console.log(clinicianForms);
    return this.http.delete<any[]>("http://localhost:8082/api/clinician-delete/"+ clinicianForms.clinicianId, httpOptionsText);
  }

  public updateClinician(clinicianId, data) {
    console.log(clinicianId,"clinicianId is")
    console.log(data, "data is")
    return this.http.put<any>("http://localhost:8082/api/clinician-update/"+ clinicianId, data);
  }

  public getCurrentClinician(clinicianId){
    console.log("its connectiong in clinician")
    console.log(clinicianId)
     return this.http.get<any>("http://localhost:8082/api/clinician-get/" + clinicianId);
  }

  public getPatientId(){
    console.log("get getting patientid");
    return this.http.get<any>("http://localhost:8082/api/patient-id/");
  }

  public getClinicianId(){
    console.log("get getting clinicianid");
    return this.http.get<any>("http://localhost:8082/api/clinician-id/");
  }

}