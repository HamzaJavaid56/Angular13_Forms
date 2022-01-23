import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {
  formGroup!: FormGroup;

  //----------------------------------------------------------------------------
  // Passowrd patteren (Capital Letter+Small Letter+ Number+Special Symbol)
  //----------------------------------------------------------------------------
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null as any : { invalidPassword: true };
    };
  }

  //----------------------------------
  // Email Validation  
  //----------------------------------
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null as any;
      }
      const regex = new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$');
      const valid = regex.test(control.value);
      return valid ? null as any : { invalidEmail: true };
    };
  }

  //-----------------------------------------------------
  //  Compare the Password and ConfirmPassword if same  
  //-----------------------------------------------------
  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null as any;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']) {
        return null as any;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }
//-------------------------------------------------------
// Valaditing the user name is already taken or not
//-------------------------------------------------------
  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {
    const UserList = ['hamza','HAMZA','ADMIN', 'admin', 'user', 'superuser'];
    return (UserList.indexOf(userName) > -1);
  }
}

