import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  flagName: string | undefined
  src: string[]=[]
  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
   let elemnet = document.getElementById('text-country1') as HTMLInputElement ;
   this.flagName = elemnet.value
   this.src.push(this.flagName)
    console.log(this.src)
  }


  remove(){
    this.src = [];
  }

  removeSelected(i: number){
    this.src.splice(i, 1);
  }


  // removeSelectElement(){
  //   this.src.filter(function(value, index, arr){
  //   })
  // }



  filterFunction(){
    const names = ['armenia','usa','russia'];
    const textFilter = document.getElementById('text-filter') as HTMLInputElement | null;
    const arrayName = this.src;
    if (textFilter?.value === 'armenia' ){
      this.src = ['armenia']
    }
    else if (textFilter?.value === 'usa'){
      this.src = ['usa']
    }
    else if (textFilter?.value === 'russia'){
      this.src = ['russia']
    }
  }







}





