import React from 'react';
import tabsStyles from "./Tabs.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import tabInfoType from "../../types/tabInfoType";

// @ts-ignore
const Tabs = ({className, tabInfoList,activeTab,setActiveTab}) => {
    const setActiveTabAndScroll = (id) => {
        setActiveTab(id)
        document.querySelector('#'+id).scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div className={className ? tabsStyles.Tabs + ' ' + className : tabsStyles.Tabs}>
            {tabInfoList.map((tabInfo, index) =>
                <Tab active={activeTab === tabInfo.id}
                     value={tabInfo.id}
                     key={tabInfo.id}
                     onClick={setActiveTabAndScroll}
                >
                    {tabInfo.name}
                </Tab>)}
        </div>
    );
};

Tabs.propTypes = {
    className: PropTypes.string,
    tabInfoList: PropTypes.arrayOf(tabInfoType.isRequired),
    activeTab: PropTypes.string.isRequired,
    setActiveTab: PropTypes.func.isRequired,
}

export default Tabs;