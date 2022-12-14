import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isadmin: 1
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('this.registerForm', this.registerForm.value);
    this.submitted = true;
    // if (this.registerForm.invalid) {
    //   return;
    // }
    this.authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.log('err: ', err);
      },
    });
  }
}
