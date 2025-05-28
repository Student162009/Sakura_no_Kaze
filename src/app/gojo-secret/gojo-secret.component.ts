import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-gojo-secret',
  imports: [],
  templateUrl: './gojo-secret.component.html',
  styleUrl: './gojo-secret.component.css',
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

export class GojoSecretComponent {

  audio = new Audio();
  src = "/music/Gojo.mp3";
Music(){
  this.audio.src = this.src;
  this.audio.play();
}

}
