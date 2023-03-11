import {IIngredient} from "./ingredient-type";
export interface IIngredientGroup {
    type: 'bun' | "main" | "sauce";
    name: 'Булки' | "Главное" | "Соусы";
    ingredientsList: IIngredient[];
}