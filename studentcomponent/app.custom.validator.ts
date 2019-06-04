import { AbstractControl } from '@angular/forms';

export class DomainValidator {
    // here any type is used
    // because if the data is valid
    // then method returns null 
    // else it will return JSON object as {invalid:true}

    static ValidateLength(ctrl: AbstractControl): any {
        let value = ctrl.value;
        if(value.toString().length <= 10) {
            return null;
        }else {
            return {invalid:true};
        }
    }
}