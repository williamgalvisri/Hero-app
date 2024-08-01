import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styles: [],
})
export class LoginPageComponent {
    loginForm!: FormGroup;

    get isValid(): boolean {
        return this.loginForm.invalid
    }

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            // Handle form submission
            const email =  this.loginForm.get('email')?.value ;
            const password =  this.loginForm.get('password')?.value;
            console.log(email, password);
            this.authService.login(email, password).pipe(
                tap(
                    (user) => {
                        this.router.navigate(['/'])
                    }
                )
            ).subscribe();
        }
    }
}
