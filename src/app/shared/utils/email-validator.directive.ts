import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[emailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl) : {[key: string]: boolean } | null {
    if (control.value && control.value.length < 8 || !control.value?.includes('@')) {
      return { 'emailInvalid': true };
    }
    return null;
  }
}
