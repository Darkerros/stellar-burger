import {FC} from "react";
import styles from "./bun-burger-component.module.css";
import {ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunIcon from "../../images/icons/bun-icon.png";
import {IChoseBun} from "../../types/data/chose-bun-interface";

interface IProps {
    cartIngredient: IChoseBun;
    type: "top" | "bottom" | undefined
}

const BurgerComponent: FC<IProps> = ({cartIngredient, type}) => {

    return (
        <li className={styles.container + ` mb-4`}>
            <ConstructorElement text={cartIngredient.name}
                                thumbnail={cartIngredient.image ? cartIngredient.image : bunIcon}
                                price={cartIngredient.price}
                                isLocked={true} type={type}
                                extraClass={'ml-8'}
                                handleClose={() => null}/>
        </li>
    );
};


export default BurgerComponent;