import { Component, DoCheck, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit,DoCheck {
  
  submitForm!: FormGroup; 

  constructor(private formBuilder:FormBuilder) {
    this.submitForm = formBuilder.group({
      firstName :new FormControl('',[Validators.required,Validators.minLength(6)]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(6)]),
      motherName : new FormControl(null,Validators.required),
      fatherName : new FormControl(null,Validators.required),
      Address : new FormControl(null,Validators.required),
      Gender : new FormControl(null,Validators.required),
      State : new FormControl(null,Validators.required),
      City : new FormControl(null,Validators.required),
      DOB : new FormControl(null,Validators.required),
      Pincode : new FormControl(null,Validators.required),
      Course : new FormControl(null,[Validators.required,]),
      emailAddress : new FormControl('',[Validators.required,Validators.email])
    })
   }
 
  ngOnInit(): void {

  }
  
  ngDoCheck()
  {
    debugger
    console.log(this.submitForm.get('firstName')?.errors)
    console.log(this.submitForm.get('lastName')?.errors)
    
  }
  postData(){
    console.log(this.submitForm);
    
  }
  resetForm(){
    this.submitForm.reset();
  }

  get firstName(){
    return this.submitForm.get('firstName')
  }

  get lastName(){
    return this.submitForm.get('lastName')
  }

  get motherName(){
    return this.submitForm.get('motherName')
  }

  get fatherName(){
    return this.submitForm.get('fatherName')
  }

  get Address(){
    return this.submitForm.get('Address')
  }

  get Gender(){
    return this.submitForm.get('Gender')
  }

  get State(){
    return this.submitForm.get('State')
  }

  get City(){
    return this.submitForm.get('City')
  }

  get DOB(){
    return this.submitForm.get('DOB')
  }

  get Pincode(){
    return this.submitForm.get('Pincode')
  }

  get Course(){
    return this.submitForm.get('Course')
  }

  get emailAddress(){
    return this.submitForm.get('emailAddress')
  }



  
  


}
