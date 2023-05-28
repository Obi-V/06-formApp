import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class emailValidatorService implements AsyncValidator {

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {

      console.log({ email })

      if (email === 'fernando@google.com') {
        subscriber.next({ emailTaken: true })
      } else {
        subscriber.next(null)
      }
      subscriber.complete() //hace return
    }).pipe(
      delay(3000)
    )
    return httpCallObservable
  }

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )
  // }

}
