import React from 'react';
import tabsStyles from "./Tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

// @ts-ignore
const Tabs = ({className,tabNamingList}) => {
    return (
        <div className={className ? tabsStyles.Tabs +' '+ className : tabsStyles.Tabs}>
            {tabNamingList.map((tabName: string, index: number) => <Tab active={index === 0} value={tabName} key={index} onClick={(e) => {}}>{tabName}</Tab>)}
        </div>
    );
};

Tabs.propTypes = {className: PropTypes.string, tabNamingList: PropTypes.arrayOf(PropTypes.string)}

export default Tabs;