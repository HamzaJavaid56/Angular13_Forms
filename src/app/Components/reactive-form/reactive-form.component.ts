import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Validators } from '@angular/forms';
import { CustomvalidationService } from 'src/app/Services/CustomvalidationService';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService
  ) {

   }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.customValidator.emailValidator()])],  
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required] ],
      address:this.fb.group({
        street:[''],
        city:[''],
        zip:['']
      })
     },
      //----------- Check Password Validator-------
      //  { validator: this.checkPasswords },
      {  validator: this.customValidator.MatchPassword('password', 'confirmPassword'),}
    );
  }

  //--------------------------------------
  // Getting All the Form Controls
  //--------------------------------------
  get registerFormControl() {
    return this.registerForm.controls;
  }

//--------------------------------------------
//      onSubmit Form
//--------------------------------------------

  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm)
  }


 //--------------------------------------------
 //    Compare Password and ConfirmPassword
 //--------------------------------------------- 
//   checkPasswords(group: FormGroup) {
//     const pass = group.controls['password'].value;
//     const confirmPass = group.controls['confirmPassword'].value;
//    if(pass!==confirmPass)
//    {
//     group.controls['confirmPassword'].setErrors({notSame: true})
//    }
// else{
//   group.controls['confirmPassword'].setErrors(null)
// }
// }

  
}