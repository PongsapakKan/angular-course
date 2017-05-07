import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
