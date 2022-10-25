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
    // @ts-ignore
    if (FNameLength?.length >= 4){
      console.log(FNameLength)
    }else {
      console.log('This Name is correct')
    }
  }

}
