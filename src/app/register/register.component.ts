import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users = [];
  user = {};

  profileForm = new FormGroup({

    firstName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),

    lastName: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),

    age: new FormControl('',[
      Validators.required,
      Validators.minLength(1),
    ]),

    phone: new FormControl('',[
      Validators.required,
      // Validators.pattern('^ [ + ] [0 - 9] $')
    ]),

    email: new FormControl('',[
      Validators.required,
      Validators.email,
    ]),

    userName: new FormControl('',[
      Validators.required,
      // Validators.pattern('^[a-z0-9_-]{3,15}$')
    ]),

    pass: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),

    confPass: new FormControl('',[
      Validators.required,
      Validators.minLength(5)
    ]),

  });

  constructor() {
  }

  ngOnInit(): void {
  }





  ShowPass() {
    // @ts-ignore
    const pas1 = document.getElementById('password');
    // @ts-ignore
    if (pas1.type == 'password'){
      // @ts-ignore
      pas1.type = 'text';
    }else {
      // @ts-ignore
      pas1.type = 'password'
    }
  }
  ShowPass2() {
    // @ts-ignore
    const pas2 = document.getElementById('confirm-pass');
    // @ts-ignore
    if (pas2.type == 'password'){
      // @ts-ignore
      pas2.type = 'text';
    }else {
      // @ts-ignore
      pas2.type = 'password'
    }
  }
  PassAndConfPass(){
    const pas1 = document.getElementById('password') as HTMLInputElement | null;
    const pas2 = document.getElementById('confirm-pass') as HTMLInputElement | null;

    if (pas1?.value != pas2?.value){
      alert('passwords are not equal')
    }

    this.user = {
      firstName:this.profileForm.get('firstName')?.value,
      lastName:this.profileForm.get('lastName')?.value,
      userName:this.profileForm.get('userName')?.value,
      email:this.profileForm.get('email')?.value,
      phone:this.profileForm.get('phone')?.value,
      age:this.profileForm.get('age')?.value,
      password:this.profileForm.get('pass')?.value,
    }

    // @ts-ignore
    this.users.push(this.user)

    localStorage.setItem('user',JSON.stringify(this.users));
  }





}



