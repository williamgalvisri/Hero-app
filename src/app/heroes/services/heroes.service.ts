import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { evironments } from 'src/evironments/evironments';

@Injectable({ providedIn: 'root' })
export class HeroesService {
    private baseUrl = evironments.baseUrl;
    constructor(private http: HttpClient) { }


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }

    getHeroById(id: string): Observable<Hero | undefined> {
        return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`)
            .pipe(
                catchError(error => of(undefined) )
            )
    }

    getSuggestions(query: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${query}`)
        .pipe(
            catchError(error => of([]) )
        )
    }
}
