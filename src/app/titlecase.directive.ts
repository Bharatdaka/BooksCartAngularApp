import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[titlecase]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TitlecaseDirective,
    multi: true
  }]
})
export class TitlecaseDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    if(control.value) {
      let words = control.value.split(' ');
      let invalidWord = words.find(w => !this.isUpperCase(w.charAt(0)) || !this.isLowerCase(w.slice(1)));
      if(invalidWord)
        return {titlecase: true};
      else
        return null;
    }
    return null;
  }

  isUpperCase(str: string) {
    return str == str.toUpperCase()
  }

  isLowerCase(str: string) {
    return str == str.toLowerCase()
  }
}
