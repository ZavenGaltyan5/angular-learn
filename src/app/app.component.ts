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

}



