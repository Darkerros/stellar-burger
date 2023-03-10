import {superUserSelector} from "../services/selectors/user-selectors";
import {useAppSelector} from "./use-app-selector";


const useAuth = () => {
    return useAppSelector(superUserSelector)
}

export default useAuth