import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
    selector: 'heroes-hero-card',
    templateUrl: './heroes-hero-card.component.html',
    styleUrls: ['./heroes-hero-card.component.css']
})
export class HeroesHeroCardComponent implements OnInit {
    @Input() hero!: Hero

    ngOnInit(): void {
        if(!this.hero) new Error('Hero is a property required');
    }
}
