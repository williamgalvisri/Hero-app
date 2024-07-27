import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

    heroes$: Observable<Hero[]> = this.hereosService.getHeroes();

    constructor(private hereosService: HeroesService){

    }

    ngOnInit(): void {

    }
}
