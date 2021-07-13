import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide=true;
  floatLabelControl= new FormControl('auto');

  constructor(private _formBuilder:FormBuilder) {

  }

  ngOnInit(): void {

  }
  email= new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  };

  val = new FormControl('',[Validators.required])

  getErrorMessageRequired(){
    if(this.val.hasError('required')){
      return 'You must enter a value';
    }
    return this.val.hasError('val')?'Not a valid input':'';

  }



}
