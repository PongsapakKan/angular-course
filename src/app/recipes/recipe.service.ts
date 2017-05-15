import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 
            'This is simply a test', 
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fires', 20)
            ]),
        new Recipe('A Test Recipe 2', 
            'This is simply a test 2', 
            'http://maxpixel.freegreatpicture.com/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bun', 2)
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}