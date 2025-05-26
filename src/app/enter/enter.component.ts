import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-enter',
  imports: [FormsModule, NgIf],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css',
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
export class EnterComponent {

  login1 = localStorage.getItem('login');
  parol1 = localStorage.getItem('parol');

  login = '';
  controlpassword = '';
  parol = '';
  email = '';
  error = '';

  regmes = '';

  constructor(private router: Router) {}

  reg() {
    if(this.login.length>0  || this.parol.length>0 ){
      if (this.controlpassword == this.parol) {
      localStorage.setItem('login', this.login);
      localStorage.setItem('parol', this.parol);
      this.error = '';
    } else {
      this.error = 'Пароли не совпадают';
    }
    this.regmes = 'Успешно зарегестрированно';
  }else{
    this.error = 'Проверьте данные';
  }
    
  }
  enter() {
   if (this.login == this.login1 &&this.login.length>0 && this.parol == this.parol1 &&this.parol.length>0) {
      localStorage.setItem('isAuthenticated', 'true');

      this.router.navigate(['/Main']);
    } else {
      this.error = 'Проверьте данные';
    }
  }
}
