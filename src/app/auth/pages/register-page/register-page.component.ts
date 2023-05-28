import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { emailValidatorService } from 'src/app/shared/validators/email-validator.service';
import * as customValidators from 'src/app/shared/validators/validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.vService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.vService.cantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required,]],
  }, {
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  })

  constructor(
    private fb: FormBuilder,
    private vService: ValidatorsService,
    private emailValidator: emailValidatorService,
    private validatorService: ValidatorsService

  ) { }

  isValidField(field: string) {
    return this.vService.isValidField(this.myForm, field)
  }

  onSubmit() {
    this.myForm.markAllAsTouched()
  }

}
