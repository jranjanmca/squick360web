import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { UserModel } from '../_models/user.model';
import { first } from 'rxjs/operators';
import { ToolsService } from 'src/app/resources/tools.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hasError: boolean;
  isLoading$: Observable<boolean>;

  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private http: HttpClient, public tools:ToolsService) {
    this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.initForm();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  initForm() {
    this.registrationForm = this.fb.group({
        emp:this.fb.group({
          name:[null, [Validators.required]], 
          officialEmailId: [null, [Validators.required]], 
          pwd: [null, [Validators.required, Validators.minLength(3),Validators.maxLength(100)]],
          isRoot: [false, [Validators.required]],
        }),  
        org:this.fb.group({
          orgTitle:  [null, [Validators.required]], 
          website: [null, [Validators.required]], 
        }) ,    
      }
    );
  }

  submit() {
   console.log("frmGetValue : "+JSON.stringify(this.registrationForm.getRawValue()));
   console.log(this.tools.getServiceCtx()+'upd/regisration');
   this.http.post<any>(this.tools.getServiceCtx()+'upd/registration', this.registrationForm.getRawValue()).subscribe({
        next: data => {
            //this.postId = data.id;
        },
        error: error => {
            //this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }


}
