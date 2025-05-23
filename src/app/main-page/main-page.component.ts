import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate} from '@angular/animations';
import { FrazaPipe } from '../pipes/fraza.pipe';

@Component({
  selector: 'app-main-page',
  imports: [FrazaPipe, RouterLink, RouterLinkActive],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
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
export class MainPageComponent {
  fraza = [
    "Добро пожаловать в мир, где легенды сплетаются с мечтами под шелестящими лепестками сакуры.",
    "Пусть ветер сакуры унесёт вас в волшебное путешествие, наполненное фантазией, храбростью и вдохновением.",
    "Здесь, в загадочном царстве восточной мудрости, оживают истории самураев и рождаются новые великие мечты.",
    "Погрузитесь в атмосферу гармонии, силы духа и искусства, где каждый шаг ведёт к раскрытию истинного предназначения.",
    "Каждый взмах меча — это танец света и тени, приближающий исполнение самых заветных желаний.",
    "Откройте для себя мир, где музыка, живопись и поэзия сливаются в единую мелодию вдохновения под цветущей сакурой."
] 
}
