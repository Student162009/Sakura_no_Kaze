import { Component } from '@angular/core';
import { trigger, transition, style, animate} from '@angular/animations';
import { NgFor } from '@angular/common';
import { nicknamemass, frazamass, animemass, avatarmass } from '../secretmass';
@Component({
  selector: 'app-secret-list',
  imports: [NgFor],
  templateUrl: './secret-list.component.html',
  styleUrl: './secret-list.component.css',
  animations: [
    trigger('PageAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', 
          style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', 
          style({ opacity: 0, transform: 'scale(1.2)' }))
      ])
    ]),trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('1s cubic-bezier(0.4, 0, 0.2, 1)', 
          style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [ 
        animate('0.5s ease-in', 
          style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class SecretListComponent {

secret: any[] = [];

constructor(){
for (let i = 0; i < nicknamemass.length; i++) {
  this.secret.push({
    nickname: nicknamemass[i],
    fraza: frazamass[i],
    anime: animemass[i],
    avatar: avatarmass[i]

  });
}  
}


}
