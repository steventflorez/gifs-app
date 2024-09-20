import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-lists',
  templateUrl: './card-lists.component.html',
  styleUrl: './card-lists.component.css'
})
export class CardListsComponent {

  @Input()
  public gifs: Gif[] = [];

}
