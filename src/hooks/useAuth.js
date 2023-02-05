import {useSelector} from "react-redux";
import {superUserSelector} from "../services/selectors/userSelectors";


const useAuth = () => {
    return useSelector(superUserSelector)
}

export default useAuth