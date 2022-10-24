import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  flagName: string | undefined
  src: string[]=['armenia','usa','usa','russia']
  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
   let elemnet = document.getElementById('text-country1') as HTMLInputElement ;
   this.flagName = elemnet.value
   this.src.push(this.flagName)
  }


  remove(){
    this.src = [];
  }

  removeSelected(i: number){
    this.src.splice(i, 1);
  }


  filterFunction() {
    // const names = ['armenia','usa','russia'];
    const textFilter = document.getElementById('text-filter') as HTMLInputElement | null;
    // const textCountry = document.getElementById('text-country1') as HTMLInputElement | null;
    // const arrayName = this.src;
    // if (textFilter?.value === 'armenia' ){
    //   this.src = ['armenia']
    // }
    // else if (textFilter?.value === 'usa'){
    //   this.src = ['usa']
    // }
    // else if (textFilter?.value === 'russia'){
    //   this.src = ['russia']
    // }

    const arrayFilter: string[] = [];
    this.src = this.src.filter(words => words === textFilter?.value);
    //   for (let i = 0;i <= this.src.length;i++){
    //     if (this.src[i] === textFilter?.value){
    //       arrayFilter.push(textFilter?.value);
    //     }
    //   }
    //   this.src = arrayFilter;
    //
  }







}





