import Api from "../../api/api";
import {
    ingredientsLoadAction,
    ingredientsLoadCompleteAction,
    ingredientsLoadFailAction,
    TIngredientsActions
} from "../actions/ingredients-actions";
import {TAppThunk} from "./app-thunk-type";

export const getIngredientsThunk = ():TAppThunk<TIngredientsActions> => (dispatch) => {
    dispatch(ingredientsLoadAction())
    Api.getIngredients()
        .then(data => dispatch(ingredientsLoadCompleteAction(data.data)))
        .catch(() => dispatch(ingredientsLoadFailAction()))
}
