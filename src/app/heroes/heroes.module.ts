import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HeroesHeroCardComponent } from './components/heroes-hero-card/heroes-hero-card.component';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    HeroesHeroCardComponent,
    HeroImagePipe,
  ],
  providers: [HeroImagePipe],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class HeroesModule { }
