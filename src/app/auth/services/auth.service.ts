import { Injectable } from '@angular/core';
import { evironments } from 'src/evironments/evironments';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = evironments.baseUrl;
    private user?: User;
    constructor(private http: HttpClient) {}

    get currentUser(): User | undefined{
        if(!this.user) return undefined;
        return structuredClone(this.user)
    }

    login(email: string, password: string): Observable<User> {
        return this.http.get<User>(`${this.baseUrl}/users/1`)
            .pipe(
                tap(
                    (user) => {
                        this.user = user
                        localStorage.setItem('token', 'aaaa.aaaa.aaaa')
                    }
                )
            )
    }
}
