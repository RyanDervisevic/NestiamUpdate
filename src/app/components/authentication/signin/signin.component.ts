import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  error = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initSigninForm();
  }

  initSigninForm() { 
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmitSigninForm() {
    //console.log(this.signinForm.value);
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    this.authenticationService.signInUser(email, password).then(
        (data) => {
          //console.log(data);
          this.error= false;
          this.router.navigate(['/movie']); // /movie
        }
      ).catch(
          (error) => {
            console.log(error);
            this.error = true;
          }
        )
  }

  // // prof : connexion avec Google
  // login() {
  //   this.authenticationService.login()
  // }

}
