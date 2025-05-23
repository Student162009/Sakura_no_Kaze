import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RatingPipe } from '../pipes/rating.pipe';
import { FrazaPipe } from '../pipes/fraza.pipe';
import { trigger, transition, style, animate } from '@angular/animations';
import { namesarr, years, descripts, ages, ratings } from '../animemassiv';
@Component({
  selector: 'app-anime-page',
  
  imports: [NgFor, RatingPipe, FrazaPipe, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './anime-page.component.html',
  styleUrl: './anime-page.component.css',
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
export class AnimePageComponent {

smart = false;

IfSort(){
  this.smart = !this.smart;
}

  search = '';
  searchHistory: string[] = [];
  searchVisible = false;
  activeYear = '';
  activeAge = '';
  activeRating = '';

  fraza= [
    "Погрузись в мир, где мечи говорят громче слов, а сердца бьются в ритме сакуры.",
    "Каждая серия - как взмах клинка: стремительная, яркая и полная смысла.",
    "Здесь оживают герои, а мечты становятся реальностью под ветром сакуры.",
    "Пусть дух самурая ведёт тебя через бескрайние просторы аниме-приключений.",
    "В каждом кадре - история, достойная быть рассказанной под шелест лепестков сакуры.",
    "Открой дверь в мир, где меч и мечта сливаются в одно целое."
  ];
  
  Focus() {
    this.searchVisible = true;
  }

  Blur() {
    setTimeout(() => {
      this.searchVisible = false;
    }, 200);
  }

  HistoryClick(query: string) {
    this.search = query;
    this.searchAnime();
    this.Blur();
  }

    loadHistory() {
      const history = localStorage.getItem("Animehistory");
      if (history) {
        this.searchHistory = JSON.parse(history);
      }
    }
  
    saveHistory() {
      localStorage.setItem("Animehistory", JSON.stringify(this.searchHistory));
    }
  
    addHistory(query :string){  
    this.searchHistory.push(query);
    this.saveHistory();
    }



    
    clearHistory() {
      this.searchHistory = [];
      localStorage.removeItem("Animehistory");
    }
  

  anime: any[] = [];
  filteredAnime: any[] = [];
  constructor() {

    for (let i = 0; i < namesarr.length; i++) {
      this.anime.push({
        name: namesarr[i],
        year:years[i],
        descript: descripts[i],
        age:ages[i],
        id: i,
        image: `/anime/anime${i}.jpg`,
        link: `/Anime${i}`,
        rating: ratings[i]
      });
    }
    this.filteredAnime = [...this.anime];
    this.loadHistory();
  }

  searchAnime() {
    const sch = this.search.trim().toLowerCase();
    if (!sch) {
      this.showAll();
      return;
    }

    this.addHistory(sch);

    this.filteredAnime = this.anime.filter(item =>
      item.name.toLowerCase().includes(sch)
    );
    this.activeYear = '';
    this.activeAge = '';
    this.activeRating = '';
  }
  


  filterYear(min: number, max: number) {
    this.activeYear = `${min}-${max}`;
    this.filteredAnime = this.anime.filter(item => item.year >= min && item.year <= max);
    this.activeAge = '';
    this.activeRating = '';
  }

  filterAge(age: number) {
    this.activeAge = age.toString();
    this.filteredAnime = this.anime.filter(item => item.age ==age);
    this.activeYear = '';
    this.activeRating = '';
  }

  filterRating(min:number, rating: number) {
    this.activeRating = `${min}-${rating}`;
    this.filteredAnime = this.anime.filter(item => item.rating>= min && item.rating<=rating);
    this.activeYear = '';
    this.activeAge = '';
  }

  showAll() {
  this.activeYear = '';
  this.activeAge = '';
  this.activeRating = '';
    this.filteredAnime = [...this.anime];
  }

}
