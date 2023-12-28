import { Component } from '@angular/core';
import { Ingrident } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingrident[] = [
    new Ingrident('Apples', 5),
    new Ingrident('Tomato', 10)
  ];

  constructor() { }

}
