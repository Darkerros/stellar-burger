import api from "../../api/api";
import {ingredientsLoadAction, ingredientsLoadCompleteAction, ingredientsLoadFailAction} from "./ingredientsActions";

export const getIngredientsThunk = () => dispatch => {
    dispatch(ingredientsLoadAction())
    api.getrIngredients()
        .then(data => dispatch(ingredientsLoadCompleteAction(data.data)))
        .catch(() => dispatch(ingredientsLoadFailAction()))
}
