import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
import { rand } from '../rand';

@Component({
  selector: 'app-animesecret',
  imports: [],
  templateUrl: './animesecret.component.html',
  styleUrl: './animesecret.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '1s cubic-bezier(0.4, 0, 0.2, 1)',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '0.5s ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})

export class AnimesecretComponent {
id = 0;
  audio = new Audio();
 src = '';
Music(){
  this.id = rand(1,10);
  this.src = `/music-secret/Music${this.id}.mp3`;
  this.audio.src = this.src;
  this.audio.play();
}
}
