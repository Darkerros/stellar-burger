import React from 'react';
import tabsStyles from "./Tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

// @ts-ignore
const Tabs = ({classname}) => {
    return (
        <div className={classname ? tabsStyles.Tabs +' '+ classname : tabsStyles.Tabs}>
            <Tab active={true} value={'Булки'} onClick={(e) => {}}>Булки</Tab>
            <Tab active={false} value={'Начинки'} onClick={(e) => {}}>Булки</Tab>
            <Tab active={false} value={'Соусы'} onClick={(e) => {}}>Булки</Tab>
        </div>
    );
};

export default Tabs;