import { Component, OnInit }   from '@angular/core';

import { Hero }                from './hero';
import { HeroService }         from './hero.service';

@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  isCheckedMale =  true;
  isCheckedFemale =  false;
  isCheckedOther =  false;
  option = 0;
  hour = "";
 data = [
      {id: 0, name: ""},
      {id: 1, name: "シャットダウン"},
      {id: 2, name: "再起動"},
      {id: 3, name: "FWDL"}
  ];

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
  clickMale(){
    this.isCheckedMale = true;
    this.isCheckedFemale = false;
    this.isCheckedOther = false;
  }
  clickFemale(){
    this.isCheckedFemale = true;
    this.isCheckedMale = false;
    this.isCheckedOther = false;
  }
  clickOther(){
    this.isCheckedOther = true;
    this.isCheckedFemale = false;
    this.isCheckedMale = false;
  }
   selected(event: any){
    console.log(event);
   this.option = Number(event.target.value);
   
  }
  onKey(event) {
    this.hour = event.target.value;
    console.log(event.target.value)
    }
  testClick(){
    if(this.option !=0 && this.hour.trim().length!=0)
    {
      console.log(this.option +": "+ this.hour);
    }
  }
  getInput(value){
    console.log(value);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/