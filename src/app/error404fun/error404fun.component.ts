import { Component } from '@angular/core';
import { RouterLink} from '@angular/router';
import { trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'app-error404fun',
  imports: [RouterLink],
  templateUrl: './error404fun.component.html',
  styleUrl: './error404fun.component.css',
  animations: [
    trigger('slideInOut', [
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
export class Error404funComponent {

}
