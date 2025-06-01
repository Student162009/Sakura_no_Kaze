import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

import { NgIf } from '@angular/common';

@Component({
  selector: 'app-code',
  imports: [FormsModule, NgIf],
  templateUrl: './code.component.html',
  styleUrl: './code.component.css',
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

export class CodeComponent {
  error="";

code = "";
  constructor(private router: Router) {}

  enter() {
   if (this.code == "2031") {
      this.router.navigate(['/Gojo-Secret']);
    } else if(this.code == "thanks") {
      this.router.navigate(['/Secretik']);
    }else if(this.code == "UwU") {
      this.router.navigate(['/UwU']);
    }else {
      this.error = "Неверный код"
      console.log("Неверный код")
    }
  }
}

