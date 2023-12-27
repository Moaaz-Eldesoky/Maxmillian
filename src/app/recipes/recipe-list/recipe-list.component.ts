import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe("A Test Recipe","this is a simple test","https://www.recipetineats.com/wp-content/uploads/2015/11/Thai-Turmeric-Chicken_4.jpg?w=900"),
    new Recipe("A Test Recipe","this is a simple test","https://www.recipetineats.com/wp-content/uploads/2015/11/Thai-Turmeric-Chicken_4.jpg?w=900")
  ];
}
