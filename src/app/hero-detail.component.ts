import { Component, Input } from '@angular/core';
import { EventEmitter,Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent {
  @Input() hero: Hero;
  @Output() voteSize = new EventEmitter();
  input ="";
  onKey(event) {
    this.input = event.target.value;
    this.voteSize.emit(this.input);
    }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/