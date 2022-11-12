import React from 'react';
import tabsStyles from "./Tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";

const Tabs = () => {
    return (
        <div className={tabsStyles.Tabs}>
            <Tab active={true} value={'Булки'} onClick={(e) => {}}>Булки</Tab>
            <Tab active={false} value={'Булки'} onClick={(e) => {}}>Булки</Tab>
            <Tab active={false} value={'Булки'} onClick={(e) => {}}>Булки</Tab>
        </div>
    );
};

export default Tabs;