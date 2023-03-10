import {IIngredient} from "../../data/ingredient-type";

export interface GetIngredientsResponse {
    success: boolean;
    data: IIngredient[];
}
