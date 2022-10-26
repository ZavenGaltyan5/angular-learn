import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registerButton(){
    const FirstN = document.getElementById('f-name') as HTMLInputElement | null;
    const FNameLength = FirstN?.value
    var fname
    // @ts-ignore
    if (FNameLength?.length > 4){
      fname='';
    }else {
      fname='false this text < 5';
    }
    // @ts-ignore
    document.getElementById('p-f-name').innerText=fname;

    const LastN = document.getElementById('l-name') as HTMLInputElement | null;
    const LNameLength = LastN?.value
    var lname
    // @ts-ignore
    if (LNameLength?.length > 8){
      lname='';
    }else {
      lname='false this text < 8';
    }
    // @ts-ignore
    document.getElementById('p-l-name').innerText=lname;

    const Email = document.getElementById('email') as HTMLInputElement | null;
    const EmailLength = Email?.value
    var email
    // @ts-ignore
    if (EmailLength?.length > 8){
      email='';
    }else {
      email='false this text < 8';
    }
    // @ts-ignore
    document.getElementById('p-email').innerText=email;

    const uName = document.getElementById('username') as HTMLInputElement | null;
    const uNameLength = uName?.value;
    var uname
    // @ts-ignore
    if (uNameLength?.length > 8){
      uname='';
    }else {
      uname='false this text < 8';
    }
    // @ts-ignore
    document.getElementById('p-user').innerText=uname;

    const Age = document.getElementById('age') as HTMLInputElement | null;
    const ageLength = Age?.value;
    var age
    // @ts-ignore
    if (ageLength > 18){
      age='';
    }else {
      age='you are very young';
    }
    // @ts-ignore
    document.getElementById('p-age').innerText=age;


    const Phone = document.getElementById('phone') as HTMLInputElement | null;
    const phoneLength = Phone?.value;
    var phone
    // @ts-ignore
    if (phoneLength?.length >= 10){
      phone='';
    }else {
      phone='this phone not found';
    }
    // @ts-ignore
    document.getElementById('p-phone').innerText=phone;
  }




}
