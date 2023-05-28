import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})

export class SwitchesPageComponent implements OnInit {


  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public person = {
    gender: 'M',
    wantNotifications: true
  }


  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue]
  })

  // (ngSubmit)
  onSave() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return
    }

    const { termsAndConditions, ...newPerson} = this.myForm.value

    this.person = newPerson
    console.log(this.person)
  }

  isFieldValid(field: string): boolean {
    if (this.myForm.controls[field].touched) {
      return this.myForm.controls[field].invalid
    }
    return false
  }
}
