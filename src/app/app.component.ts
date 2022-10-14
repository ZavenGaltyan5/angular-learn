import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-learn';
  message = 'Hello World';
  message1 = 'table';

  fontColor = 'red';
  sayHelloId = 1;
  canClick = false;

  sayMessage() {
    alert('table-top');
  }

  canEdit = false;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }


  onEditClick1(canEdit1: number = 0) {
    if (canEdit1 === 0) {
      this.message1 = 'table';
    } else if (canEdit1 === 1) {
      this.message1 = 'սեղան';
    } else if (canEdit1 === 2) {
      this.message1 = 'стол';
    }
    // console.log(this.canEdit1)
  }

  images = ['../assets/images/armenia.jpg', '../assets/images/usa.jpg', '../assets/images/armenia.jpg', '../assets/images/usa.jpg']


  onInputValue(){
    const input = document.getElementById('flag') as HTMLInputElement | null;
    const addimg = document.getElementById('img1');
    if (input?.value === 'Armenia' && addimg != null){
      addimg.classList.add('img2');
    }
  }

  onInputValue1(){
    const input1 = document.getElementById('flag2') as HTMLInputElement | null;
    const addimg1 = document.getElementById('img3');
    if (input1?.value === 'Usa' && addimg1 != null) {
      addimg1.classList.add('img3');
    }
  }

  onInputValue2(){
    const input2 = document.getElementById('flag3') as HTMLInputElement | null;
    const addimg2 = document.getElementById('img4');
    if (input2?.value === 'Russia' && addimg2 != null) {
      addimg2.classList.add('img4');
    }
  }

  onClickRemove(){
    const pic1 = document.getElementById('img1');
    const pic2 = document.getElementById('img3');
    const pic3 = document.getElementById('img4');

    if (pic1 != null){
      pic1.classList.remove('img2')
    }

    if (pic2 != null){
      pic2.classList.remove('img3')
    }

    if (pic3 != null){
      pic3.classList.remove('img4')
    }

  }


}

// let flags = ['armenia','usa','russia'];


const input = document.getElementById('flag') as HTMLInputElement | null;

const value = input?.value;
console.log(value) // 👉️ "Initial value"

if (input != null) {
  console.log(input.value); // 👉️ "Initial value"
}

input?.addEventListener('input', function (event) {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});



