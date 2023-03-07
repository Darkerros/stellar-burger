import Api from "../../api/api";
import {ingredientsLoadAction, ingredientsLoadCompleteAction, ingredientsLoadFailAction} from "./ingredientsActions";

export const getIngredientsThunk = () => dispatch => {
    dispatch(ingredientsLoadAction())
    Api.getIngredients()
        .then(data => dispatch(ingredientsLoadCompleteAction(data.data)))
        .catch(() => dispatch(ingredientsLoadFailAction()))
}
