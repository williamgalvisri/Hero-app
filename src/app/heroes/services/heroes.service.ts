import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interface';
import { evironments } from 'src/evironments/evironments';

@Injectable({providedIn: 'root'})
export class HeroesService {
    private baseUrl = evironments.baseUrl;
    constructor(private http: HttpClient) { }


    getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseUrl}/heroes`)
    }
}
