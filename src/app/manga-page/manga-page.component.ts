import { Component } from '@angular/core';
import { NgFor} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, transition, style, animate} from '@angular/animations';
import { RatingPipe } from '../pipes/rating.pipe';
import { FrazaPipe } from '../pipes/fraza.pipe';
import { namesarr, years, descripts, ages, ratings, linkis } from '../mangamassiv';

@Component({
  selector: 'app-manga-page',
  imports: [NgFor, RatingPipe, FrazaPipe, FormsModule],
  templateUrl: './manga-page.component.html',
  styleUrl: './manga-page.component.css',
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
export class MangaPageComponent {
  fraza = [
    "Погрузись в мир, где каждый кадр рассказывает свою историю меча и чести.",
    "Манга - это искусство, где слова и рисунки сливаются в единое дыхание приключений.",
    "Открой страницы, наполненные духом самураев и магией сакуры.",
    "Здесь оживают герои, а каждая глава - как новый взмах клинка.",
    "Пусть каждая история манги вдохновляет тебя на великие свершения.",
    "Погружайся в мир, где мечты рисуются кистью художника и оживают на страницах."
  ];
  
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

  manga: any[] = [];
  filteredManga: any[] = [];

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
    this.searchManga();
    this.Blur();
  }

    loadHistory() {
      const history = localStorage.getItem("Mangahistory");
      if (history) {
        this.searchHistory = JSON.parse(history);
      }
    }
  
    saveHistory() {
      localStorage.setItem("Mangahistory", JSON.stringify(this.searchHistory));
    }
  
    addHistory(query :string){  
    this.searchHistory.push(query);
    this.saveHistory();
    }



    
    clearHistory() {
      this.searchHistory = [];
      localStorage.removeItem("Mangahistory");
    }
  

  constructor() {

    for (let i = 0; i < namesarr.length; i++) {
      this.manga.push({
        name: namesarr[i],
        year:years[i],
        descript: descripts[i],
        age:ages[i],
        image: `/manga/manga${i}.jpg`,
        link: `/Anime${i}`,
        rating: ratings[i],
        links: linkis[i]
      });
    }
    this.filteredManga = [...this.manga];
    this.loadHistory();
  }

  searchManga() {
    const sch = this.search.trim().toLowerCase();
    if (!sch) {
      this.showAll();
      return;
    }

    this.addHistory(sch);

    this.filteredManga = this.manga.filter(item =>
      item.name.toLowerCase().includes(sch)
    );
    this.activeYear = '';
    this.activeAge = '';
    this.activeRating = '';
  }
  

  filterYear(min: number, max: number) {
    this.activeYear = `${min}-${max}`;
    this.filteredManga = this.manga.filter(item => item.year >= min && item.year <= max);
    this.activeAge = '';
    this.activeRating = '';
  }

  
  filterRating(min:number, rating: number) {
    this.activeRating = `${min}-${rating}`;
    this.filteredManga = this.manga.filter(item => item.rating>= min && item.rating<=rating);
    this.activeYear = '';
    this.activeAge = '';
  }

  showAll() {
  this.activeYear = '';
  this.activeAge = '';
  this.activeRating = '';
    this.filteredManga = [...this.manga];
  }

}

