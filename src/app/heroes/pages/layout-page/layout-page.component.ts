import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent {
    public sideBarItems = [
        { label: 'Listado', icon: 'label', path: './list'},
        { label: 'Añadir', icon: 'add', path: './new.hero'},
        { label: 'Buscar', icon: 'search', path: './search'}
    ]

    constructor(private router: Router) {

    }

    logout() {
        localStorage.removeItem('token')
        this.router.navigate(['/auth/login'])
    }
}
