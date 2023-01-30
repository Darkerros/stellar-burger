import Api from "../../api/Api";
import {ingredientsLoadAction, ingredientsLoadCompleteAction, ingredientsLoadFailAction} from "./ingredientsActions";

export const getIngredientsThunk = () => dispatch => {
    dispatch(ingredientsLoadAction())
    Api.getIngredients()
        .then(data => dispatch(ingredientsLoadCompleteAction(data.data)))
        .catch(() => dispatch(ingredientsLoadFailAction()))
}
