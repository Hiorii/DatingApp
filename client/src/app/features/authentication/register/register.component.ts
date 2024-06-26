import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {AccountService} from "../../../shared/services/account.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;
  maxDate: Date;
  validationErrors: string[] = [];

  constructor(private accountService: AccountService, private fb: FormBuilder, private router: Router, private toast: ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() -18);
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      // gender: ['male'],
      username: ['', Validators.required],
      // knownAs: ['', Validators.required],
      // dateOfBirth: ['', Validators.required],
      // city: ['', Validators.required],
      // country: ['', Validators.required],
      password: ['', [Validators.required,
        Validators.minLength(4), Validators.maxLength(8)]],
      // confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    })
  }

  // matchValues(matchTo: string): ValidatorFn {
  //   return (control: AbstractControl) => {
  //     return control?.value === control?.parent?.controls[matchTo].value
  //       ? null : {isMatching: true}
  //   }
  // }

  register() {
    this.accountService.register(this.registerForm.value).subscribe({
      next: _ => {
        this.cancel()
      },
      error: error => {
        this.toast.error(error.error);
      }
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
    this.router.navigateByUrl('/members');
  }
}
