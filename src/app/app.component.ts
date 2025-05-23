import { Component } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
} from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              transform: 'scale(0.9)',
            }),
            animate(
              '500ms ease-out',
              style({
                opacity: 1,
                transform: 'scale(1)',
              })
            ),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            animate(
              '400ms ease-in',
              style({
                opacity: 0,
                transform: 'scale(1.1)',
              })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(
          '#menu li',
          [
            style({ opacity: 0, transform: 'translateY(-10px)' }),
            stagger(100, [
              animate(
                '300ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Sakura_no_Kaze';

  constructor(public router: Router) {}

  out() {
    localStorage.setItem('isAuthenticated', 'false');
  }
}
