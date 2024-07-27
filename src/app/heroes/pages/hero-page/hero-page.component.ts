import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { delay, Observable, switchMap, tap } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls:["./hero-page.component.css"]
})
export class HeroPageComponent implements OnInit {

    public hero$: Observable<Hero | undefined> =
        this.activatedRoute.params.pipe(
            switchMap(({id}) => {
                return this.heroService.getHeroById(id).pipe(delay(2000))
            }),
            tap((hero) => {
                if(!hero) this.router.navigate(['/heroes/list'])
            })
        )
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private heroService: HeroesService,
        private heroImagePipe: HeroImagePipe
    ) {}

    getHeroImage(hero: Hero) {
        return `url(${this.heroImagePipe.transform(hero)})`
    }

    ngOnInit(): void {
    }

    goBack() {
        this.router.navigate(['/heroes/list'])
    }
}
