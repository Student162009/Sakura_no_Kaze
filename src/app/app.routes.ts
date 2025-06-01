import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';

import { EnterComponent } from './enter/enter.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MangaPageComponent } from './manga-page/manga-page.component';
import { AnimePageComponent } from './anime-page/anime-page.component';
import { MusicPageComponent } from './music-page/music-page.component';
import { WallpapersPageComponent } from './wallpapers-page/wallpapers-page.component';
import { Error401Component } from './error401/error401.component';
import { SecretListComponent } from './secret-list/secret-list.component';

import { Anime0Component } from './anime/anime0/anime0.component';
import { Anime1Component } from './anime/anime1/anime1.component';
import { Anime2Component } from './anime/anime2/anime2.component';
import { Anime3Component } from './anime/anime3/anime3.component';
import { Anime4Component } from './anime/anime4/anime4.component';
import { Anime5Component } from './anime/anime5/anime5.component';
import { Anime6Component } from './anime/anime6/anime6.component';
import { Anime7Component } from './anime/anime7/anime7.component';
import { Anime8Component } from './anime/anime8/anime8.component';
import { Anime9Component } from './anime/anime9/anime9.component';
import { Anime10Component } from './anime/anime10/anime10.component';
import { Anime11Component } from './anime/anime11/anime11.component';
import { Anime12Component } from './anime/anime12/anime12.component';
import { Anime13Component } from './anime/anime13/anime13.component';
import { Anime14Component } from './anime/anime14/anime14.component';
import { Anime15Component } from './anime/anime15/anime15.component';
import { Anime16Component } from './anime/anime16/anime16.component';
import { Anime17Component } from './anime/anime17/anime17.component';
import { Anime18Component } from './anime/anime18/anime18.component';
import { Anime19Component } from './anime/anime19/anime19.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { Error404funComponent } from './error404fun/error404fun.component';
import { CodeComponent } from './code/code.component';
import { GojoSecretComponent } from './gojo-secret/gojo-secret.component';
import { AnimesecretComponent } from './animesecret/animesecret.component';
import { message } from './rand404';

export const routes: Routes = [
  { path: '', component: EnterComponent },
  { path: 'error401', component: Error401Component },
  { path: 'Main', component: MainPageComponent, canActivate: [AuthGuard] },
  {
    path: 'MangaPage',
    component: MangaPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'AnimePage',
    component: AnimePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'MusicPage',
    component: MusicPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'WallpapersPage',
    component: WallpapersPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'Secretik', component: SecretListComponent, canActivate:[AuthGuard]},
  { path: 'Anime0', component: Anime0Component, canActivate: [AuthGuard] },
  { path: 'Anime1', component: Anime1Component, canActivate: [AuthGuard] },
  { path: 'Anime2', component: Anime2Component, canActivate: [AuthGuard] },
  { path: 'Anime3', component: Anime3Component, canActivate: [AuthGuard] },
  { path: 'Anime4', component: Anime4Component, canActivate: [AuthGuard] },
  { path: 'Anime5', component: Anime5Component, canActivate: [AuthGuard] },
  { path: 'Anime6', component: Anime6Component, canActivate: [AuthGuard] },
  { path: 'Anime7', component: Anime7Component, canActivate: [AuthGuard] },
  { path: 'Anime8', component: Anime8Component, canActivate: [AuthGuard] },
  { path: 'Anime9', component: Anime9Component, canActivate: [AuthGuard] },
  { path: 'Anime10', component: Anime10Component, canActivate: [AuthGuard] },
  { path: 'Anime11', component: Anime11Component, canActivate: [AuthGuard] },
  { path: 'Anime12', component: Anime12Component, canActivate: [AuthGuard] },
  { path: 'Anime13', component: Anime13Component, canActivate: [AuthGuard] },
  { path: 'Anime14', component: Anime14Component, canActivate: [AuthGuard] },
  { path: 'Anime15', component: Anime15Component, canActivate: [AuthGuard] },
  { path: 'Anime16', component: Anime16Component, canActivate: [AuthGuard] },
  { path: 'Anime17', component: Anime17Component, canActivate: [AuthGuard] },
  { path: 'Anime18', component: Anime18Component, canActivate: [AuthGuard] },
  { path: 'Anime19', component: Anime19Component, canActivate: [AuthGuard] },
  { path: 'Code', component: CodeComponent, canActivate: [AuthGuard] },
  { path: 'Gojo-Secret', component: GojoSecretComponent, canActivate: [AuthGuard] },
  { path: 'UwU', component: AnimesecretComponent, canActivate: [AuthGuard] },
  { path: 'error404', component: NotFoundPageComponent },
  { path: 'error404fun', component: Error404funComponent },

  { path: '**', redirectTo: `/${message}`, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
