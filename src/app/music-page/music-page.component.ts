import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { namesarr, categorys, authors } from '../musicmassiv';
import { FrazaPipe } from '../pipes/fraza.pipe';

@Component({
  selector: 'app-music-page',
  imports: [NgFor, FrazaPipe, FormsModule],
  templateUrl: './music-page.component.html',
  styleUrl: './music-page.component.css',
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
export class MusicPageComponent {

  smart = false;

  IfSort(){
    this.smart = !this.smart;
  }

  search = '';
  searchHistory: string[] = [];
  searchVisible = false;
  activeCategory = '';

  fraza = [
    "Пусть мелодии сакуры наполняют сердце светом и вдохновением.",
    "Звуки ветра и струн переплетаются в гармонии самурайского духа.",
    "Каждая нота - как лепесток сакуры, уносящий в мир мечты.",
    "Погрузись в музыку, где восток встречается с вечностью.",
    "Музыка - это язык души, говорящий без слов и границ.",
    "Пусть ритмы сакуры ведут тебя по пути гармонии и силы."
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
    this.searchMusic();
    this.Blur();
  }

    loadHistory() {
      const history = localStorage.getItem("Musichistory");
      if (history) {
        this.searchHistory = JSON.parse(history);
      }
    }
  
    saveHistory() {
      localStorage.setItem("Musichistory", JSON.stringify(this.searchHistory));
    }
  
    addHistory(query :string){  
    this.searchHistory.push(query);
    this.saveHistory();
    }
 
    clearHistory() {
      this.searchHistory = [];
      localStorage.removeItem("Musichistory");
    }
  
  music: any[] = [];
  filteredMusic: any[] = [];

  audio = new Audio();
  isPlaying = false;
  currentSrc = '';
  constructor() {
    for(let i = 0; i < namesarr.length; i++) {
      this.music.push({
        name: namesarr[i],
        category: categorys[i],
        author: authors[i],
        music: `/music/Music${i}.mp3`
      });
    }
    this.filteredMusic = [...this.music];
    this.loadHistory();
  }

  Play(src: string) {
    this.currentSrc = src;
    if (this.currentSrc !== src) {
      this.audio.src = src;
      this.audio.load();
      this.currentSrc = src;
    }
      this.audio.src = src;
      this.audio.play();
      this.isPlaying = true;
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false; 
      });
  }
  
  Pause() {
    if (this.isPlaying = true) {
      this.audio.pause();
      this.isPlaying = false;
    }
}

searchMusic() {
  const sch = this.search.trim().toLowerCase();
  if (!sch) {
    this.showAll();
    return;
  }

  this.activeCategory = '';
  this.addHistory(sch);


  this.filteredMusic = this.music.filter(item =>
    item.name.toLowerCase().includes(sch) ||
    item.author.toLowerCase().includes(sch)
  );
 
}

filterCategory(Category:string) {
  this.activeCategory = `${Category}`;
  this.filteredMusic = this.music.filter(item => item.category == Category);

}

showAll() {
    this.activeCategory = '';
    this.filteredMusic = [...this.music];
  }

}
