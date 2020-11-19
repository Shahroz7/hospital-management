import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginModel } from '../model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    login : LoginModel[];
    role : string;
   
  constructor(private route: ActivatedRoute, private router: Router,) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });  
  }



  onSubmit() {
    alert("Form validated and submitted successfully!");
  }

  submitLogin(){
    console.log("working");

    this.router.navigate(['/admin']);
  }

}
