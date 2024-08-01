import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { exhaustMap, map, Observable, startWith } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {
    public searchInput = new FormControl<string>('');
    public filteredOptions: Observable<Hero[]> =
        this.searchInput.valueChanges.pipe(
            startWith(''),
            exhaustMap((value) => {
                return this.heroService.getSuggestions(value ?? '')
            })
        )
    constructor(private heroService: HeroesService) {

    }
}
