import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgFor } from '@angular/common';
import { FrazaPipe } from '../pipes/fraza.pipe';
import { namesarr, categorys } from '../wallpapersmassiv';
@Component({
  selector: 'app-wallpapers-page',
  imports: [FrazaPipe, NgFor],
  templateUrl: './wallpapers-page.component.html',
  styleUrl: './wallpapers-page.component.css',
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
export class WallpapersPageComponent {
  fraza = [
    "Оживи свой экран красотой ветра сакуры и магией аниме.",
    "Пусть каждый рабочий стол наполнится нежностью лепестков и духом приключений.",
    "Обои, которые переносят тебя в мир, где мечты и реальность сливаются в одно.",
    "Яркие краски аниме и спокойствие сакуры - идеальное сочетание для твоего экрана.",
    "Погрузись в атмосферу востока с каждым взглядом на свой рабочий стол.",
    "Собери коллекцию обоев, чтобы вдохновляться каждым днём под шелест лепестков сакуры."
  ];
  
  smart = false;

  IfSort(){
    this.smart = !this.smart;
  }

 wallpapers: any[] = [];
 filteredWallpapers: any[] = [];
 activeCategory = '';

  constructor() {
    for(let i = 0; i < namesarr.length; i++) {
      this.wallpapers.push({
        name: namesarr[i],
        category: categorys[i],
        image: `/wallpapers/wallpaper${i}.jpg`
      });
    }
    this.filteredWallpapers = [...this. wallpapers];
  }

  filterCategory(Category:string) {
    this.activeCategory = `${Category}`;
    this.filteredWallpapers = this.wallpapers.filter(item => item.category == Category);
  
  }
  
  showAll() {
      this.activeCategory = '';
      this.filteredWallpapers = [...this.wallpapers];
    }

}
